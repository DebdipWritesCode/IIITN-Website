import DirectorMessage from "../components/DirectorMessage"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import OurPartners from "../components/OurPartners"
import Updates from "../components/Updates"
import Events from "../components/Events"
import Testimonials from "../components/Testimonials"
import Footer from "../components/Footer"

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Updates />
      <DirectorMessage />
      <OurPartners />
      <Events />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default Home