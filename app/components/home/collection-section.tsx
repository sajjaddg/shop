import { Photo } from "../../shop-controls";

export function CollectionSection() {
  return (
    <section id="new" className="editorial-split collection" aria-labelledby="collection-title">
      <div className="editorial-copy" data-motion="copy">
        <span className="eyebrow">کالکشن مزون</span>
        <h2 id="collection-title" className="collection-title">عبا و<br />لباس مجلسی</h2>
        <p>از عباهای مشکی تا مدل شیلا با رنگ‌بندی سبز، کاربنی، مشکی، نارنجی و قرمز. مدل‌ها را ببینید و برای قیمت و ثبت سفارش به ما پیام بدهید.</p>
        <div><a className="button" href="#best">مشاهده مدل‌ها</a></div>
      </div>
      <Photo name="occasion" alt="لباس مجلسی مشکی با رویه آزاد و تزئینات طلایی از مزون پری گل" className="collection-photo" reveal />
    </section>
  );
}
