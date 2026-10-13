import { Photo } from "../../shop-controls";

export function LookbookSection() {
  return (
    <section id="lookbook" className="lookbook" aria-labelledby="lookbook-title">
      <div className="lookbook-intro" data-motion="copy">
        <div>
          <span className="eyebrow">از صفحه مزون</span>
          <h2 id="lookbook-title">قاب‌های پری گل</h2>
        </div>
        <p>مدل‌ها را از نزدیک ببینید؛ لباس عربی وارداتی، مدل انا و ست شومیز شلوار. تصاویر با کمک هوش مصنوعی از عکس‌های مزون پری گل بازسازی شده‌اند.</p>
      </div>
      <div className="lookbook-pair">
        <figure className="look-first">
          <a href="https://www.instagram.com/p/DcJDYBoNFJl/" target="_blank" rel="noopener noreferrer" aria-label="دیدن لباس عربی وارداتی در اینستاگرام">
            <div className="look-photo-frame"><Photo name="arabian-dress" alt="لباس عربی سفید با دوخت تزئینی طلایی" reveal /></div>
          </a>
          <figcaption><b>۰۱</b> لباس عربی وارداتی</figcaption>
        </figure>
        <figure className="look-second">
          <a href="https://www.instagram.com/p/Dcd6ey_tJl_/" target="_blank" rel="noopener noreferrer" aria-label="دیدن مدل انا در اینستاگرام">
            <Photo name="ana" alt="مدل انا با طرح هندسی مشکی و طلایی" reveal />
          </a>
          <figcaption><b>۰۲</b> مدل انا</figcaption>
        </figure>
      </div>
      <div className="lookbook-last">
        <figure>
          <a href="https://www.instagram.com/p/DaFQs3LtI5c/" target="_blank" rel="noopener noreferrer" aria-label="دیدن ست شومیز شلوار در اینستاگرام">
            <div className="look-photo-frame"><Photo name="shirt-trousers" alt="ست شومیز و شلوار در رنگ موکا" reveal /></div>
          </a>
          <figcaption><b>۰۳</b> ست شومیز شلوار، رنگ موکا</figcaption>
        </figure>
      </div>
    </section>
  );
}
