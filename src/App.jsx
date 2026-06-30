import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Glance from './components/Glance'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-[#0A1628] min-h-screen w-full flex flex-col font-sans select-none overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <Glance />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App
