import { useState, useEffect } from 'react'
import { ThemeProvider } from './contexts/ThemeContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

function AppContent() {
  const [about, setAbout] = useState(null)
  const [skills, setSkills] = useState([])
  const [projects, setProjects] = useState([])
  const [experience, setExperience] = useState([])
  const [education, setEducation] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [aboutRes, skillsRes, projectsRes, expRes, eduRes] = await Promise.all([
          fetch('/api/about').then(res => res.json()),
          fetch('/api/skills').then(res => res.json()),
          fetch('/api/projects').then(res => res.json()),
          fetch('/api/experience').then(res => res.json()),
          fetch('/api/education').then(res => res.json())
        ])
        setAbout(aboutRes)
        setSkills(skillsRes)
        setProjects(projectsRes)
        setExperience(expRes)
        setEducation(eduRes)
      } catch (error) {
        console.error('Failed to fetch data:', error)
      }
    }
    fetchData()
  }, [])

  return (
    <div className="app">
      <Navbar />
      <Hero about={about} />
      <About about={about} />
      <Skills skills={skills} />
      <Experience experience={experience} />
      <Education education={education} />
      <Projects projects={projects} />
      <Contact />
      <Footer about={about} />
      <ScrollToTop />
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

export default App
