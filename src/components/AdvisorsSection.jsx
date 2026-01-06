import React from 'react'
import Avatar from './Avatar'

export default function AdvisorsSection({ advisors }) {
  return (
    <section className="section advisors-section" id="advisors">
      <div className="container">
        <h2 className="section-title">Our Advisors</h2>
        <p className="section-subtitle">Faculty members guiding our club</p>
        
        <div className="advisors-grid">
          {advisors.map((advisor) => (
            <div key={advisor.name} className="advisor-card">
              <Avatar name={advisor.name} image={advisor.image} />
              <div className="advisor-info">
                <h3 className="advisor-name">{advisor.name}</h3>
                <p className="advisor-role">{advisor.role}</p>
                <p className="advisor-department">{advisor.department}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
