import Navbar from './components/Navbar'
import './App.css'
import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Client from './components/Client'
import Purpose from './components/Purpose'

function App() {
  return (
    <>
    <Navbar/>
    <main>
      <Hero/>
      <Services/>
      <Portfolio/>
      <Client/>
      <Purpose/>
    </main>
    </>
  )
}

export default App