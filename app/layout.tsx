import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const peyda = localFont({
  src: "../public/fonts/peyda.woff2",
  weight: "500",
  variable: "--font-peyda",
  display: "swap",
});

export const metadata: Metadata = {
  title: "مزون پری گل | عبا و لباس مجلسی در بوشهر",
  description: "دوخت انواع عبا و لباس مجلسی در مزون پری گل. ثبت سفارش از واتساپ و اینستاگرام، ارسال به سراسر کشور. بوشهر، پاساژ ملت، پلاک ۱۱.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fa" dir="rtl" className={`${peyda.variable}`}>
      <body>{children}</body>
    </html>
  );
}
