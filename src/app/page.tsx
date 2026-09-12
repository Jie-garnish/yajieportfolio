const Arrow = () => <span aria-hidden="true">↗</span>;

function FleetAdminCover() {
  return (
    <div className="fleet-cover" aria-hidden="true">
      <div className="macbook">
        <div className="macbook-screen">
          <i className="macbook-camera"/>
          <img src="/portfolio/fleet-admin/fleets-current.png" alt="" />
        </div>
        <div className="macbook-base"><i/></div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Yajie Hé home">yajie.hé</a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="https://fe60a914-a5db-4090-9884-3ceb3930b372.filesusr.com/ugd/6045b8_79c101ef96994961be389011064e16cf.pdf" target="_blank" rel="noreferrer">Résumé</a>
          <a className="header-cta" href="mailto:jessheyajie@gmail.com?subject=Portfolio%20inquiry">Get in touch</a>
        </nav>
      </header>

      <section className="hero-v2" id="top">
        <div className="hero-grid" aria-hidden="true"/>
        <div className="hero-editorial">
          <div className="hero-copy">
            <span className="kicker">Yajie Hé · UX &amp; Product Designer · Austin, Texas</span>
            <h1>Making complex<br/>products feel<br/><em>clear and human.</em></h1>
            <p>I design accessible experiences across enterprise, civic technology, healthcare, and AI—turning ambiguity into useful direction.</p>
            <div className="hero-actions">
              <a className="pill-button" href="#work">View selected work <Arrow/></a>
              <a className="secondary-link" href="#about">More about me ↓</a>
            </div>
          </div>
        </div>
        <div className="hero-foot"><span>Strategy · Research · Interaction</span><span>Scroll to explore ↓</span></div>
      </section>

      <div className="marquee" aria-label="Areas of expertise">
        <div>Enterprise UX <i/> Product strategy <i/> Accessibility <i/> Design systems <i/> User research <i/> AI workflows <i/> Enterprise UX <i/> Product strategy <i/> Accessibility <i/> Design systems <i/> User research <i/> AI workflows <i/></div>
      </div>

      <section className="work-v2" id="work">
        <div className="work-heading">
          <span>Selected work · 2023–2026</span>
          <h2>Solving the right problem,<br/><em>then designing it well.</em></h2>
        </div>

        <a className="featured-project" href="/work/volvo-dashboard">
          <div className="featured-visual volvo-visual">
            <div className="feature-orbit orbit-one"/><div className="feature-orbit orbit-two"/>
            <FleetAdminCover/>
          </div>
          <div className="featured-copy">
            <div className="project-meta"><span>Volvo Group</span><span>Enterprise UX</span><span>2026</span></div>
            <h3>Fleet Admin</h3>
            <p>A dashboard that brings North American fleet admins the essential information needed to manage operations efficiently.</p>
            <div className="project-tags"><span>Enterprise UX</span><span>Interaction design</span><span>Cross-regional alignment</span></div>
            <span className="text-link">View case study <Arrow/></span>
          </div>
        </a>

        <div className="project-pair single-project">
          <a className="project-tile florida-tile" href="/work/florida">
            <div className="tile-image"><img src="/portfolio/florida-clean.png" alt="Florida Resource Map interface designs"/></div>
            <div className="tile-copy">
              <div className="project-meta"><span>Florida Community Innovation</span><span>Civic tech</span><span>2023–25</span></div>
              <h3>30% faster access to essential resources.</h3>
              <p>Making a statewide directory clearer and more accessible for seniors, social workers, and families in need.</p>
              <span className="text-link">View case study <Arrow/></span>
            </div>
          </a>
        </div>
      </section>

      <section className="earlier-work">
        <div className="eyebrow-row"><span>Earlier explorations</span><span>Mobile &amp; responsive web</span></div>
        <div className="earlier-grid">
          <a className="earlier-card" href="/work/aqui">
            <div className="earlier-image coral-bg"><img src="/portfolio/aqui-clean.png" alt="Aqui Beirut mobile shopping experience"/></div>
            <div><span>Mobile commerce · 2021</span><h3>Aqui Beirut</h3><p>A clearer path through sizing, returns, and exchanges.</p><b>View case study <Arrow/></b></div>
          </a>
          <a className="earlier-card" href="/work/maynooth">
            <div className="earlier-image blue-bg"><img src="/portfolio/maynooth-clean.png" alt="Maynooth furniture responsive website"/></div>
            <div><span>Responsive web · Earlier work</span><h3>Maynooth Furniture</h3><p>Making furniture discovery and customization feel easier.</p><b>View case study <Arrow/></b></div>
          </a>
        </div>
      </section>

      <section className="about-v2" id="about">
        <div className="about-heading"><span>About</span><h2>The designer<br/><em>behind the work.</em></h2></div>
        <div className="about-content">
          <div className="about-portrait"><img src="/portfolio/portrait.jpg" alt="Portrait of Yajie Hé"/><span>Fujian, China → Austin, Texas</span></div>
          <div className="about-copy">
            <p className="about-lead">I&apos;m a multidisciplinary designer who feels at home where people, systems, and messy problems meet.</p>
            <p>Before design, I taught English and Japanese and worked in photography. That background still shapes how I listen, explain complexity, and notice the human story inside a product.</p>
            <p>Today, I design across automotive enterprise tools, civic technology, healthcare AI, and responsive web experiences. I work closely with engineers, product managers, and stakeholders to turn ambiguity into direction.</p>
            <p>My principle is simple: good design should help the most people and hurt the least.</p>
            <div className="about-columns">
              <div><span>Disciplines</span><b>Enterprise UX</b><b>Product strategy</b><b>User research</b><b>Design systems</b><b>Accessibility</b></div>
              <div><span>Tools</span><b>Figma</b><b>Adobe Creative Cloud</b><b>Miro</b><b>HTML / CSS</b><b>AI workflows</b></div>
            </div>
          </div>
        </div>
        <div className="experience-v2">
          <div><span>2026—Now</span><b>UX Design Intern</b><em>Volvo Group</em></div>
          <div><span>Previous</span><b>UX Designer</b><em>Healthcare AI startup</em></div>
          <div><span>2023—2025</span><b>UX Design Fellow</b><em>Florida Community Innovation</em></div>
          <div><span>2026</span><b>Master&apos;s, Mass Communication</b><em>University of Florida</em></div>
        </div>
      </section>

      <section className="contact-v2" id="contact">
        <span>Let&apos;s collaborate</span>
        <h2>Let&apos;s make something<br/><em>clear, useful, and human.</em></h2>
        <a href="mailto:jessheyajie@gmail.com?subject=Portfolio%20inquiry">jessheyajie@gmail.com <Arrow/></a>
        <footer>
          <a className="wordmark" href="#top">yajie.hé</a>
          <div><a href="http://www.linkedin.com/in/yajiehe09" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://fe60a914-a5db-4090-9884-3ceb3930b372.filesusr.com/ugd/6045b8_79c101ef96994961be389011064e16cf.pdf" target="_blank" rel="noreferrer">Résumé ↗</a></div>
          <span>© 2026 Yajie Hé</span>
        </footer>
      </section>
    </main>
  );
}
