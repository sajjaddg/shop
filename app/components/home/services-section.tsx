const services = [
  ["ارسال به سراسر کشور", "برای ثبت سفارش، از واتساپ یا دایرکت پیام بدهید."],
  ["سفارش از واتساپ", "نام یا تصویر مدل موردنظرتان را برای ما بفرستید."],
  ["قیمت در دایرکت", "قیمت مدل‌ها را از صفحه اینستاگرام بپرسید."],
  ["دیدار در بوشهر", "پاساژ ملت، پلاک ۱۱؛ مزون پری گل."],
];

export function ServicesSection() {
  return (
    <section id="ordering" className="services" aria-label="خرید از مزون پری گل">
      {services.map(([title, description]) => (
        <div key={title}>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      ))}
    </section>
  );
}
