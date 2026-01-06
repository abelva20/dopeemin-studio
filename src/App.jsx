import About from "./components/About"
import Features from "./components/Features"
import Hero from "./components/Hero"
import Luminara from "./components/Luminara"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden bg-violet-400">
      <Navbar/>
      <Hero/>
      <About/>
      <Features/>
      <Luminara/>
    </main>
  )
}

export default App