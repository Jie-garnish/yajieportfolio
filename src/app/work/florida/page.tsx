import type { Metadata } from "next";
import Link from "next/link";
import "./clean-images.css";

export const metadata: Metadata = {
  title: "Florida Resource Map — Yajie Hé",
  description: "Redesigning a statewide social-services directory to make finding help clearer, more accessible, and more human.",
};

const services = ["Food", "Housing & shelters", "Healthcare", "Education", "Employment", "Legal services", "LGBTQIA+ support", "Family & social", "Transportation", "Financial assistance", "Cultural", "Counseling & wellness"];
const eligibility = ["Seniors", "Low-income", "Women", "Children", "Veterans", "Non-citizens", "Assault or abuse survivors", "Families", "People with disabilities", "County or ZIP code", "Homeless or near homeless"];

const comparisons = [
  {
    eyebrow: "01 · Home page",
    title: "A clearer starting point",
    body: "We simplified the hero, reduced visual clutter in the category cards, added text-size controls, and strengthened the call to action so people could understand the map before beginning a search.",
    before: "/portfolio/florida/home-before.png",
    after: "/portfolio/florida/home-after.png",
  },
  {
    eyebrow: "02 · Search results",
    title: "More context before committing",
    body: "Detailed filters, category tags, ratings, distance, saving, and sharing help people judge whether a resource fits their situation without opening every result.",
    before: "/portfolio/florida/search-before.png",
    after: "/portfolio/florida/search-after.png",
  },
  {
    eyebrow: "03 · Resource detail",
    title: "Information people can trust",
    body: "Service details, languages, ratings, reviews, and community feedback give people the context they need to form a confident opinion about a resource and its quality.",
    before: "/portfolio/florida/detail-before.png",
    after: "/portfolio/florida/detail-after.png",
  },
  {
    eyebrow: "04 · Resource management",
    title: "A practical workspace for providers",
    body: "We preserved the familiar dashboard structure while clarifying hierarchy and controls, making it easier for resource managers to maintain accurate program information.",
    before: "/portfolio/florida/dashboard-before.png",
    after: "/portfolio/florida/dashboard-after.png",
  },
];

export default function FloridaCaseStudy() {
  return (
    <main className="frm-page">
      <nav className="case-nav" aria-label="Case study navigation">
        <Link className="wordmark" href="/">yajie.hé</Link>
        <Link href="/#work">← Back to selected work</Link>
      </nav>

      <section className="case-hero frm-hero">
        <div className="case-hero-inner">
          <span className="case-kicker">Florida Community Innovation · Civic technology</span>
          <h1>Making essential help<br />easier to <em>find.</em></h1>
          <p className="case-hero-lead">Redesigning the Florida Resource Map into an intuitive, inclusive directory for people navigating housing, food, healthcare, and other social services.</p>
          <div className="case-cover frm-cover"><img src="/portfolio/florida/home-after.png" alt="Florida Resource Map redesigned homepage" /></div>
        </div>
      </section>

      <section className="case-overview">
        <div className="case-overview-inner">
          <div className="case-facts">
            <div><span>My role</span><b>UI/UX Designer</b></div>
            <div><span>Team</span><b>1 designer · 13 developers</b></div>
            <div><span>Timeline</span><b>3 months</b></div>
            <div><span>Tools & methods</span><b>Figma · Miro · Research · Testing</b></div>
          </div>

          <div className="case-story">
            <div className="case-chapter">
              <div><span>01 · The problem</span><h2>Finding a resource is a pain.</h2></div>
              <div className="frm-copy-stack">
                <p>Navigating social services can be confusing. Millions of people in Florida—including families in economic crisis, seniors and caregivers, and people with disabilities—need assistance, yet the path to support is filled with friction.</p>
                <p>Different eligibility requirements, inconsistent terminology, and complex application processes create significant barriers. People can spend hours researching a service only to discover they do not qualify.</p>
              </div>
            </div>

            <blockquote className="frm-quote">“Every service we’ve ever tried to use required enormous amounts of paperwork that had to be filled out perfectly to see if you were ‘needy enough’… They deliberately make it as dehumanizing and demoralizing as possible.”<cite>— Social worker</cite></blockquote>

            <div className="frm-landscape">
              <div className="frm-section-heading"><span>02 · Current landscape</span><h2>One need. A fragmented system.</h2></div>
              <div className="frm-landscape-grid">
                <article><small>People in need</small><h3>Unique circumstances</h3><p>ALICE households, people with disabilities, domestic-violence survivors, veterans, older adults, LGBTQIA+ people, and many others.</p></article>
                <article><small>Referral providers</small><h3>Incomplete directions</h3><p>Call centers, printed directions, and online directories often surface only the programs a provider already knows.</p></article>
                <article><small>Social services</small><h3>Inconsistent information</h3><p>Shelters, food pantries, healthcare, and counseling programs use different language and rarely share a common update process.</p></article>
              </div>
              <p className="frm-insight"><b>Core tension:</b> everyone has different needs, while decentralized providers lack incentives to keep one comprehensive directory accurate and personalized.</p>
            </div>

            <div className="frm-taxonomy">
              <div><span>Service types</span><div>{services.map((item) => <i key={item}>{item}</i>)}</div></div>
              <div><span>Eligibility factors</span><div>{eligibility.map((item) => <i key={item}>{item}</i>)}</div></div>
            </div>

            <div className="frm-goals">
              <div className="frm-section-heading"><span>03 · Design requirements</span><h2>Three principles shaped the work.</h2><p>The goal was a centralized, comprehensive directory that connected people to support without repeating the mistakes of earlier attempts.</p></div>
              <div className="frm-goal-grid">
                <article><b>01</b><h3>Trust & transparency</h3><p>Show application steps and eligibility requirements early, reducing rejection surprises and the shame or frustration that can cause people to give up.</p></article>
                <article><b>02</b><h3>Accessible by design</h3><p>Support screen readers, keyboard navigation, text resizing, low vision, dyslexia, and users across ages and physical or cognitive abilities.</p></article>
                <article><b>03</b><h3>Feasible & scalable</h3><p>Create a practical system and give service providers a reason to maintain accurate, comprehensive information over time.</p></article>
              </div>
            </div>

            <div className="frm-users">
              <div className="frm-section-heading"><span>04 · Target users</span><h2>Designing both sides of the directory.</h2></div>
              <div className="frm-user-grid">
                <article>
                  <small>Archetype 01</small><h3>Assistance seeker</h3><p>Someone finding support for themself, a friend, or a family member.</p>
                  <div><b>Goals</b><ul><li>Find resources suited to their circumstances</li><li>Save and share useful programs</li><li>Feel confident about the next step</li></ul></div>
                  <div><b>Pain points</b><ul><li>Eligibility is difficult to understand</li><li>Unexpected requirements create frustration</li><li>Relevant programs are hard to find</li></ul></div>
                </article>
                <article>
                  <small>Archetype 02</small><h3>Resource manager</h3><p>A social worker, organizer, or provider finding information for others or maintaining program details.</p>
                  <div><b>Goals</b><ul><li>Help clients effectively</li><li>Track services efficiently</li><li>Increase program exposure and access</li></ul></div>
                  <div><b>Pain points</b><ul><li>Many callers are ultimately ineligible</li><li>Multiple programs are hard to manage</li><li>No-shows and incomplete applications waste time</li></ul></div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="frm-hmw">
        <span>How might we…</span>
        <h2>Make the Florida Resource Map intuitive and accessible, so people can quickly find resources tailored to their needs?</h2>
      </section>

      <section className="frm-process">
        <div className="frm-process-inner">
          <div className="frm-section-heading dark"><span>05 · Ideation & wireframing</span><h2>Turning a complex system into a clear path.</h2><p>We annotated user flows over low-fidelity designs to identify pain points before moving into high fidelity. The early work focused on information architecture, navigation, search, resource details, reviews, and saved resources.</p></div>
          <figure className="frm-priority-board"><a href="/portfolio/florida/ideation-priorities.png" target="_blank" rel="noreferrer"><img loading="lazy" src="/portfolio/florida/ideation-priorities.png" alt="Ideation board with research questions, pain points, opportunities, priority mapping, and a resource-map feature mind map" /></a><figcaption>Ideation & priority mapping · Open image to explore the details</figcaption></figure>
          <h3 className="frm-wire-title">Early wireframes</h3>
          <div className="frm-wire-grid">
            <figure><img loading="lazy" src="/portfolio/florida/wire-search.png" alt="Early wireframe for Florida Resource Map search results and filters" /><figcaption>Search results & filters</figcaption></figure>
            <figure><img src="/portfolio/florida/wire-saved.png" alt="Early wireframe for saved resources" /><figcaption>Saved resources</figcaption></figure>
            <figure><img loading="lazy" src="/portfolio/florida/wire-edit.png" alt="Resource editing wireframe with basic details, eligibility tags, and language fields" /><figcaption>Editing a resource</figcaption></figure>
            <figure><img loading="lazy" src="/portfolio/florida/wire-reviews.png" alt="Resource detail wireframe with image placeholders, service information, actions, and a map" /><figcaption>Resource details</figcaption></figure>
          </div>
        </div>
      </section>

      <section className="frm-final">
        <div className="frm-final-intro">
          <span>06 · Final design</span><h2>Building on earlier work—and making it usable.</h2>
          <p>My role was closely connected to the development team and built on designs from previous student teams. I refined the experience, extended missing states and interactions, and helped bring the Florida Resource Map to life.</p>
          <a href="https://www.figma.com/proto/QTvSQrqyJroUw75U9uCbyK/FRM-Version-5-Designs-Summer-2024?node-id=7233-12956&t=tHi4xFeWQ4c8lWBk-1&scaling=min-zoom&content-scaling=fixed&page-id=7233%3A12955&starting-point-node-id=7233%3A12956" target="_blank" rel="noreferrer">Explore the Figma prototype ↗</a>
        </div>
        <div className="frm-comparisons">
          {comparisons.map((item) => (
            <article className="frm-comparison" key={item.title}>
              <div className="frm-comparison-copy"><span>{item.eyebrow}</span><h3>{item.title}</h3><p>{item.body}</p></div>
              <div className="frm-compare-images">
                <figure><div><img src={item.before} alt={`Original ${item.title.toLowerCase()} design`} /></div><figcaption>Before</figcaption></figure>
                <figure><div><img src={item.after} alt={`Redesigned ${item.title.toLowerCase()} design`} /></div><figcaption>After</figcaption></figure>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="frm-system">
        <div className="frm-section-heading"><span>07 · Design system</span><h2>Consistency that can scale.</h2><p>A shared foundation for typography, iconography, color, and controls helped the design team and 13 developers work from the same visual language.</p></div>
        <div className="frm-system-grid">
          <figure><img src="/portfolio/florida/type.png" alt="Florida Resource Map typography system" /></figure>
          <figure><img src="/portfolio/florida/icons.png" alt="Florida Resource Map iconography" /></figure>
          <figure><img src="/portfolio/florida/colors.png" alt="Florida Resource Map color system" /></figure>
          <figure><img src="/portfolio/florida/buttons.png" alt="Florida Resource Map button system" /></figure>
        </div>
      </section>

      <section className="frm-reflection">
        <div className="frm-section-heading dark"><span>08 · Key takeaways</span><h2>Narrowing the problem made the solution stronger.</h2></div>
        <div className="frm-reflection-grid">
          <article><span>What I learned</span><p>Balancing a wide range of users and services was the central challenge. We focused the prototype on healthcare, housing, education, and food assistance to create something realistic, testable, and actionable.</p></article>
          <article><span>What users told us</span><p>Small-group usability sessions with community organizers and social workers confirmed the value of resource categories while revealing a need for clearer verification and stronger search.</p></article>
          <article><span>What comes next</span><p>Future iterations should add geotagging and live distance, provider tools for updating resources, and human assistance for people who cannot complete the journey digitally.</p></article>
        </div>
      </section>

      <section className="case-next"><span>Want to discuss the work?</span><a href="mailto:jessheyajie@gmail.com?subject=Florida%20Resource%20Map">Let&apos;s talk ↗</a></section>
    </main>
  );
}
