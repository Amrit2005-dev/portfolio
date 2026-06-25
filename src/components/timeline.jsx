import '../styles/timeline.css'

const TIMELINE_DATA = [
  {
    id: 1,
    title: 'Bennett University',
    subtitle: 'B.Tech Computer Science and Engineering',
    date: 'Aug 2024 - May 2028(expected)',
    type: 'Education',
    bullets: [

      ' Focused on Software Engineering, Data Structures & Algorithms, Databases, System Design, AI/ML, and Data Science'
    ]
  },
  {
    id: 2,
    title: 'innomatics research labs',
    subtitle: 'Data Science with Advanced Genai',
    date: ' November 2025 - April 2026',
    type: 'Work',
    bullets: [
      'MLOps',
      'Advanced Prompt Engineering',
      'LangChain & AI Agents',
      'RAG (Retrieval-Augmented Generation)',
      'LangGraph',
      'AWS (EC2 & Bedrock)'
    ]
  },

  {
    id: 3,
    title: 'Actively exploring roles',
    subtitle: 'Seeking opportunities to contribute to high-impact engineering teams.',
    date: 'Present',
    type: 'Open to work',
    bullets: []
  }
]

export default function Timeline() {
  return (
    <section className="timeline-section" id="experience">
      <div className="section-header">
        <h2 className="section-title">Timeline</h2>
        <p className="section-subtitle">My professional and educational journey.</p>
      </div>

      <div className="timeline-container">
        <div className="timeline-line"></div>

        {TIMELINE_DATA.map((item) => (
          <div key={item.id} className={`timeline-item ${item.id % 2 === 0 ? 'right' : 'left'}`}>
            <div className="timeline-dot"></div>

            <div className="timeline-card">
              <div className="card-header">
                <span className={`timeline-tag ${item.type.toLowerCase().replace(/\s+/g, '-')}`}>
                  {item.type}
                </span>
                <span className="timeline-date">{item.date}</span>
              </div>

              <h3 className="timeline-item-title">{item.title}</h3>
              <h4 className="timeline-item-subtitle">{item.subtitle}</h4>

              {item.bullets.length > 0 && (
                <ul className="timeline-item-bullets">
                  {item.bullets.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
