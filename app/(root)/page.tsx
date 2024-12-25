import Card from '../components/Card';

export default function page() {
  return (
    <>
      <section className="hero">
          <div className="hero-content-left">
              <h1>Hi there!</h1>
          </div>
          <div className="hero-content-right">
              <p>
              <strong>Richard Alvin Pratama</strong> is a sans-serif typeface funded by Canonical and developed by Dalton Maag.
              <a href="#" className="learn-more">Learn more ↗</a>
              </p>
          </div>
      </section>

      <section className="works">
            <h2>Recent Works</h2>
            <div className="card-container">
              <Card />
              <Card />
              <Card />
            </div>
            <button className="works-more-btn">Show More ↗</button>
      </section>

      <section className="skills-cert">

      </section>
    </>
  );
}
