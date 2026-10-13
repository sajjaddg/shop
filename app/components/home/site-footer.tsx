import { shop } from "../../catalog";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <a className="wordmark" href="#top">پری گل</a>
          <address>بوشهر، پاساژ ملت<br />پلاک ۱۱، مزون پری گل</address>
          <a href={`tel:${shop.phone}`} dir="ltr">{shop.phoneLabel}</a>
        </div>
        <div>
          <h3>مدل‌ها</h3>
          <a href="#abayas">عبا</a>
          <a href="#occasionwear">لباس مجلسی</a>
          <a href="#coats">کت تک</a>
          <a href={shop.instagram} target="_blank" rel="noopener noreferrer">همه مدل‌ها</a>
        </div>
        <div>
          <h3>سفارش</h3>
          <a href={shop.whatsapp} target="_blank" rel="noopener noreferrer">سفارش در واتساپ</a>
          <a href={shop.instagram} target="_blank" rel="noopener noreferrer">قیمت در دایرکت</a>
          <a href="#ordering">ارسال به سراسر کشور</a>
          <a href="#contact">پرسش درباره مدل‌ها</a>
        </div>
        <div>
          <h3>مزون</h3>
          <a href="#studio">مزون پری گل</a>
          <a href="#lookbook">قاب‌های مزون</a>
          <a href={shop.directions} target="_blank" rel="noopener noreferrer">مسیریابی فروشگاه</a>
          <a href={`tel:${shop.phone}`}>تماس با مزون</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>مزون پری گل</span>
        <a href={shop.instagram} target="_blank" rel="noopener noreferrer" dir="ltr">@parigol_mezon1</a>
      </div>
    </footer>
  );
}
