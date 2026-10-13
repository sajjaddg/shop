export const shop = {
  name: "مزون پری گل",
  phone: "09174020400",
  phoneLabel: "۰۹۱۷۴۰۲۰۴۰۰",
  whatsapp: "https://wa.me/989174020400",
  instagram: "https://www.instagram.com/parigol_mezon1/",
  directions: "https://www.google.com/maps/dir/?api=1&destination=28.9857315963115,50.8325538383684",
  address: "بوشهر، پاساژ ملت، پلاک ۱۱",
};

export type Product = {
  id: string;
  name: string;
  category: string;
  detail: string;
  image: string;
  alt: string;
  post: string;
};

export const products: Product[] = [
  { id: "occasionwear", name: "مدل شیلا", category: "لباس مجلسی", detail: "سبز، کاربنی، مشکی، نارنجی و قرمز", image: "shila", alt: "مدل شیلا با لباس طلایی و رویه حریر", post: "Dc1VUVAtmJk" },
  { id: "ana", name: "مدل انا", category: "لباس مجلسی", detail: "رنگ‌بندی در هایلایت انا در اینستاگرام", image: "ana", alt: "مدل انا با طرح هندسی مشکی و طلایی", post: "Dcd6ey_tJl_" },
  { id: "abayas", name: "مدل الماس", category: "عبا", detail: "رنگ مشکی", image: "almas", alt: "عبای مشکی مدل الماس با تزئینات نقره‌ای", post: "DcDbzO6ST5D" },
  { id: "negin", name: "مدل نگین", category: "عبا", detail: "سبز، مشکی و زرشکی", image: "negin", alt: "مدل نگین در رنگ سبز با آستین‌های آزاد", post: "DbSfqVotNhs" },
  { id: "jewelled-coat", name: "کت تک جواهردوزی", category: "کت تک", detail: "ثبت سفارش در واتساپ و دایرکت", image: "jewelled-coat", alt: "کت مشکی با جواهردوزی روی شانه و سینه", post: "Dd8i0oJtuIt" },
  { id: "embroidered-coat", name: "کت تک گلدوزی", category: "کت تک", detail: "جنس کرپ مرویجت", image: "embroidered-coat", alt: "کت بلند مشکی با گلدوزی سفید", post: "DdJLC3dtQ1W" },
  { id: "arabian-dress", name: "لباس عربی وارداتی", category: "لباس مجلسی", detail: "ثبت سفارش در واتساپ و دایرکت", image: "arabian-dress", alt: "لباس عربی سفید با تزئینات طلایی", post: "DcJDYBoNFJl" },
  { id: "shirt-trousers", name: "ست شومیز شلوار", category: "ست", detail: "سرمه‌ای، موکا و مشکی", image: "shirt-trousers", alt: "ست شومیز و شلوار رنگ موکا", post: "DaFQs3LtI5c" },
];

export function inquiryUrl(name: string) {
  return `${shop.whatsapp}?text=${encodeURIComponent(`سلام، درباره ${name} در مزون پری گل، قیمت و شرایط سفارش را می‌خواستم بدانم.`)}`;
}
