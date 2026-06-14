import { useEffect, useState } from 'react'
import AboutMeSection from './components/AboutMe/AboutMeSection'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import HeroSection from './components/HeroSection/HeroSection'
import ProjectsSection from './components/Projects/ProjectsSection'
import SkillsSection from './components/SkillsSection/SkillsSection'

export type Theme = 'dark' | 'light'

function App() {
  // デフォルトはダークモード、ユーザがテーマを選択した際はlocalStorageで管理。
  // テーマがライトモードの時のみbase.cssに記載のライトモードCSSを上書き
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = window.localStorage.getItem('theme')
    return savedTheme === 'light' ? 'light' : 'dark'
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <main className="app-shell min-h-screen bg-slate-950 text-slate-100">
      <Header
        theme={theme}
        onToggleTheme={() =>
          setTheme((currentTheme) =>
            currentTheme === 'dark' ? 'light' : 'dark',
          )
        }
      />
      <HeroSection />
      <SkillsSection />
      <AboutMeSection />
      <ProjectsSection />
      <Footer />
    </main>
  )
}

export default App
