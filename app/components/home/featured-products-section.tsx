import { products, shop } from "../../catalog";
import { ProductCard } from "../../shop-controls";

export function FeaturedProductsSection() {
  return (
    <section id="best" className="featured" aria-labelledby="products-title">
      <div className="section-heading">
        <h2 id="products-title">مدل‌های پری گل</h2>
        <a className="underlined" href={shop.instagram} target="_blank" rel="noopener noreferrer">مشاهده همه مدل‌ها در اینستاگرام</a>
      </div>
      <div className="product-grid">
        {products.slice(0, 4).map(product => <ProductCard product={product} key={product.id} />)}
      </div>
    </section>
  );
}
