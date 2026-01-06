import React from 'react'

const EventsSection = ({ events }) => {
  const getStatusBadge = (date) => {
    const eventDate = new Date(date)
    const today = new Date()
    const daysUntil = Math.ceil((eventDate - today) / (1000 * 60 * 60 * 24))
    
    if (daysUntil < 0) return { text: 'Past', class: 'past' }
    if (daysUntil <= 7) return { text: `${daysUntil} days`, class: 'soon' }
    if (daysUntil <= 30) return { text: 'This month', class: 'upcoming' }
    return { text: 'Upcoming', class: 'upcoming' }
  }

  const addToCalendar = (event) => {
    // Parse the event date and time
    const eventDate = new Date(event.date)
    const [startTime, endTime] = event.time.split(' - ')
    
    // Convert time to 24-hour format and create start/end dates
    const startDateTime = new Date(eventDate)
    const [startHour, startMinute] = startTime.match(/\d+/g)
    const startPeriod = startTime.match(/AM|PM/)[0]
    let hour = parseInt(startHour)
    if (startPeriod === 'PM' && hour !== 12) hour += 12
    if (startPeriod === 'AM' && hour === 12) hour = 0
    startDateTime.setHours(hour, parseInt(startMinute) || 0, 0)
    
    const endDateTime = new Date(eventDate)
    const [endHour, endMinute] = endTime.match(/\d+/g)
    const endPeriod = endTime.match(/AM|PM/)[0]
    let endHourNum = parseInt(endHour)
    if (endPeriod === 'PM' && endHourNum !== 12) endHourNum += 12
    if (endPeriod === 'AM' && endHourNum === 12) endHourNum = 0
    endDateTime.setHours(endHourNum, parseInt(endMinute) || 0, 0)
    
    // Format for Google Calendar
    const formatDateForGoogle = (date) => {
      return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'
    }
    
    const title = encodeURIComponent(event.title)
    const description = encodeURIComponent(event.description)
    const location = encodeURIComponent(event.venue)
    const startStr = formatDateForGoogle(startDateTime)
    const endStr = formatDateForGoogle(endDateTime)
    
    // Create Google Calendar URL
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startStr}/${endStr}&details=${description}&location=${location}`
    
    // Open in new window
    window.open(googleCalendarUrl, '_blank')
  }

  return (
    <section className="section events-section" id="events">
      <div className="section__header">
        <div>
          <p className="eyebrow">Events Calendar</p>
          <h2>What's Coming Up</h2>
          <p className="section-subtitle">Join us for workshops, competitions, and community gatherings</p>
        </div>
        <span className="tag season-tag">Spring 2026</span>
      </div>

      <div className="calendar-timeline">
        {events.map((event, index) => {
          const status = getStatusBadge(event.date)
          return (
            <div className="timeline-event" key={event.title}>
              <div className="event-date-marker">
                <div className="date-box">
                  <span className="date-day">{event.day}</span>
                  <span className="date-month">{event.month}</span>
                </div>
                {index < events.length - 1 && <div className="timeline-connector"></div>}
              </div>

              <div className="event-card">
                <div className="event-header">
                  <div className="event-tags">
                    <span className={`tag event-type ${event.type.toLowerCase()}`}>{event.type}</span>
                    <span className={`tag status-badge ${status.class}`}>{status.text}</span>
                  </div>
                  <div className="event-time">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    {event.time}
                  </div>
                </div>

                <h3 className="event-title">{event.title}</h3>
                <p className="event-description">{event.description}</p>

                <div className="event-footer">
                  <div className="event-venue">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    {event.venue}
                  </div>
                  <button className="event-action" onClick={() => addToCalendar(event)}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
                      <polyline points="17 21 17 13 7 13 7 21"></polyline>
                      <polyline points="7 3 7 8 15 8"></polyline>
                    </svg>
                    Add to Calendar
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="events-cta">
        <p>Want to stay updated on all our events?</p>
        <a className="button primary" href="#contact">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
          Subscribe to Updates
        </a>
      </div>
    </section>
  )
}

export default EventsSection
