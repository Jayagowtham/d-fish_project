import "./App.css"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Features from "./components/Features"
import FishDisplay from "./components/FishDisplay"
import Process from "./components/Process"
import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Features />
      <FishDisplay />
      <Process />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
