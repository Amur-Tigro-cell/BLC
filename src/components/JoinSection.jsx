import React, { useState } from 'react'

const JoinSection = ({ contacts }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    studentId: '',
    phone: '',
    interest: 'speaking',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Compose email body
    const subject = 'New Member Registration - BAIUST Language Club'
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0AStudent ID: ${formData.studentId}%0D%0APhone: ${formData.phone}%0D%0AInterest: ${formData.interest}`
    window.location.href = `mailto:blc@baiust.edu.bd?subject=${subject}&body=${body}`
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section className="section join" id="contact">
      <div className="join-header">
        <h2 className="section-title">Join BAIUST Language Club</h2>
        <p className="section-subtitle">
          Become part of a vibrant community dedicated to building confident communicators
        </p>
      </div>

      <div className="join-container">
        <div className="join-form-card card focus">
          <div className="join-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          </div>
          <h3>Member Registration</h3>
          <p className="form-description">Fill out the form below to express your interest</p>

          {submitted && (
            <div className="success-message">
              ✓ Registration initiated! Your email client should open shortly.
            </div>
          )}

          <div className="trust-note">
            💬 <strong>We respond within 24 hours</strong> — usually within 2
          </div>

          <form onSubmit={handleSubmit} className="signup-form">
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@baiust.edu.bd"
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="studentId">Student ID *</label>
                <input
                  type="text"
                  id="studentId"
                  name="studentId"
                  value={formData.studentId}
                  onChange={handleChange}
                  required
                  placeholder="e.g., 2021-1-60-001"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+880 1XXX-XXXXXX"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="interest">Primary Interest *</label>
              <select
                id="interest"
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                required
              >
                <option value="speaking">Public Speaking & Presentations</option>
                <option value="debate">Debate & Model UN</option>
                <option value="writing">Creative Writing & Essays</option>
                <option value="career">Career English & Interviews</option>
                <option value="general">General Communication Skills</option>
              </select>
            </div>

            <button type="submit" className="button primary submit-button">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"></path>
              </svg>
              Submit via Email
            </button>

            <div className="form-divider">
              <span>or</span>
            </div>

            <button type="button" className="button ghost submit-button" onClick={() => {
              const subject = `New Member Registration - BAIUST Language Club`;
              const body = `Name: ${formData.name}\nEmail: ${formData.email}\nStudent ID: ${formData.studentId}\nPhone: ${formData.phone}\nInterest: ${formData.interest}`;
              const mailtoLink = `mailto:blc@baiust.edu.bd?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
              alert(`📧 Copy the form details below and email to blc@baiust.edu.bd:\n\n${body}\n\nOr click OK to open email client.`);
              window.location.href = mailtoLink;
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              Email Separately
            </button>

            <p className="form-note">
              💡 <strong>Tip:</strong> If email doesn't open automatically, use the "Email Separately" button above to open your email client, or contact us via Instagram @baiustlanguageclub
            </p>
          </form>
        </div>

        <div className="join-sidebar">
          <div className="card cta-card">
            <div className="cta-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
            </div>
            <h4>Weekly Open Sessions</h4>
            <p>Drop by every Saturday at 3:00 PM. No registration needed for your first visit!</p>
            <a className="button ghost" href="#events">View Schedule</a>
          </div>

          <div className="card contact-card">
            <p className="eyebrow">Contact Information</p>
            <ul className="contact-list">
              {contacts.map((item) => (
                <li key={item.label}>
                  <span className="contact-label">{item.label}</span>
                  {item.link ? (
                    <a className="contact-value" href={item.link}>
                      {item.value}
                    </a>
                  ) : (
                    <span className="contact-value">{item.value}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="card quick-cta">
            <h4>Have Questions?</h4>
            <p>Our team is here to help you get started.</p>
            <a className="button primary" href="mailto:blc@baiust.edu.bd">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="M22 7l-10 7L2 7"/>
              </svg>
              Email Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default JoinSection
