const ProgramsSection = ({ programs }) => (
  <section className="section" id="programs">
    <div className="section__header">
      <div>
        <p className="eyebrow">Programs</p>
        <h2>Find Your Track</h2>
      </div>
      <a className="link" href="#contact">Talk to a mentor →</a>
    </div>
    <div className="grid cards">
      {programs.map((program) => (
        <article className="card" key={program.title}>
          <h3>{program.title}</h3>
          <p dangerouslySetInnerHTML={{ __html: program.detail }}></p>
        </article>
      ))}
    </div>
  </section>
)

export default ProgramsSection
