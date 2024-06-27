import { Navbar } from './components/Navbar.component.jsx'
import { Hero } from './components/Hero.component.jsx'
import { Contact } from './components/Contact.component.jsx'
import { Project } from './components/Project.component.jsx'
import { Skills } from './components/Skills.component.jsx'
import { Footer } from './components/Footer.componnt.jsx'
import './App.css'

function App() {

  return (
    <>
    <Navbar />
    <Hero />
    <Project />
    <Skills />
    <Contact />
    <Footer />
    </>
  )
}

export default App
