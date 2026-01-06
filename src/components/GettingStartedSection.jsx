const GettingStartedSection = ({ items }) => (
  <section className="section getting-started" id="start">
    <div className="section__header">
      <div>
        <p className="eyebrow">Your First Steps</p>
        <h2>Getting Started in 4 Steps</h2>
      </div>
    </div>
    <div className="getting-started-grid">
      {items.map((item, index) => (
        <div className="getting-started-card" key={item.title}>
          <div className="getting-started-number">{index + 1}</div>
          <div className="getting-started-icon">{item.icon}</div>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <div className="getting-started-time">⏱ {item.time}</div>
        </div>
      ))}
    </div>
  </section>
)

export default GettingStartedSection
