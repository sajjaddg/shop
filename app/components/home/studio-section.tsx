import { Photo } from "../../shop-controls";

export function StudioSection() {
  return (
    <section id="studio" className="editorial-split studio dark" aria-labelledby="studio-title">
      <div className="editorial-copy" data-motion="copy">
        <span className="eyebrow">مزون پری گل</span>
        <h2 id="studio-title">از بوشهر،<br />برای شما.</h2>
        <p>دوخت انواع عبا و لباس مجلسی در مزون پری گل. برای دیدن مدل‌ها به پاساژ ملت، پلاک ۱۱ سر بزنید؛ برای سفارش از شهرهای دیگر، از واتساپ یا دایرکت پیام بدهید.</p>
        <div className="studio-facts">
          <div><strong>بوشهر</strong><span>شهر مزون</span></div>
          <div><strong>۱۱</strong><span>پلاک، پاساژ ملت</span></div>
          <div><strong>ایران</strong><span>ارسال به سراسر کشور</span></div>
        </div>
      </div>
      <Photo name="shop" alt="ست شومیز شلوار موکا با پس‌زمینه خنثی هماهنگ با مزون پری گل" className="studio-photo" reveal />
    </section>
  );
}
