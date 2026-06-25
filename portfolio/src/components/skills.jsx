import '../styles/skills.css'

// Inline SVG Icons for premium visuals
const JavaIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="#E76F51">
    <path d="M19.43 14.14c.26 1.83-1.04 3.44-2.88 3.73-1.84.28-3.53-.78-3.79-2.61L11.5 6.78c-.26-1.83 1.04-3.44 2.88-3.73 1.84-.28 3.53.78 3.79 2.61l1.26 8.48zM6 14.5c0 1.93-1.57 3.5-3.5 3.5S-1 16.43-1 14.5 1.57 11 3.5 11 6 12.57 6 14.5zM22 6.5c0 .83-.67 1.5-1.5 1.5S19 7.33 19 6.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5z" />
  </svg>
)

const SpringBootIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="#6DB33F">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5l-3.5-3.5 1.41-1.41L11 13.67l5.09-5.09 1.41 1.41L11 16.5z" />
  </svg>
)

const NodeJsIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="#339933">
    <path d="M12 2c-.3 0-.6.1-.8.3l-8 4.6c-.5.3-.8.8-.8 1.4v9.2c0 .6.3 1.1.8 1.4l8 4.6c.5.3 1.1.3 1.6 0l8-4.6c.5-.3.8-.8.8-1.4V8.3c0-.6-.3-1.1-.8-1.4l-8-4.6c-.2-.2-.5-.3-.8-.3zm0 2.2l6.5 3.8L12 11.8 5.5 8l6.5-3.8zm-6.5 5.5l5.5 3.2v7.5l-5.5-3.2v-7.5zm7.5 10.7v-7.5l5.5-3.2v7.5l-5.5 3.2z" />
  </svg>
)

const ApiIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="#4B90CD">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 16h-2v-2h2v2zm0-4h-2V7h2v7z" />
  </svg>
)

const PostgresIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="#336791">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15.5l-4-4 1.41-1.41L11 14.67l6.59-6.59 1.41 1.41-8 8z" />
  </svg>
)

const MySqlIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="#00758F">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-3.5-3.5 1.42-1.42L10 14.18l6.08-6.08 1.42 1.42L10 17z" />
  </svg>
)

const MongoIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="#47A248">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5c0 .83-.67 1.5-1.5 1.5S10 17.33 10 16.5V11h3v5.5z" />
  </svg>
)

const RedisIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="#DC382D">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2 14H10v-2h4v2zm2-4H8V8h8v4z" />
  </svg>
)

const AwsIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="#FF9900">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.3 12.3c-.3.4-.8.7-1.4.9-.6.2-1.3.3-2 .3s-1.4-.1-2-.3c-.6-.2-1.1-.5-1.4-.9L8 13.1c.4-.4.9-.7 1.4-.9.5-.2 1.1-.3 1.8-.3s1.3.1 1.8.3c.5.2 1 .5 1.4.9l-.1.2z" />
  </svg>
)

const DockerIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="#2496ED">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM8.5 14H7v-1.5h1.5V14zm0-2.5H7V10h1.5v1.5zm2.5 2.5H9.5v-1.5H11V14zm0-2.5H9.5V10H11v1.5zm2.5 2.5H12v-1.5h1.5V14zm0-2.5H12V10h1.5v1.5zm2.5 2.5h-1.5v-1.5H17V14zm0-2.5h-1.5V10H17v1.5z" />
  </svg>
)

const CicdIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="#00C853">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2 14h-4v-2h4v2zm2-4H8V8h8v4z" />
  </svg>
)

const GitIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="#F05032">
    <path d="M22.6 11.3L12.7 1.4c-.4-.4-1-.4-1.4 0L9.9 2.8l2.9 2.9c.3-.1.7-.1 1 0 .6.2 1 .7 1.1 1.4l2.8 2.8c.6.1 1.1.5 1.3 1.1.3.8-.1 1.8-.9 2.1-.8.3-1.8-.1-2.1-.9-.2-.5-.1-1.1.2-1.5L13.4 9.8c-.4.3-.9.4-1.4.3-.8-.2-1.3-.9-1.3-1.7 0-.4.1-.7.3-1L8.2 4.6 1.4 11.3c-.4.4-.4 1 0 1.4l9.9 9.9c.4.4 1 .4 1.4 0l9.9-9.9c.4-.4.4-1 0-1.4z" />
  </svg>
)

const ReactIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="#61DAFB">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
  </svg>
)

const NextjsIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="#FFFFFF">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 15.5l-4-4V7.5h2V11l2 2 2-2V7.5h2V11l-4 4.5z" />
  </svg>
)

const TailwindIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="#38BDF8">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14h-2v-2h2v2zm0-4h-2V8h2v4z" />
  </svg>
)

const SKILLS_DATA = [
  {
    category: 'Backend',
    skills: [
      { name: 'Java', icon: <JavaIcon /> },
      { name: 'Spring Boot', icon: <SpringBootIcon /> },
      { name: 'Node.js', icon: <NodeJsIcon /> },
      { name: 'REST APIs', icon: <ApiIcon /> }
    ]
  },
  {
    category: 'Databases',
    skills: [
      { name: 'PostgreSQL', icon: <PostgresIcon /> },
      { name: 'MySQL', icon: <MySqlIcon /> },
      { name: 'MongoDB', icon: <MongoIcon /> },
      { name: 'Redis', icon: <RedisIcon /> }
    ]
  },
  {
    category: 'Cloud & DevOps',
    skills: [
      { name: 'AWS', icon: <AwsIcon /> },
      { name: 'Docker', icon: <DockerIcon /> },
      { name: 'CI/CD', icon: <CicdIcon /> },
      { name: 'Git', icon: <GitIcon /> }
    ]
  },
  {
    category: 'Frontend',
    skills: [
      { name: 'React', icon: <ReactIcon /> },
      { name: 'Next.js', icon: <NextjsIcon /> },
      { name: 'Tailwind CSS', icon: <TailwindIcon /> }
    ]
  }
]

export default function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="section-header">
        <h2 className="section-title">Technical Knowledge</h2>
        <p className="section-subtitle">Key skills across backend, databases, cloud/devops &amp; frontend.</p>
      </div>

      <div className="skills-grid">
        {SKILLS_DATA.map((categoryGroup, index) => (
          <div key={index} className="skills-card">
            <h3 className="skills-category-title">{categoryGroup.category}</h3>
            <ul className="skills-list">
              {categoryGroup.skills.map((skill, sIdx) => (
                <li key={sIdx} className="skills-item">
                  <span className="skill-icon-wrapper">{skill.icon}</span>
                  <span className="skill-name">{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
