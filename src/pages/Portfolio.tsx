import WorkSection from "../components/Portfolio/WorkSection"
import HeroSection from "../components/Portfolio/HeroSection"
import { AboutMeSection } from "../components/Portfolio/AboutMeSection"
import { ContactSection } from "../components/Portfolio/ContactSection"

export const Portfolio = () => {
  return (
    <section className="bg-black">
      <HeroSection />
      <WorkSection />
      <AboutMeSection />
      <ContactSection />
    </section>
  )
}
