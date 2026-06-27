import UrgencyBar from './components/UrgencyBar'
import Nav from './components/Nav'
import StrandsSection from './components/StrandsSection'
import Hero from './components/Hero'
import Services from './components/Services'
import Warranty from './components/Warranty'
import About from './components/About'
import Comparison from './components/Comparison'
import Carousel from './components/Carousel'
import Portfolio from './components/Portfolio'
import Offer from './components/Offer'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollReveal from './components/ScrollReveal'

export default function Home() {
  return (
    <>
      <UrgencyBar />
      <Nav />
      <StrandsSection />
      <Hero />
      <Services />
      <Carousel />
      <Warranty />
      <About />
      <Comparison />
      <Testimonials />
      <Portfolio />
      <Offer />
      <FAQ />
      <Contact />
      <Footer />
      <ScrollReveal />
    </>
  )
}
