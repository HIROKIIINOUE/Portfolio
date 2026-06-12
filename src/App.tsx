import AboutMe from './components/AboutMe/AboutMe'
import Header from './components/Header/Header'
import HeroSection from './components/HeroSection/HeroSection'
import SkillsSection from './components/SkillsSection/SkillsSection'

function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Header />
      <HeroSection />
      <SkillsSection />
      <AboutMe />
    </main>
  )
}

export default App
