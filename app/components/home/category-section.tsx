import { Photo } from "../../shop-controls";

const categories = [
  { title: "عبا", description: "مدل‌های الماس و نگین، دوخت انواع عبا.", image: "almas", href: "#abayas", link: "دیدن عباها", alt: "عبای مشکی مدل الماس" },
  { title: "لباس مجلسی", description: "مدل‌های شیلا و انا، لباس عربی وارداتی.", image: "shila", href: "#occasionwear", link: "دیدن لباس‌های مجلسی", alt: "لباس مجلسی مدل شیلا" },
  { title: "کت تک", description: "کت‌های گلدوزی و جواهردوزی شده.", image: "jewelled-coat", href: "#coats", link: "دیدن کت‌های تک", alt: "کت تک مشکی جواهردوزی شده" },
];

export function CategorySection() {
  return (
    <section className="category-strip dark" aria-label="دسته‌بندی‌های مزون">
      <div className="category-grid">
        {categories.map(category => (
          <a className="category-entry" href={category.href} key={category.title}>
            <Photo name={category.image} alt={category.alt} sizes="60px" />
            <span>
              <strong>{category.title}</strong>
              <span className="category-description">{category.description}</span>
              <span className="category-link">{category.link}</span>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
