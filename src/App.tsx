import { useEffect } from 'react'
import { initTiltEffects } from './lib/tilt'
import { Navbar } from './components/Navbar'
import { ScrollProgress } from './components/ScrollProgress'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Experience } from './components/Experience'
import { Education } from './components/Education'
import { Projects } from './components/Projects'
import { Impact } from './components/Impact'
import { ExpertisePanels } from './components/ExpertisePanels'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function App() {
  useEffect(() => {
    let dispose: (() => void) | undefined
    const id = requestAnimationFrame(() => {
      dispose = initTiltEffects(document.getElementById('root') ?? document)
    })
    return () => {
      cancelAnimationFrame(id)
      dispose?.()
    }
  }, [])

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Impact />
        <ExpertisePanels />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
