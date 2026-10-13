"use client";

import Image from "next/image";
import { createContext, useContext, useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import { inquiryUrl, products, shop, type Product } from "./catalog";

type ShopContextValue = { saved: string[]; toggleSaved: (id: string) => void; openPanel: (panel: "search" | "saved") => void };
const ShopContext = createContext<ShopContextValue | null>(null);
const storageKey = "parigol-saved-products";

function useShop() {
  const value = useContext(ShopContext);
  if (!value) throw new Error("Shop controls require ShopProvider");
  return value;
}

function normalize(text: string) {
  return text.replace(/ي/g, "ی").replace(/ك/g, "ک").replace(/[\u200c\u200e\u200f]/g, " ").replace(/\s+/g, " ").trim().toLowerCase();
}

export function ShopProvider({ children }: { children: ReactNode }) {
  const [saved, setSaved] = useState<string[]>([]);
  const [panel, setPanel] = useState<"search" | "saved" | null>(null);
  const [query, setQuery] = useState("");
  const [storageMessage, setStorageMessage] = useState("");
  const [ready, setReady] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const returnFocus = useRef<HTMLElement | null>(null);

  useEffect(() => {
    try {
      const value: unknown = JSON.parse(localStorage.getItem(storageKey) || "[]");
      if (Array.isArray(value)) setSaved(value.filter((id): id is string => typeof id === "string" && products.some(p => p.id === id)));
    } catch {
      setStorageMessage("فهرست ذخیره‌شده قابل خواندن نبود. می‌توانید مدل‌ها را دوباره انتخاب کنید.");
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!panel) return;
    const element = dialog.current;
    element?.showModal();
    if (panel === "search") element?.querySelector<HTMLInputElement>("input")?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { element?.close(); document.body.style.overflow = previousOverflow; returnFocus.current?.focus(); };
  }, [panel]);

  function toggleSaved(id: string) {
    const next = saved.includes(id) ? saved.filter(item => item !== id) : [...saved, id];
    setSaved(next);
    try {
      localStorage.setItem(storageKey, JSON.stringify(next));
      setStorageMessage("");
    } catch {
      setStorageMessage("مرورگر فهرست را نگه نمی‌دارد. انتخاب‌های شما تا بستن این صفحه باقی می‌مانند.");
    }
  }

  const results = panel === "saved" ? products.filter(product => saved.includes(product.id)) : products.filter(product => normalize(`${product.name} ${product.category} ${product.detail}`).includes(normalize(query)));
  return (
    <ShopContext.Provider value={{ saved, toggleSaved, openPanel: mode => { returnFocus.current = document.activeElement as HTMLElement; setQuery(""); setPanel(mode); } }}>
      {children}
      {panel && (
        <dialog ref={dialog} className="shop-dialog" aria-labelledby="dialog-title" onCancel={() => setPanel(null)} onClose={() => setPanel(null)} onClick={event => { if (event.target === event.currentTarget) setPanel(null); }}>
          <div className="dialog-heading"><h2 id="dialog-title">{panel === "search" ? "جستجوی مدل‌ها" : "مدل‌های ذخیره‌شده"}</h2><button className="text-control" onClick={() => setPanel(null)} aria-label="بستن پنجره">بستن ×</button></div>
          {panel === "search" && <div className="search-field"><label htmlFor="product-search">نام مدل، دسته‌بندی یا رنگ</label><input id="product-search" type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="مثلاً الماس، عبا یا مشکی" autoFocus /></div>}
          {storageMessage && <p role="status" className="dialog-note">{storageMessage}</p>}
          {panel === "saved" && !ready ? <p role="status">در حال خواندن مدل‌های ذخیره‌شده…</p> : (
            <>
              <p className="sr-only" role="status">{results.length.toLocaleString("fa-IR")} مدل</p>
              {results.length ? <div className="dialog-products">{results.map(product => (
                <article className="dialog-product" key={product.id}>
                  <a href={`https://www.instagram.com/p/${product.post}/`} target="_blank" rel="noopener noreferrer" aria-label={`مشاهده ${product.name} در اینستاگرام`}><Photo name={product.image} alt={product.alt} sizes="120px" /></a>
                  <div><h3>{product.name}</h3><p>{product.detail}</p><a className="underlined" href={inquiryUrl(product.name)} target="_blank" rel="noopener noreferrer">استعلام قیمت و سفارش</a><button className="save-text" onClick={() => toggleSaved(product.id)} aria-pressed={saved.includes(product.id)}>{saved.includes(product.id) ? "حذف از ذخیره‌ها" : "ذخیره مدل"}</button></div>
                </article>
              ))}</div> : <div className="empty-state"><p>{panel === "saved" ? "هنوز مدلی ذخیره نکرده‌اید." : "مدلی با این عبارت پیدا نشد."}</p><p>{panel === "saved" ? "قلب کنار تصویر مدل‌ها را انتخاب کنید تا اینجا ببینیدشان." : "نام مدل یا رنگ دیگری را بنویسید؛ مثل شیلا یا سبز."}</p><button className="button" onClick={() => { if (panel === "saved") setPanel(null); else setQuery(""); }}>{panel === "saved" ? "دیدن مدل‌ها" : "دیدن همه مدل‌ها"}</button></div>}
            </>
          )}
        </dialog>
      )}
    </ShopContext.Provider>
  );
}

export function Header() {
  const { saved, openPanel } = useShop();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="site-header" onKeyDown={event => { if (event.key === "Escape") setMenuOpen(false); }}>
      <button className="menu-toggle text-control" aria-expanded={menuOpen} aria-controls="category-nav" onClick={() => setMenuOpen(!menuOpen)}>منو {menuOpen ? "−" : "+"}</button>
      <nav id="category-nav" className={`category-nav ${menuOpen ? "is-open" : ""}`} aria-label="دسته‌بندی‌ها" onClick={() => setMenuOpen(false)}><a href="#abayas">عبا</a><a href="#occasionwear">لباس مجلسی</a><a href="#coats">کت تک</a><a href={shop.instagram} target="_blank" rel="noopener noreferrer">همه مدل‌ها</a></nav>
      <a href="#top" className="wordmark" aria-label="مزون پری گل، صفحه اصلی">پری گل</a>
      <div className="header-utilities"><button className="text-control" onClick={() => openPanel("search")}>جستجو</button><a className="header-contact" href={shop.whatsapp} target="_blank" rel="noopener noreferrer">تماس با مزون</a><button className="text-control" onClick={() => openPanel("saved")}>ذخیره‌ها ({saved.length.toLocaleString("fa-IR")})</button></div>
    </header>
  );
}

export function Photo({ name, alt, sizes = "(max-width: 960px) 100vw, 50vw", className = "", hero = false, reveal = false }: { name: string; alt: string; sizes?: string; className?: string; hero?: boolean; reveal?: boolean }) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  return (
    <div className={`photo ${hero ? "photo-cutout" : ""} ${className}`} data-loaded={loaded || failed ? "true" : "false"} data-motion={reveal ? "image" : undefined}>
      {!failed && <Image src={`/images/home/${name}.${hero ? "png" : "jpg"}`} alt={alt} fill sizes={sizes} preload={hero} onLoad={() => setLoaded(true)} onError={() => setFailed(true)} />}
      {!loaded && !failed && !hero && <span className="photo-loading" role="status">در حال بارگذاری تصویر…</span>}
      {failed && <div className="photo-error" role="status"><span>تصویر نمایش داده نشد.</span><a className="underlined" href={shop.instagram} target="_blank" rel="noopener noreferrer">دیدن تصاویر در اینستاگرام</a></div>}
    </div>
  );
}

export function ProductCard({ product }: { product: Product }) {
  const { saved, toggleSaved } = useShop();
  const selected = saved.includes(product.id);
  return (
    <article id={product.id} className="product-card">
      <div className="product-image"><a href={`https://www.instagram.com/p/${product.post}/`} target="_blank" rel="noopener noreferrer" aria-label={`مشاهده ${product.name} در اینستاگرام`}><Photo name={product.image} alt={product.alt} sizes="(max-width: 580px) 100vw, (max-width: 1100px) 50vw, 25vw" /></a><button className="save-button" onClick={() => toggleSaved(product.id)} aria-label={`${selected ? "حذف" : "ذخیره"} ${product.name}${selected ? " از ذخیره‌ها" : ""}`} aria-pressed={selected}><svg viewBox="0 0 24 24" width="18" height="18" fill={selected ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M12 20S4 15 4 9a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 9c0 6-8 11-8 11Z" /></svg></button></div>
      <div className="product-meta"><h3>{product.name}</h3><a href={inquiryUrl(product.name)} target="_blank" rel="noopener noreferrer">استعلام قیمت</a></div><p className="product-category">{product.category}</p>
    </article>
  );
}

export function InquiryForm() {
  const [question, setQuestion] = useState("");
  const [message, setMessage] = useState("");
  const [draft, setDraft] = useState("");
  function prepareInquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (question.trim().length < 3) { setMessage("نام مدل یا سوالتان را با حداقل سه حرف بنویسید."); setDraft(""); return; }
    setDraft(`${shop.whatsapp}?text=${encodeURIComponent(`سلام مزون پری گل، ${question.trim()}`)}`);
    setMessage("متن شما آماده است. برای ادامه، واتساپ را باز کنید.");
  }
  return (
    <><form className="inquiry-form" onSubmit={prepareInquiry}><label className="sr-only" htmlFor="model-question">نام مدل یا سوال شما</label><input id="model-question" type="text" required minLength={3} maxLength={500} value={question} onChange={event => { setQuestion(event.target.value); setDraft(""); setMessage(""); }} placeholder="نام مدل یا سوال شما" aria-describedby="inquiry-feedback" /><button className="button" type="submit">پرسش از مزون</button></form><div id="inquiry-feedback" className="inquiry-feedback" role="status">{message}{draft && <a className="underlined" href={draft} target="_blank" rel="noopener noreferrer">باز کردن واتساپ</a>}</div></>
  );
}
