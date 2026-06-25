import { useState, useEffect } from 'react'
import Navbar from './components/navebar.jsx'
import Hero from './components/hero.jsx'
import Projects from './components/projects.jsx'
import Timeline from './components/timeline.jsx'
import Skills from './components/skills.jsx'
import Contact from './components/contact.jsx'

function App() {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') || 'dark'
    })

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
        localStorage.setItem('theme', theme)
    }, [theme])

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'))
    }

    return (
        <>
            <Navbar theme={theme} toggleTheme={toggleTheme} />
            <Hero />
            <Projects />
            <Timeline />
            <Skills />
            <Contact />
        </>
    )
}

export default App