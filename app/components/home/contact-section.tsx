import { InquiryForm } from "../../shop-controls";

export function ContactSection() {
  return (
    <section id="contact" className="contact" aria-labelledby="contact-title">
      <h2 id="contact-title" data-motion="text">مدل شما کدام است؟</h2>
      <p data-motion="text">نام مدل را بنویسید یا سوالتان را بپرسید. برای قیمت، رنگ‌بندی و ثبت سفارش، گفت‌وگو را در واتساپ ادامه بدهید.</p>
      <InquiryForm />
    </section>
  );
}
