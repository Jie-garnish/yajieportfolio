import type { Metadata } from "next";
import "./volvo-dashboard.css";

export const metadata: Metadata = {
  title: "North America Fleet Dashboard — Yajie Hé",
  description: "A UX case study about translating regional fleet workflows into a shared product direction at Volvo Group.",
};

const Arrow = () => <span aria-hidden="true">↗</span>;

const imageRoot = "/portfolio/fleet-admin";

function Screen({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
  return (
    <figure className="screen-card">
      <img src={`${imageRoot}/${src}`} alt={alt} />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}

function SectionIntro({ label, title, children }: { label: string; title: React.ReactNode; children: React.ReactNode }) {
  return <div className="vd-intro"><div><span>{label}</span><h2>{title}</h2></div><div className="vd-intro-copy">{children}</div></div>;
}

export default function VolvoDashboardCaseStudy() {
  return (
    <main className="volvo-case" id="top">
      <header className="vd-nav">
        <a className="vd-wordmark" href="/">yajie.hé</a>
        <nav aria-label="Case study navigation"><a href="/#work">Work</a><a href="#reflection">Reflection</a><a href="mailto:jessheyajie@gmail.com">Say hello <Arrow/></a></nav>
      </header>

      <section className="vd-hero">
        <div className="vd-hero-copy">
          <div className="vd-overline"><span>Volvo Group</span><span>Fleet management</span><span>2026</span></div>
          <h1>Fleet<br/><em>Admin</em></h1>
          <p>Shaping a fleet-management dashboard inside OneView for North American workflows—without losing the consistency of Volvo&apos;s global product system.</p>
        </div>
        <div className="vd-facts" aria-label="Project facts">
          <div><span>Role</span><b>UX Designer · Facilitator</b></div>
          <div><span>Duration</span><b>3 months</b></div>
          <div><span>Team</span><b>1 UX · 1 Product Owner · 3 Developers</b></div>
          <div><span>Scope</span><b>Research · UX/UI · Testing</b></div>
          <div><span>Tools</span><b>Figma · VS Code</b></div>
        </div>
        <div className="vd-hero-visual">
          <div className="vd-screen-label">Final interface — Vehicle Fleets</div>
          <img className="vd-real-hero" src={`${imageRoot}/fleets-overview.png`} alt="OneView Vehicle Fleets overview showing fleet managers, dealer locations, status, and vehicle totals" />
        </div>
      </section>

      <section className="vd-problem vd-dark">
        <SectionIntro label="Project overview" title={<>Why North America needed a <em>different dashboard.</em></>}>
          <p>As a UX designer on Volvo&apos;s North American side, I shaped a fleet-management dashboard inside OneView for a region with very different needs from Europe. The work balanced North American business goals, European product ownership, and Volvo design-system constraints.</p>
          <p>TripVision was not the answer, and forcing the European design onto North American users would have missed the opportunity. The real challenge was aligning both regions around one direction that worked for everyone.</p>
        </SectionIntro>
        <div className="region-logic">
          <div><span>Existing foundation</span><h3>European OneView</h3><p>Established product patterns and a proven European workflow.</p></div>
          <i aria-hidden="true">+</i>
          <div><span>Regional reality</span><h3>North American needs</h3><p>Different terminology, task priorities, and operating expectations.</p></div>
          <i aria-hidden="true">=</i>
          <div className="region-result"><span>Design opportunity</span><h3>Shared, adaptable direction</h3><p>One product language shaped around regional work.</p></div>
        </div>
        <blockquote><span>The challenge</span> Design for North American fleet workflows while staying inside OneView and Volvo&apos;s established product language.</blockquote>
      </section>

      <section className="vd-research">
        <SectionIntro label="Understanding the problem" title={<>Building shared understanding <em>across regions.</em></>}>
          <p>The research was less about collecting volume and more about building shared understanding across regions and functions. I combined North American stakeholder conversations, ongoing cross-regional alignment, and an in-person workshop.</p>
        </SectionIntro>
        <div className="research-methods">
          <div><strong>01</strong><h3>Stakeholder conversations</h3><p>I met with North American business stakeholders to understand what fleet admins need to do day to day, what already works, and what causes confusion.</p></div>
          <div><strong>02</strong><h3>Cross-regional alignment</h3><p>I worked with the European digital product owner and UX designers to keep the North American direction consistent with Volvo&apos;s strategy.</p></div>
          <div><strong>03</strong><h3>In-person workshop</h3><p>When the European team visited, we clarified priorities, removed assumptions, and aligned on what mattered most.</p></div>
        </div>
      </section>

      <section className="vd-process vd-dark">
        <SectionIntro label="How I approached it" title={<>Four phases from discovery to <em>iteration.</em></>}>
          <p>I moved from understanding regional pain points to synthesizing shared priorities, then designed inside Volvo&apos;s existing system and refined the direction through stakeholder feedback.</p>
        </SectionIntro>
        <div className="process-line">
          <div><b>01</b><span>Discovery</span><p>I initiated meetings to understand pain points and priorities before locking in design decisions.</p></div>
          <div><b>02</b><span>Synthesis</span><p>I translated feedback from both regions into shared priorities and a common understanding.</p></div>
          <div><b>03</b><span>Design</span><p>I shaped a clear management workflow using Volvo&apos;s system, patterns, and visual language.</p></div>
          <div><b>04</b><span>Review &amp; iteration</span><p>I refined the hierarchy through feedback until it felt practical for real admin workflows.</p></div>
        </div>
        <div className="exploration-title"><span>Structural explorations</span><h3>Same problem.<br/>Different priorities.</h3></div>
        <div className="exploration-grid">
          <div className="concept-card"><img src={`${imageRoot}/concept-groups.png`} alt="Early hand-drawn concept for browsing and creating vehicle groups"/><span>Concept 01</span><h4>Vehicle groups</h4><p>Organize fleets at a glance, then move into the group that needs attention.</p></div>
          <div className="concept-card"><img src={`${imageRoot}/concept-manage-group.png`} alt="Annotated early concept for managing a group by searching, filtering, and selecting vehicles"/><span>Concept 02</span><h4>Manage a group</h4><p>Search by VIN, filter the list, and act on selected vehicles without leaving context.</p></div>
          <div className="concept-card selected"><img src={`${imageRoot}/concept-unassigned.png`} alt="Annotated early concept for assigning unassigned vehicles to an existing group"/><span>Concept 03 — Refined</span><h4>Assign vehicles</h4><p>Turn an unassigned-vehicle queue into a focused selection and assignment flow.</p></div>
        </div>
      </section>

      <section className="vd-final">
        <SectionIntro label="The final direction" title={<>Fleet management made clearer and more <em>actionable.</em></>}>
          <p>The final direction focused on a dashboard experience built for North American fleet administrators. It prioritized the information they needed to scan and act on—vehicle status, VIN numbers, workshop information, and service needs—with clear hierarchy and minimal friction.</p>
          <p>Every interaction remained inside Volvo&apos;s design system. The visual language stayed connected to OneView, while the structure and flow reflected North American workflows rather than European ones.</p>
        </SectionIntro>

        <div className="prototype-story">
          <div className="prototype-copy"><span>Interactive prototype</span><h3>See the complete admin journey.</h3><p>The prototype connects the individual states below into one continuous workflow—from finding a fleet to updating its information and managing the vehicles inside it.</p></div>
          <div className="prototype-video">
            <div className="macbook prototype-macbook">
              <div className="macbook-screen"><i className="macbook-camera"/><img src={`${imageRoot}/fleet-admin-prototype.gif`} alt="Animated Fleet Admin prototype showing the end-to-end fleet management workflow" /></div>
              <div className="macbook-base"><i/></div>
            </div>
          </div>
        </div>

        <article className="vd-feature">
          <div className="vd-feature-visual sea"><Screen src="fleets-current.png" alt="Vehicle Fleets overview table in OneView" /></div>
          <div className="vd-feature-copy"><span>Flow 01 — Managing fleets</span><h3>Make every fleet easy to scan and act on.</h3><p>The overview brings fleet manager, dealer location, activation status, vehicle total, and row-level actions into one table. Admins can sort columns, open a fleet, create a new one, or make changes without losing their place.</p><div className="vd-tags"><b>Overview</b><b>Sort &amp; filter</b><b>Contextual actions</b></div></div>
        </article>
        <div className="gallery-intro"><span>Find the right fleet</span><p>Searchable, multi-select filters let admins narrow the fleet list by the information they already know.</p></div>
        <div className="screen-gallery screen-gallery-three" aria-label="Fleet filtering states">
          <Screen src="filter-fleet-empty.png" alt="Empty fleet-name search dropdown" caption="01 · Start with a searchable field" />
          <Screen src="filter-fleet-results.png" alt="Fleet-name filter showing matching fleets" caption="02 · Select one or more fleets" />
          <Screen src="filter-manager.png" alt="Fleet-manager filter showing matching people" caption="03 · Search by manager" />
          <Screen src="filter-location.png" alt="Dealer-location multi-select filter" caption="04 · Filter by dealer location" />
          <Screen src="filter-status.png" alt="Fleet-status filter with activated and draft choices" caption="05 · Separate active work from drafts" />
          <Screen src="fleet-sort.png" alt="Column sorting options on the Vehicle Fleets table" caption="06 · Sort the working list" />
        </div>

        <div className="gallery-intro"><span>Create, edit, and protect changes</span><p>Focused dialogs reduce context switching, while warnings and confirmations make the state of every change explicit.</p></div>
        <div className="screen-gallery screen-gallery-four" aria-label="Create and edit fleet flow">
          <Screen src="nextran-create-fleet.png" alt="Create New Fleet dialog over the fleet overview" caption="01 · Create a fleet in context" />
          <Screen src="edit-fleet.png" alt="Edit fleet information dialog" caption="02 · Edit core fleet information" />
          <Screen src="edit-unsaved-warning.png" alt="Edit fleet dialog warning about unsaved changes" caption="03 · Surface unsaved changes" />
          <Screen src="unsaved-toast.png" alt="Persistent unsaved-changes warning on the fleet overview" caption="04 · Keep the warning visible" />
        </div>
        <div className="screen-gallery screen-gallery-three" aria-label="Fleet action and status feedback states">
          <Screen src="vehicles-menu.png" alt="Fleet action menu with vehicles, edit, activate, draft, and delete options" caption="Actions match the fleet state" />
          <Screen src="fleet-activated.png" alt="Fleet activated confirmation" caption="Activation confirmed" />
          <Screen src="fleet-draft.png" alt="Fleet changed to draft confirmation" caption="Draft status confirmed" />
          <Screen src="fleet-delete-confirm.png" alt="Delete fleet confirmation dialog" caption="Deletion requires confirmation" />
          <Screen src="fleet-delete-success.png" alt="Fleet deleted successfully confirmation" caption="Destructive action completed" />
          <Screen src="manage-group-hover.png" alt="Vehicle Fleets overview with navigation interaction state" caption="Navigation keeps tasks separated" />
        </div>

        <article className="vd-feature reverse">
          <div className="vd-feature-visual ice"><Screen src="review-add-vehicle.png" alt="Review and add vehicle dialog showing matched vehicle details" /></div>
          <div className="vd-feature-copy"><span>Flow 02 — Adding a vehicle</span><h3>Use the identifier admins already trust.</h3><p>The add-vehicle flow starts with a VIN, validates the match, then shows the vehicle before committing the change. Clear success feedback confirms both the addition and the saved fleet state.</p><div className="vd-tags"><b>VIN lookup</b><b>Validation</b><b>System feedback</b></div></div>
        </article>
        <div className="screen-gallery screen-gallery-four" aria-label="Add a vehicle by VIN flow">
          <Screen src="type-vin.png" alt="Add Vehicle dialog with a VIN entered" caption="01 · Enter a known VIN" />
          <Screen src="review-add-vehicle.png" alt="Review vehicle details before adding" caption="02 · Verify the vehicle details" />
          <Screen src="add-vehicle-success.png" alt="Vehicle added successfully message" caption="03 · Confirm the addition" />
          <Screen src="fleet-changes-saved.png" alt="Fleet changes saved confirmation" caption="04 · Confirm the saved state" />
        </div>

        <article className="vd-feature">
          <div className="vd-feature-visual ink"><Screen src="vehicles-list.png" alt="East Coast Fleet vehicle list with vehicle details and management controls" /></div>
          <div className="vd-feature-copy"><span>Flow 03 — Managing fleet vehicles</span><h3>Keep vehicle actions close to the working list.</h3><p>Inside a fleet, admins can scan VIN, make, model, location, unit number, and workshop together. Multi-select actions support moving or removing several vehicles without repeating the task row by row.</p><div className="vd-tags"><b>Vehicle details</b><b>Bulk actions</b><b>Safe removal</b></div></div>
        </article>
        <div className="screen-gallery screen-gallery-three" aria-label="Manage vehicles within a fleet flow">
          <Screen src="vehicles-list.png" alt="Vehicle list within the East Coast fleet" caption="01 · Review vehicles in context" />
          <Screen src="remove-vehicles-confirm.png" alt="Confirmation dialog for removing four selected vehicles" caption="02 · Explain the impact before removal" />
          <Screen src="remove-vehicles-success.png" alt="Vehicles removed successfully confirmation" caption="03 · Confirm the updated list" />
        </div>

        <article className="vd-feature reverse">
          <div className="vd-feature-visual ink"><Screen src="unassigned-selected.png" alt="Unassigned Vehicles table with several vehicles selected" /></div>
          <div className="vd-feature-copy"><span>Flow 04 — Assigning vehicles</span><h3>Turn a long queue into one focused task.</h3><p>Admins can search or filter unassigned vehicles, select multiple rows, and assign them to a fleet in one action. The flow finishes with both a success message and a meaningful empty state.</p><div className="vd-tags"><b>Bulk selection</b><b>Fleet assignment</b><b>Empty state</b></div></div>
        </article>
        <div className="screen-gallery screen-gallery-four" aria-label="Assign unassigned vehicles flow">
          <Screen src="unassigned-list.png" alt="List of unassigned vehicles" caption="01 · Review the queue" />
          <Screen src="unassigned-selected.png" alt="Multiple unassigned vehicles selected" caption="02 · Select vehicles" />
          <Screen src="unassigned-success.png" alt="Vehicles assigned successfully message" caption="03 · Confirm assignment" />
          <Screen src="unassigned-empty.png" alt="No unassigned vehicles empty state" caption="04 · Resolve the queue" />
        </div>
      </section>

      <section className="vd-reflection vd-dark" id="reflection">
        <SectionIntro label="What this project taught me" title={<>Constraints, alignment, initiative, and <em>working together.</em></>}>
          <p>The project showed me that designing inside an established system can sharpen decisions, and that cross-regional alignment can be as important as the interface itself.</p>
        </SectionIntro>
        <div className="reflection-list">
          <div><span>Takeaway 01</span><h3>Constraints are clarifying, not limiting.</h3><p>Working inside Volvo&apos;s system pushed me to think more deeply about structure and hierarchy. Every pattern had to earn its place.</p></div>
          <div><span>Takeaway 02</span><h3>Alignment is harder—and more valuable—than execution.</h3><p>Getting North America and Europe on the same page required more energy than drawing the screens, but that shared direction was the real deliverable.</p></div>
          <div><span>Takeaway 03</span><h3>Being an intern does not mean having no voice.</h3><p>I arrived ready to listen, but research, synthesis, preparation, and clear proposals gave me the standing to influence decisions.</p></div>
          <div><span>Takeaway 04</span><h3>In-person workshops create momentum.</h3><p>One room and one focused conversation clarified more than weeks of asynchronous feedback. The workshop became the turning point toward a clear direction.</p></div>
        </div>
        <blockquote>A beautiful screen that nobody agrees on does not move forward. A clear direction that everyone understands can.</blockquote>
      </section>

      <section className="vd-next">
        <div><span>Next case study</span><a href="/work/florida">Florida Resource Map <Arrow/></a></div>
        <a href="/#work">← Back to all work</a>
      </section>

      <footer className="vd-footer"><a className="vd-wordmark" href="/">yajie.hé</a><span>UX &amp; Product Designer · Austin, Texas</span><a href="mailto:jessheyajie@gmail.com">jessheyajie@gmail.com <Arrow/></a></footer>
    </main>
  );
}
