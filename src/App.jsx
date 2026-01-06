import './App.css'
import AboutSection from './components/AboutSection.jsx'
import EventsSection from './components/EventsSection.jsx'
import FooterSection from './components/FooterSection.jsx'
import Hero from './components/Hero.jsx'
import Highlights from './components/Highlights.jsx'
import JoinSection from './components/JoinSection.jsx'
import NavBar from './components/NavBar.jsx'
import ProgramsSection from './components/ProgramsSection.jsx'
import TeamSection from './components/TeamSection.jsx'
import AdvisorsSection from './components/AdvisorsSection.jsx'
import TestimonialsSection from './components/TestimonialsSection.jsx'
import GettingStartedSection from './components/GettingStartedSection.jsx'
import {
  advisors,
  contacts,
  events,
  generalSecretariat,
  gettingStarted,
  highlights,
  leadership,
  mediaTeam,
  organizingTeam,
  programs,
  quickLinks,
  socialLinks,
  testimonials,
  treasurer,
} from './data/content.js'

function App() {
  return (
    <div className="page">
      <NavBar />
      <Hero />
      <Highlights items={highlights} />
      <AboutSection />
      <ProgramsSection programs={programs} />
      <EventsSection events={events} />
      <GettingStartedSection items={gettingStarted} />
      <AdvisorsSection advisors={advisors} />
      <TestimonialsSection testimonials={testimonials} />
      <JoinSection contacts={contacts} />
      <TeamSection
        leadership={leadership}
        generalSecretariat={generalSecretariat}
        treasurer={treasurer}
        mediaTeam={mediaTeam}
        organizingTeam={organizingTeam}
      />
      <FooterSection socialLinks={socialLinks} quickLinks={quickLinks} contacts={contacts} />
    </div>
  )
}

export default App
