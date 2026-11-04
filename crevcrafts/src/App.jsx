import Navbar from './components/Navbar'
import './App.css'
import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'

function App() {
  return (
    <>
    <Navbar/>
    <main>
      <Hero/>
      <Services/>
      <Portfolio/>
    </main>
    </>
  )
}

export default App