const News = () => {
  return (
    <section className="container">
      <h2 className="section-title">Latest Headlines</h2>
      <div className="news-grid">
        <article className="news-card">
          <img src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=500" alt="Stadium" />
          <div className="news-info">
            <h3>Champions League Final Preview</h3>
            <p>Everything you need to know about the upcoming clash in London.</p>
            <a href="#">Read More →</a>
          </div>
        </article>
        <article className="news-card">
          <img src="https://images.unsplash.com/photo-1552667466-07770ae110d0?q=80&w=2000&auto=format&fit=crop" alt="Scorer" />
          <div className="news-info">
            <h3>Top Scorer Race Heats Up</h3>
            <p>The race for the Golden Boot is tighter than ever this season.</p>
            <a href="#">Read More →</a>
          </div>
        </article>
        <article className="news-card">
          <img src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2000&auto=format&fit=crop" alt="Transfer" />
          <div className="news-info">
            <h3>Transfer Market Updates</h3>
            <p>Rumors and confirmed deals for the upcoming summer window.</p>
            <a href="#">Read More →</a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default News;
