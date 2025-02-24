import DirectorMessage from "../components/DirectorMessage"
import Hero from "../components/Hero"
import OurPartners from "../components/OurPartners"
import Updates from "../components/Updates"
import Events from "../components/Events"
import Testimonials from "../components/Testimonials"

const Home = () => {
  return (
    <div>
      <Hero />
      <Updates />
      <DirectorMessage />
      <OurPartners />
      <Events />
      <Testimonials />
    </div>
  )
}

export default Home