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
        <a href="/works"><button className="works-more-btn">Show More ↗</button></a>
      </section>

      <section className="skills-certs">
        <section className="skills">
          <h2>Skills</h2>
          <h3>All Programming language just a tools,<br/>but the logic is the heart of programming</h3>
          <div className="skills-icon">
            <div>
              <img src="assets/skills/netcore-logo.png"></img>
            </div>
            <div>
              <img src="assets/skills/Laravel-Logo.svg"></img>
            </div>
            <div>
              <img src="assets/skills/go-logo.svg"></img>
            </div>
            <div>
              <img src="assets/skills/sqlserver-logo.png"></img>
            </div>
            <div>
              <img src="assets/skills/postgresql-logo.webp"></img>
            </div>
            <div>
              <img src="assets/skills/blazor-logo.png"></img>
            </div>
            <div>
              <img src="assets/skills/react-logo.png"></img>
            </div>
            <div>
              <img src="assets/skills/gcp-logo.png"></img>
            </div>
          </div>
        </section>

        <section className="certs">
          <h2>Certification</h2>
          <h3>Proved by Certification Owned</h3>
          <div className="certs-list">
            <div className="certs-div">
              <h4>GCP Associate Cloud Engineer ↗</h4>
              <p>Foundation certification validates broad knowledge of cloud concetpts and the products, services, features, benefits, and use cases of Google Cloud</p>
              <p>Valid until: November 2028</p>
            </div>
            <div className="certs-div">
              <h4>GCP Associate Cloud Engineer ↗</h4>
              <p>Foundation certification validates broad knowledge of cloud concetpts and the products, services, features, benefits, and use cases of Google Cloud</p>
              <p>Valid until: November 2028</p>
            </div>
            <div className="certs-div">
              <h4>GCP Associate Cloud Engineer ↗</h4>
              <p>Foundation certification validates broad knowledge of cloud concetpts and the products, services, features, benefits, and use cases of Google Cloud</p>
              <p>Valid until: November 2028</p>
            </div>
            <div className="certs-div">
              <h4>GCP Associate Cloud Engineer ↗</h4>
              <p>Foundation certification validates broad knowledge of cloud concetpts and the products, services, features, benefits, and use cases of Google Cloud</p>
              <p>Valid until: November 2028</p>
            </div>
          </div>
          <button className="works-more-btn">Show More ↗</button>
        </section>

      </section>

      <section className="articles">
        <h2>Recent Articles</h2>
        <p>Research and Experiment are<br/>my middle name. Here some what I do</p>
        <div className="card-container">
          <Card />
          <Card />
          <Card />
        </div>
        <a href="/articles"><button className="works-more-btn">Show More ↗</button></a>
      </section>
    </>
  );
}
