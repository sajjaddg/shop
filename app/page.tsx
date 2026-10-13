import { AnnouncementBar } from "./components/home/announcement-bar";
import { HeroSection } from "./components/home/hero-section";
import { CategorySection } from "./components/home/category-section";
import { CollectionSection } from "./components/home/collection-section";
import { ServicesSection } from "./components/home/services-section";
import { FeaturedProductsSection } from "./components/home/featured-products-section";
import { LookbookSection } from "./components/home/lookbook-section";
import { FabricSection } from "./components/home/fabric-section";
import { StudioSection } from "./components/home/studio-section";
import { ContactSection } from "./components/home/contact-section";
import { SiteFooter } from "./components/home/site-footer";
import { Header, ShopProvider } from "./shop-controls";
import { HomeMotion } from "./components/home/home-motion";

export default function Home() {
  return (
    <ShopProvider>
      <HomeMotion />
      <a className="skip-link" href="#main-content">رفتن به محتوای اصلی</a>
      <AnnouncementBar />
      <Header />
      <main id="main-content">
        <HeroSection />
        <CategorySection />
        <CollectionSection />
        <ServicesSection />
        <FeaturedProductsSection />
        <LookbookSection />
        <FabricSection />
        <StudioSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </ShopProvider>
  );
}
