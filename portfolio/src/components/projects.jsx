import { useState, useEffect } from 'react'
import '../styles/projects.css'

const PROJECTS_DATA = [
  {
    id: 'stock-market',
    title: 'Ads CTR Prediction Engine',
    tags: ['SaaS', 'App', 'Vite'],
    description: 'Designed and deployed an AI-driven click-through rate prediction system, improving ad performance insights through advanced machine learning models.',
    visitLink: '#'
  },
  {
    id: 'interviewly',
    title: 'Vision Fit – AI-Powered Fitness Tracker',
    tags: ['AI', 'NextJS', 'NodeJS', 'Socket.IO'],
    description: 'Built a real-time fitness tracking web app using React and computer-vision–based pose detection to count reps and provide form-feedback.',
    visitLink: '#'
  },
  {
    id: 'edlearn',
    title: 'Voice Assistant',
    tags: ['GCP', 'Vite', 'TTS', 'NLP'],
    description: 'Developed a voice-activated agent capable of executing tasks via verbal commands.',
    visitLink: '#'
  }
]

export default function Projects() {
  const [activeProjectId, setActiveProjectId] = useState('stock-market')
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    if (activeProjectId === 'interviewly') {
      setCurrentSlide(0)
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % 3)
      }, 3000)
      return () => clearInterval(interval)
    }
  }, [activeProjectId])

  const activeProject = PROJECTS_DATA.find(p => p.id === activeProjectId)

  return (
    <section className="projects-section" id="projects">
      <div className="section-header">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">Featured applications and platforms I have built.</p>
      </div>

      <div className="projects-container">
        {/* Left Side: Project Cards */}
        <div className="projects-list">
          {PROJECTS_DATA.map((project) => (
            <div
              key={project.id}
              className={`project-card ${activeProjectId === project.id ? 'active' : ''}`}
              onClick={() => setActiveProjectId(project.id)}
            >
              <div className="project-tags">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="project-tag">{tag}</span>
                ))}
              </div>
              <h3 className="project-card-title">{project.title}</h3>
              <p className="project-card-description">{project.description}</p>
              <a
                href={project.visitLink}
                className="project-visit-btn"
                onClick={(e) => e.stopPropagation()}
              >
                Visit &rarr;
              </a>
            </div>
          ))}
        </div>

        {/* Right Side: Smartphone Mockup */}
        <div className="phone-preview-container">
          <div className="phone-frame">
            <div className="phone-notch-container">
              <div className="phone-notch"></div>
            </div>

            <div className="phone-status-bar">
              <span className="stat-value">
                {new Date().toLocaleTimeString()}
              </span>
              <div className="status-icons">
                <span className="icon-signal">📶</span>
                <span className="icon-wifi">📶</span>
                <span className="icon-battery">🔋</span>
              </div>
            </div>
            <div className="phone-content">
              {activeProjectId === 'interviewly' ? (
                <div className="visionfit-slideshow">
                  <img
                    src="/visionfit-1.png"
                    className={`slide ${currentSlide === 0 ? 'active' : ''}`}
                    alt="Vision Fit Choose Routine Screen"
                  />
                  <img
                    src="/visionfit-2.png"
                    className={`slide ${currentSlide === 1 ? 'active' : ''}`}
                    alt="Vision Fit Workouts Screen"
                  />
                  <img
                    src="/visionfit-3.png"
                    className={`slide ${currentSlide === 2 ? 'active' : ''}`}
                    alt="Vision Fit Progress Screen"
                  />
                </div>
              ) : activeProjectId === 'stock-market' ? (
                <div className="empty-mockup-screen">
                  <div className="mockup-logo">📊</div>
                  <h4>Ads CTR Engine</h4>
                  <p>Inference & Analytics Dashboard</p>
                </div>
              ) : (
                <div className="empty-mockup-screen">
                  <div className="mockup-logo">🎙️</div>
                  <h4>Voice Assistant</h4>
                  <p>Speech Command Console</p>
                </div>
              )}
            </div>

            <div className="phone-home-indicator"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
