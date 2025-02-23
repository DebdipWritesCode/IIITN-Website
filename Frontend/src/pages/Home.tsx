import DirectorMessage from "../components/DirectorMessage"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import OurPartners from "../components/OurPartners"
import Updates from "../components/Updates"
import Events from "../components/Events"

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Updates />
      <DirectorMessage />
      <OurPartners />
      <Events />
    </div>
  )
}

export default Home