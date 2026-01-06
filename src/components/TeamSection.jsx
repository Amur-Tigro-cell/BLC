import { useState } from 'react'
import Avatar from './Avatar.jsx'

const LeadershipTree = ({ president, vicePresidents, selectedMember, onMemberClick }) => (
  <div className="team-tree">
    <article className="node president">
      <Avatar name={president.name} image={president.image} />
      <h3
        className={`member-card ${selectedMember === president.name ? 'active' : ''}`}
        onClick={() => onMemberClick(president.name)}
      >
        {president.name}
      </h3>
      <p className="muted">{president.role}</p>
      <p>{president.focus}</p>
    </article>

    <div className="tree-branches" aria-hidden="true">
      <span />
      <span />
    </div>

    <div className="vp-row">
      {vicePresidents.map((vp) => (
        <article className="node vp" key={vp.name}>
          <Avatar name={vp.name} image={vp.image} />
          <h3
            className={`member-card ${selectedMember === vp.name ? 'active' : ''}`}
            onClick={() => onMemberClick(vp.name)}
          >
            {vp.name}
          </h3>
          <p className="muted">{vp.role}</p>
          <p>{vp.focus}</p>
        </article>
      ))}
    </div>
  </div>
)

const SecretariatTree = ({ general, assistants, selectedMember, onMemberClick }) => (
  <div className="team-tree general">
    <article className="node general">
      <Avatar name={general.name} image={general.image} />
      <h3
        className={`member-card ${selectedMember === general.name ? 'active' : ''}`}
        onClick={() => onMemberClick(general.name)}
      >
        {general.name}
      </h3>
      <p className="muted">{general.role}</p>
      <p>{general.focus}</p>
    </article>

    <div className="general-branches" aria-hidden="true" />

    <div className="vp-row">
      {assistants.map((asst) => (
        <article className="node assistant" key={asst.name}>
          <Avatar name={asst.name} image={asst.image} />
          <h3
            className={`member-card ${selectedMember === asst.name ? 'active' : ''}`}
            onClick={() => onMemberClick(asst.name)}
          >
            {asst.name}
          </h3>
          <p className="muted">{asst.role}</p>
          <p>{asst.focus}</p>
        </article>
      ))}
    </div>
  </div>
)

const TeamSection = ({
  leadership,
  generalSecretariat,
  treasurer,
  mediaTeam,
  organizingTeam,
}) => {
  const [showFull, setShowFull] = useState(false)
  const [selectedMember, setSelectedMember] = useState(null)

  const handleMemberClick = (name) => {
    setSelectedMember(name)
    setTimeout(() => setSelectedMember(null), 1200)
  }

  return (
    <section className="section" id="team">
      <style>{`
        .member-card {
          transition: color 200ms ease;
          cursor: pointer;
        }
        .member-card:hover {
          color: var(--accent);
        }
        .member-card.active {
          animation: memberGlowFadeUp 1.2s ease-out forwards;
        }
        @keyframes memberGlowFadeUp {
          0% {
            transform: translateY(0) scale(1);
            filter: drop-shadow(0 0 0px rgba(0, 217, 255, 0)) brightness(1);
          }
          40% {
            transform: translateY(-8px) scale(1.05);
            filter: drop-shadow(0 0 20px rgba(0, 217, 255, 0.8)) brightness(1.2);
          }
          100% {
            transform: translateY(-20px) scale(1);
            filter: drop-shadow(0 0 30px rgba(0, 217, 255, 0.6)) brightness(1);
          }
        }
      `}</style>
      <div className="section__header">
        <div>
          <p className="eyebrow">Team</p>
          <h2>Officers leading the club</h2>
        </div>
        <button
          type="button"
          className="button ghost small"
          onClick={() => setShowFull((v) => !v)}
          aria-expanded={showFull}
          aria-controls="full-team"
        >
          {showFull ? 'Hide full team' : 'Full team →'}
        </button>
      </div>

      <LeadershipTree 
        president={leadership.president} 
        vicePresidents={leadership.vicePresidents}
        selectedMember={selectedMember}
        onMemberClick={handleMemberClick}
      />

      {showFull && (
        <>
          <div className="team-subsection">
            <div className="section__header">
              <div>
                <p className="eyebrow">General Secretariat</p>
                <h3>Operations spine</h3>
              </div>
            </div>
            <SecretariatTree 
              general={generalSecretariat.general} 
              assistants={generalSecretariat.assistants}
              selectedMember={selectedMember}
              onMemberClick={handleMemberClick}
            />
          </div>

          <div className="team-subsection">
            <div className="section__header">
              <div>
                <p className="eyebrow">Finance & Media</p>
                <h3>Visibility and stewardship</h3>
              </div>
            </div>
            <div className="grid cards trio">
              <article className="card" key="treasurer">
                <Avatar name={treasurer.name} image={treasurer.image} />
                <h3
                  className={`member-card ${selectedMember === treasurer.name ? 'active' : ''}`}
                  onClick={() => handleMemberClick(treasurer.name)}
                >
                  {treasurer.name}
                </h3>
                <p className="muted">{treasurer.role}</p>
                <p>{treasurer.focus}</p>
              </article>
              {mediaTeam.map((member) => (
                <article className="card" key={member.name}>
                  <Avatar name={member.name} image={member.image} />
                  <h3
                    className={`member-card ${selectedMember === member.name ? 'active' : ''}`}
                    onClick={() => handleMemberClick(member.name)}
                  >
                    {member.name}
                  </h3>
                  <p className="muted">{member.role}</p>
                  <p>{member.focus}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="team-subsection">
            <div className="section__header">
              <div>
                <p className="eyebrow">Event Organizing & Planning</p>
                <h3>Execution crew</h3>
              </div>
            </div>
            <div className="grid cards quartet">
              {organizingTeam.map((member) => (
                <article className="card" key={member.name}>
                  <Avatar name={member.name} image={member.image} />
                  <h3
                    className={`member-card ${selectedMember === member.name ? 'active' : ''}`}
                    onClick={() => handleMemberClick(member.name)}
                  >
                    {member.name}
                  </h3>
                  <p className="muted">{member.role}</p>
                  <p>{member.focus}</p>
                </article>
              ))}
            </div>
          </div>


        </>
      )}
    </section>
  )
}

export default TeamSection
