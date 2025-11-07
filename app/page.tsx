import HeroSection from "@/components/hero-section"
import HairGallerySection from "@/components/hair-gallery-section"
import BeforeAfterSection from "@/components/before-after-section"
import VideoTestimonialsSection from "@/components/video-testimonials-section"
import ProductBenefitsSection from "@/components/product-benefits-section"
import PricingSection from "@/components/pricing-section"
import OrderForm from "@/components/order-form"
import TrustElements from "@/components/trust-elements"
import Footer from "@/components/footer"
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <OrderForm />
      {/* <VideoTestimonialsSection /> */}
      <HairGallerySection />
      {/* <BeforeAfterSection /> */}
      <ProductBenefitsSection />
      <PricingSection />
      {/* <TrustElements /> */}
      <Footer />
      <SpeedInsights />
    </div>
  )
}
