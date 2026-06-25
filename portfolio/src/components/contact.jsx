import { useState } from 'react'
import emailjs from '@emailjs/browser'
import '../styles/contact.css'

const EmailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
)

const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
    <line x1="12" y1="18" x2="12.01" y2="18" />
  </svg>
)

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success' | 'error' | null

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS keys are missing from environment variables.")
      setSubmitStatus('error')
      setIsSubmitting(false)
      return
    }

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      time: new Date().toLocaleString()
    }

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error("Failed to send email:", error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        {/* Left Column - Contact Info */}
        <div className="contact-left">
          <h2 className="contact-title">Let's create something amazing.</h2>
          <p className="contact-description">
            Got an idea, project, or just want to say hi? I'm always open to meaningful conversations and cool collaborations.
          </p>

          <div className="contact-details">
            <div className="contact-item">
              <div className="contact-icon-wrapper">
                <EmailIcon />
              </div>
              <div className="contact-info">
                <span className="contact-label">Email:</span>
                <a href="mailto:amritsuhaney856@gmail.com" className="contact-link">
                  amritsuhaney856@gmail.com
                </a>
              </div>
            </div>
          </div>

          <p className="contact-quote">
            "Great things start with a simple message."
          </p>
        </div>

        {/* Right Column - Form Card */}
        <div className="contact-right">
          <div className="contact-card">
            <h3 className="card-title">Get In Touch</h3>
            <p className="card-subtitle">Let's build something cool together.</p>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  required
                  rows="5"
                  className="form-textarea"
                />
              </div>

              <button type="submit" disabled={isSubmitting} className="submit-btn">
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitStatus === 'success' && (
                <div className="status-msg success">Message sent successfully! Thank you.</div>
              )}
              {submitStatus === 'error' && (
                <div className="status-msg error">Something went wrong. Please try again later.</div>
              )}
            </form>

            <p className="reply-disclaimer">
              I usually reply within 24 hours ⚡
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
