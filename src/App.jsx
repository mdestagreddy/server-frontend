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
import Dialog from './components/Dialog'

const API_URL = import.meta.env.VITE_API_URL || '/api';

function AppContent() {
  const [about, setAbout] = useState(null)
  const [skills, setSkills] = useState([])
  const [projects, setProjects] = useState([])
  const [experience, setExperience] = useState([])
  const [education, setEducation] = useState([])
  const [dialog, setDialog] = useState({ open: false, title: '', message: '' })

  const showDialog = ({ title, message }) => {
    setDialog({ open: true, title, message })
  }

  const hideDialog = () => {
    setDialog(prev => ({ ...prev, open: false }))
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [aboutRes, skillsRes, projectsRes, expRes, eduRes] = await Promise.all([
          fetch(API_URL + '/about').then(res => res.json()),
          fetch(API_URL + '/skills').then(res => res.json()),
          fetch(API_URL + '/projects').then(res => res.json()),
          fetch(API_URL + '/experience').then(res => res.json()),
          fetch(API_URL + '/education').then(res => res.json())
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
      <Contact showDialog={showDialog} />
      <Footer about={about} />
      <ScrollToTop />
      <Dialog open={dialog.open} title={dialog.title} message={dialog.message} onClose={hideDialog} />
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
