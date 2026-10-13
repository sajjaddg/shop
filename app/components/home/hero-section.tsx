import { Photo } from "../../shop-controls";

export function HeroSection() {
  return (
    <section id="top" className="hero" aria-labelledby="page-title">
      <h1 id="page-title" className="sr-only">مزون پری گل، عبا و لباس مجلسی</h1>
      <p className="hero-caption">دوخت انواع<br />عبا و<br />لباس مجلسی</p>
      <div className="hero-wordmark" aria-hidden="true">پری گل</div>
      <div className="hero-model">
        <Photo name="hero-cutout" alt="مدل با عبای مشکی و گلدوزی نقره‌ای از مزون پری گل" hero sizes="(max-width: 580px) 240px, 320px" />
      </div>
      <div className="hero-bottom">
        <div className="hero-actions">
          <a className="button" href="#new">دیدن کالکشن</a>
          <a className="underlined" href="#best">مدل‌ها را ببینید</a>
        </div>
        <p>عبا و لباس مجلسی<br />مزون پری گل</p>
      </div>
    </section>
  );
}
