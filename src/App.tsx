import AboutMeSection from './components/AboutMe/AboutMeSection'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import HeroSection from './components/HeroSection/HeroSection'
import ProjectsSection from './components/Projects/ProjectsSection'
import SkillsSection from './components/SkillsSection/SkillsSection'

function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Header />
      <HeroSection />
      <SkillsSection />
      <AboutMeSection />
      <ProjectsSection />
      <Footer />
    </main>
  )
}

export default App
