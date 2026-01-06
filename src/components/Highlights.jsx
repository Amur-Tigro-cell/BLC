const Highlights = ({ items }) => (
  <section className="section highlights" aria-label="club highlights">
    {items.map((item) => (
      <div className="highlight" key={item.label}>
        <div className="highlight__value">{item.value}</div>
        <div className="highlight__label">{item.label}</div>
      </div>
    ))}
  </section>
)

export default Highlights
