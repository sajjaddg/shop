import { Photo } from "../../shop-controls";

export function FabricSection() {
  return (
    <section id="coats" className="editorial-split fabric" aria-labelledby="fabric-title">
      <div className="editorial-copy" data-motion="copy">
        <span className="eyebrow">پارچه و جزئیات</span>
        <h2 id="fabric-title">کرپ و<br />گلدوزی.</h2>
        <p>کت تک گلدوزی شده از کرپ مرویجت، در کنار کت تک جواهردوزی شده. تصاویر هر مدل را در اینستاگرام ببینید و برای سفارش در واتساپ پیام بدهید.</p>
        <dl className="fabric-details">
          <div><dt>کت گلدوزی</dt><dd>کرپ مرویجت</dd></div>
          <div><dt>کت جواهردوزی</dt><dd>تزئینات جواهردوزی</dd></div>
          <div><dt>ثبت سفارش</dt><dd>دایرکت و واتساپ</dd></div>
        </dl>
      </div>
      <a className="fabric-image-link" href="https://www.instagram.com/p/DdJLC3dtQ1W/" target="_blank" rel="noopener noreferrer" aria-label="دیدن جزئیات کت گلدوزی">
        <Photo name="embroidered-coat" alt="جزئیات گلدوزی سفید روی کت مشکی کرپ مرویجت" className="fabric-photo" reveal />
      </a>
    </section>
  );
}
