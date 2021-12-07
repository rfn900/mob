import Layout from '../components/layouts/Layout'
import Hero from '../components/homepage/Hero'
import AboutStats from '../components/homepage/AboutStats'
import Carousel from '../components/homepage/Carousel'
import About from '../components/homepage/About'
import Brands from '../components/homepage/Brands'
import ContactusSection from '../components/homepage/ContactusSection'

export default function Home() {
  return (
    <Layout>
      <Hero />
      <AboutStats />
      <Carousel />
      <About />
      <Brands />
      <ContactusSection />
    </Layout>
  )
}
