import { Navbar } from './components/Navbar'
import { ScrollProgress } from './components/ScrollProgress'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Resume } from './components/Resume'
import { Projects } from './components/Projects'
import { Stats } from './components/Stats'
import { GithubCta } from './components/GithubCta'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Resume />
        <Projects />
        <Stats />
        <GithubCta />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
