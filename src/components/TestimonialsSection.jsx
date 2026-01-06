const TestimonialsSection = ({ testimonials }) => (
  <section className="section testimonials" id="voices">
    <div className="section__header">
      <div>
        <p className="eyebrow">Voices from BLC</p>
        <h2>Members leading the change</h2>
      </div>
    </div>
    <div className="grid cards">
      {testimonials.map((item) => (
        <article className="card quote" key={item.name}>
          <p className="quote__text">“{item.quote}”</p>
          <div className="quote__meta">
            <div className="quote__name">{item.name}</div>
            <div className="quote__role">{item.role}</div>
          </div>
        </article>
      ))}
    </div>
  </section>
)

export default TestimonialsSection
