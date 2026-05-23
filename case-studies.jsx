/* ============================================================
   Case studies — content + page renderer
   ============================================================ */

const { useEffect, useRef, useState } = React;
const { SchemaSupervisor, SchemaInterview, SchemaEmpower, SchemaTouchscreen, SchemaTaylorSeries, SchemaSustainability } = window.Schematics;

const CASE_STUDIES = {
  "supervisor-review": {
    eyebrow: ["Workflow Design", "Enterprise UX", "Civic Tech"],
    title: ["Supervisor", "Review", "Mode"],
    titleEm: "Review",
    lede: "Supervisors were managing case reviews across Acrobat, local folders, and handwritten checklists. We moved the whole thing into the cloud saving hours per week in manual work, and ensuring reporting and data accuracy.",
    confidential: true,
    meta: [
      { label: "Role",     value: "Product Designer" },
      { label: "Team",     value: "Designer · PM · Eng · Stakeholders" },
      { label: "Timeline", value: "4 months" },
      { label: "Domain",   value: "Civic Tech · Enterprise UX" }
    ],
    Schema: SchemaSupervisor,
    problem: {
      heading: "Working locally was causing friction in the workflow for supervisors and leadership.",
      body: [
        "The workflow looked something like this: download documents, open Acrobat, edit and annotate, save locally, try to remember which version was which. Then do it again tomorrow. The whole thing happened outside the application, which meant every step was a chance for something to get lost or wrong.",
        "In most contexts that's just annoying. In asylum case management it's a real problem. Missed steps and version confusion have consequences for actual people.",
        "The goal: bring the full review workflow into the platform without making supervisors feel like we blew up the process they'd spent years building workarounds for."
      ]
    },
    results: [
      { n: "1,200", u: "+", label: "Sessions in month two", desc: "across 75–100 supervisors — roughly 12–16 per person, above projections" },
      { n: "22",   u: "%", label: "Month-over-month growth", desc: "sustained through Q1" },
      { n: "83",   u: "%", label: "First-session happy path completion", desc: "onboarding was minimal and existed out of app due to tech constraints" }
    ],
    process: [
      { n: "01", heading: "Research & analysis", body: "I interviewed 7 supervisors to understand what was actually happening, not what the documentation said should be happening. The gap was significant. Users had built their own workarounds over the years — personal naming conventions, duplicate backups, handwritten checklists. Brilliant, honestly, but not exactly a sustainable system. I turned those conversations into user flows showing every tool, handoff, and breakdown point. Those flows ended up being the most useful artifact for getting leadership aligned — way more persuasive than a summary doc.", callout: "What convinced leadership wasn't a summary of findings. It was a flow that showed exactly where the process broke down — every tool, every handoff, every point where something got lost." },
      { n: "02", heading: "Workshops", body: "I ran three targeted workshops instead of one giant alignment meeting, which is almost always the wrong move. Leadership workshop focused on outcomes, not features. Engineering workshop surfaced technical constraints before they became surprises. A cross-functional design session for rapid ideation and stress-testing assumptions. Compressed what could have been months of back-and-forth into two weeks. I designed the frameworks for each session, recruited and organized the groups, and synthesized the outputs into a single leadership presentation that drove alignment on scope.", callout: "Three focused workshops moved faster than one big alignment meeting would have. Leadership needed a different conversation than engineering needed. Running them separately was the whole point." },
      { n: "03", heading: "Prototyping", body: "Before committing to a direction, I presented leadership with three solutions — ranging from a dedicated supervisor hub with its own navigation and tooling, to a lightweight mode toggle built into the existing interface. Leadership chose the leanest option. That constraint forced a useful clarity: the toggle had to work because it was the only bet we were making. Built a high-fidelity prototype early — not because the visuals needed to be perfect, but because abstract design conversations tend to go nowhere. The mode toggle threaded the needle. Same case, same page, different tools. Supervisors always knew where they were. Once this was prototyped, the conversations with leadership got a lot more specific — suddenly we were debating real tradeoffs instead of talking in circles.", callout: "Leadership conversations about abstract designs go in circles. Once there was something real to look at, we stopped talking around the problem and started making actual decisions." },
      { n: "04", heading: "Usability testing", body: "I wrote the research plan and built the test prototypes, then ran four users through one task: complete a full review. A/B tested three specific design decisions along the way — three-column vs. single-column layout, filled vs. unfilled backgrounds for answered fields, and whether interview content should be inline. We ran some discovery for an upcoming project in the same sessions because why waste a captive audience. I synthesized the findings and presented recommendations to leadership.", callout: "We ran discovery for a future project in the same sessions. You can fold work into work — you don't always need a separate round for everything." },
      { n: "05", heading: "Design system & handoff", body: "I built out the full component documentation and contributed everything to the internal design system. Handoff included state documentation for every interactive element, CSS specs, and a component map for engineering. This is the unglamorous part that quietly makes builds go faster and reduces the number of Slack messages that start with 'quick question.' I'm also an active participant in mobs and pairing sessions — I truly believe in knocking down the wall between design and dev.", callout: "Building out component documentation before handoff meant fewer questions during the build, and those same components carried forward into the next project. The unglamorous work pays off twice." },
      { n: "06", heading: "Launch", body: "Adoption had historically been a problem — users default to what they know, and what they knew was Acrobat. I partnered with stakeholders to design the rollout carefully: phased release with a pilot group, out-of-app onboarding materials for first sessions, and a real-time feedback channel. I developed the rollout messaging and job aids for end users — the materials that made the difference between supervisors opening the feature once and actually adopting it. 1,200+ sessions in month two.", callout: "The rollout messaging and job aids mattered as much as the feature itself. A good product that nobody learns to use doesn't stick — and 'launch' is not the same thing as 'adoption.'" }
    ],
    keyScreens: [
      { label: "Mode Toggle",            desc: "The entry point into a distinct review workspace. Toggling activates a separate supervisor record in the database, transforms the interface to surface submitted answers more clearly, and pulls interview content inline — eliminating the need to flip between screens. One interaction changes the context, the data layer, and the layout simultaneously." },
      { label: "Decision Flow",          desc: "Concur / Not Concur as a deliberate modal action. The decision propagates through the entire system — updating the case task list and signaling to downstream processes that supervisor review is complete. Elevating this step in the UI gives the interaction weight appropriate to what it triggers." },
      { label: "Automatic Notification", desc: "Built into the concur flow as a non-optional system trigger. Depending on the outcome, this pings the relevant systems to return a case to an office, resubmit for reinterview, or advance toward a final decision. In asylum case management, a missed handoff has real consequences. Making this automatic removed the risk entirely." }
    ],
    testimonials: [
      { text: "The changes you guys made definitely make it easier in viewing it, because sometimes it's really easy to miss things.", cite: "Supervisor User" },
      { text: "I've been using it and it's so much nicer than downloading and uploading and keeping track of everything!", cite: "Supervisor User" },
      { text: "Overall it's an improvement, but it's still not perfect and I still have to do a lot of other review tasks in other places.", cite: "Supervisor User — the starting point for the next phase" }
    ],
    quote: {
      text: "I've been using it and it's so much nicer than downloading and uploading and keeping track of everything.",
      cite: "Supervisor User — post-launch feedback"
    },
    takeaways: {
      heading: "Adoption was strong because users shaped the product.",
      body: [
        "Supervisors were in the room at every stage — research, workshops, testing, rollout. That's not just a nice process principle. When people have shaped a product, they actually show up for it.",
        "The most useful signal post-launch: 'still not perfect, still tasks elsewhere.' That's not a complaint, that's a roadmap. That quote is now the starting point for the next phase.",
        "What I'd change: a larger usability testing cohort. Four users caught real issues, but some of the edge cases in supervisor workflows only showed up after launch. More voices earlier would have helped.",
        "I pitched big and landed lean — that's not a failure, it's how you find out what's actually possible. The more ambitious solutions didn't ship, but they seeded the roadmap for what comes next. Pitching ideas you believe in, even when they don't make it through, is part of what makes the work worth doing."
      ]
    },
    next: { slug: "interview-platform", title: "Interview Platform Redesign", tags: "UX Design · Enterprise UX · Civic Tech" }
  },

  "interview-platform": {
    eyebrow: ["UX Design", "Civic Tech", "Enterprise UX"],
    title: ["Interview", "Platform", "Redesign"],
    titleEm: "Interview",
    lede: "Reduced cognitive load for asylum and refugee officers by modernizing a 7-year-old interview notes UI — preserving every feature officers relied on while making the experience meaningfully easier to use.",
    confidential: true,
    meta: [
      { label: "Role",     value: "Senior Product Designer" },
      { label: "Team",     value: "Design · Eng · Leadership · Stakeholders" },
      { label: "Timeline", value: "3 months" },
      { label: "Domain",   value: "Civic Tech · Enterprise UX" }
    ],
    Schema: SchemaInterview,
    problem: {
      heading: "Asylum and refugee officers are already managing one of the most cognitively demanding jobs imaginable. The interview platform was adding to that load — not reducing it.",
      body: [
        "Officers conducting interviews are simultaneously taking verbatim notes, managing required forms, coordinating with attorneys and interpreters, and processing deeply personal — often heartbreaking — testimony. The stakes are as high as they get. Every missed step or moment of confusion has real consequences for real people.",
        "The legacy platform had been designed 7 years prior and never updated. It had accumulated friction: a cluttered interface, visual noise that made it harder to focus, and common actions that took more effort to execute than they should. Officers had adapted, building their own workarounds and muscle memory around its quirks. But adapted doesn't mean optimal.",
        "The opportunity wasn't to reinvent the product. It was to simplify what was already there — reduce visual noise, modernize the UI, and make the most common actions easier to find and execute — without disrupting the shortcuts and workflows officers had built over years of practice."
      ]
    },
    results: [
      { n: "30",  u: "%", label: "Adoption rate in week one", desc: "strong for any UI update, exceptional for this user base" },
      { n: "194", u: "",  label: "Officers opted in during the first week", desc: "only 6 turned the new UI off after trying it" },
      { n: "1",   u: "",  label: "Bug report in launch week", desc: "a minor alignment fix for an edge case involving an extremely long question" }
    ],
    process: [
      { n: "01", heading: "Prior research & assumptions", body: "50+ prior user interviews with officers meant I already had a deep picture of how the platform was being used — the workarounds, the friction points, the moments where the interface was fighting the user rather than helping them. No separate discovery round was needed. I drew directly on that knowledge to form design assumptions and identify the highest-leverage areas to address.", callout: "50+ prior interviews meant I could skip a discovery round and go straight to design assumptions. That only works if you've actually synthesized what you learned, not just collected it." },
      { n: "02", heading: "Design crit & studio", body: "I facilitated a design studio with 7 other designers to brainstorm approaches to the UI complexity and multi-form-factor input challenges. Running the session as a structured crit rather than an open ideation gave us the range of directions we needed without losing focus. The output was a set of divergent ideas to evaluate and narrow — not a polished design, but a much richer starting point.", callout: "Running the design studio as a structured crit gave us the range we needed without losing focus. Open ideation tends to sprawl. This didn't." },
      { n: "03", heading: "User research & prototype testing", body: "Three sessions with active officers. I mapped their real interaction patterns — how often they reordered elements, how they used bulk delete, how they moved through the core task of documenting an interview. Then I presented mockups of the redesigned UI and asked for direct reactions. At the start of each session I asked users to score the current app out of 10. I got 7.5, 10, and 10. After seeing the new designs, all three said they'd score it higher. That's not a vanity metric — it's a signal that the redesign was landing as a genuine improvement, not a disruption.", callout: "I asked users to score the current app before showing them anything new. A before-and-after number is more persuasive to leadership than 'users responded positively.' Get the baseline first." },
      { n: "04", heading: "Design system & handoff", body: "Finalized the designs and built the new components directly into the Figma design system I manage for the team. Then ran a structured handoff meeting with engineering. Doing the component work before handoff meant developers had documented, reusable pieces to build from — not a set of static screens they had to interpret on their own.", callout: "Doing the component work in Figma before the handoff meeting meant developers had documented pieces to build from. Fewer questions in Slack, faster build." },
      { n: "05", heading: "Development collaboration", body: "The build took about a month. I worked alongside the dev team in joint sessions throughout — resolving bugs, refining details, and making sure the shipped product matched the intent of the designs. This phase also included a productive tension with leadership, who raised concerns about whitespace. Their instinct was to compress the UI; the user research pointed the other direction. The resolution: tighter margins where they made sense, and a new table view mode that displays Q&A side-by-side — particularly useful for officers conducting interviews on smaller laptop monitors. Both sides got something real.", callout: "The whitespace disagreement with leadership ended up producing a genuinely better outcome. The table view gave officers a choice and leadership the density they wanted. That's the better answer — not splitting the difference." },
      { n: "06", heading: "Validation testing & launch", body: "Four users, pre-launch. All four said they'd opt in. None found the changes disruptive. They called out color coding for multi-answer questions as a standout improvement — particularly valuable in family and group interviews where tracking multiple applicants' answers in a single thread is genuinely hard. I proposed an opt-in window before the full switchover: early adopters would surface bugs we'd missed, and if they liked the new experience, they'd become advocates in their offices before the change was mandatory. 194 users opted in during the first week. Only 6 turned it off.", callout: "Proposing an opt-in window wasn't a project management call — it was a design decision. Early adopters surface bugs and become advocates before anything is mandatory. That's how you get 30% adoption in week one." }
    ],
    keyScreens: [
      { label: "Color-Coded Q&A",       desc: "Multi-applicant answers color-coded by family member. In group and family unit interviews, officers are tracking multiple people's responses within a single question thread — color coding turned a scanning problem into a clear, at-a-glance read." },
      { label: "Table View",            desc: "Questions and answers displayed side-by-side. Designed primarily for officers on small laptop monitors — and surfaced as the middle ground between leadership's request for density and user research that pointed toward breathing room. Both sides got something real." },
      { label: "Drag & Drop Reordering", desc: "Refined reordering and bulk delete interactions for the Q&A list. Officers reorganize elements throughout every interview — making this faster and more reliable removed a persistent small friction that added up over long sessions." }
    ],
    testimonials: [
      { text: "Increase to maybe an 8.5. Family unit, question format, the color coding, with the questions and alignment it's easier on the eye.", cite: "Officer User — post-prototype session, on their revised score for the new UI" },
      { text: "If I could go higher than a 10 I would, this looks cleaner and sharper.", cite: "Officer User — post-prototype session" },
      { text: "The drag and drop conversational answer features are exciting and helpful.", cite: "Officer User — validation testing" },
      { text: "The new UI is a refinement, not a disruption — I'd still rate this app 10/10.", cite: "Officer User — validation testing" }
    ],
    quote: {
      text: "If I could go higher than a 10 I would. This looks cleaner and sharper.",
      cite: "Officer User — post-prototype session"
    },
    takeaways: {
      heading: "Listening to leadership and advocating for users aren't mutually exclusive — but it takes work.",
      body: [
        "The strongest tension in this project came from leadership feedback on whitespace. Their instinct was to compress the UI; the user research pointed the other direction. The table view mode was the resolution — not a compromise that satisfied no one, but a genuine solution that gave officers a choice and gave leadership the density option they wanted. That's the job: find the middle ground that doesn't sacrifice the user experience to satisfy an internal preference.",
        "The opt-in rollout was also a deliberate design decision, not just a project management call. Early adopters surfaced edge cases we'd missed, became advocates in their offices, and gave us a feedback loop before the change was forced on everyone. 30% adoption in week one with almost no churn was the result. That number doesn't happen when you just flip a switch.",
        "Working on tools this high-stakes is a constant reminder that interface decisions are never neutral. Officers using this platform are documenting people's lives. Clarity, speed, and reduced friction aren't UX nice-to-haves here — they're the point."
      ]
    },
    next: { slug: "case-finder", title: "Case Finder", tags: "Product Design · Civic Tech · Information Architecture" }
  },

  "civic-platform": {
    eyebrow: ["Product Design", "Enterprise UX", "Civic Tech"],
    title: ["Government", "Platform", "Work"],
    titleEm: "Platform",
    lede: "Two years designing tools for a government case management platform — modernizing a legacy system, representing the users at every step, and giving leadership the visibility they'd never had before.",
    confidential: true,
    meta: [
      { label: "Role",     value: "Senior Product Designer" },
      { label: "Team",     value: "Design · PM · Eng · Stakeholders" },
      { label: "Timeline", value: "3 years" },
      { label: "Domain",   value: "Civic Tech · Enterprise UX" }
    ],
    Schema: SchemaSupervisor,
    problem: {
      heading: "Ensuring users are represented while completing complex tasks.",
      body: [
        "I've spent the last 2 years working on a complex case management system. My focus has been on creating new efficiencies in an arduous and litigious process, as well as growing the design culture within the platform.",
        "The complexities of the space are many, and for obvious reasons I'm unable to provide specifics. That's not me trying to weasel out of writing another 5 case studies...that's just the facts.",
        "I've worked on making cases easier to find, interviews easier to conduct, forms easier to fill out, and reporting easier to generate. I've completed complicated multi-domain integrations, presented countless times to stakeholders, managed and contributed to a design system, and run workshops with PMs, engineers, stakeholders, and of course other designers."
      ]
    },
    processLabel: "Work Overview",
    resultsBlurb: "From multiple projects, the data doesn't lie.",
    results: [
      { n: "1,200", u: "+", label: "Sessions in month two",             desc: "Supervisor Review Mode — 75–100 supervisors averaging 12–16 sessions each, above projections" },
      { n: "97",    u: "%", label: "Positive feedback post-launch",      desc: "Interview Platform Redesign — user sentiment survey following full rollout" },
      { n: "40",    u: "%", label: "Decrease in case lookup time",       desc: "Case Finder — officers using the new search tool vs. prior offline methods" },
    ],
    process: [
      { n: "01", heading: "Supervisor Review Mode", body: "Supervisors were reviewing cases locally on their machines. I interviewed users to map every tool, handoff, and breakdown point in the real workflow. Then synthesized the pain points, and ran workshops with stakeholders and team members to identify solutions.\n\nI pitched three solutions with varying levels of complexity, clearly presenting how users and the organization could benefit from each solution. We landed on a dedicated review workspace that updated the UI to make it more legible and provide all of the information users needed to complete the review. The result was 1,200+ sessions in month two, scaling quickly to all reviews happening in app by month 6.", callout: "You can't just tell people to use the platform. The new experience has to be better than the workaround it's replacing. Keeping the same case view and layering tools on top of it was the design decision that made switching feel safe." },
      { n: "02", heading: "Interview Platform Redesign", body: "I led a large-scale UI update to the platform's core interview tool. This involved leveraging insights from 50+ user interviews, running workshops with stakeholders, design studios, user testing, building out new components, and running a phased opt-in period — 194 users opted in during the first week, and only 6 turned the new UI off.\n\nThe new UI received rave reviews and 97% positive feedback from users. We were also able to leverage feedback after the full launch into a handful of new features. Win win.", callout: "194 users opted in during the first week. Only 6 turned it off. An opt-in window gives you a feedback loop and a group of internal advocates before you make anything mandatory." },
      { n: "03", heading: "Case Finder", body: "Case workers needed to reference previous cases regularly, but those references lived everywhere except the platform. Every worker had built their own system. I interviewed 4 case workers about their real lookup workflows, facilitated workshops with subject matter experts to surface which data fields were genuinely useful, and built multiple high-fidelity prototypes to take to leadership.\n\nThe shipped tool included a filterable search table with the fields that actually mattered. 41% of active users use the filters — a strong signal for a newly launched feature. The tool also gave leadership its first analytics layer on which reference materials were being used.", callout: "Every worker had their own system because the shared one didn't work for them. That's not a user behavior problem — it's a product gap. The workarounds told us exactly what to build." },
      { n: "04", heading: "Design system & platform contribution", body: "Across all three projects, I built and contributed components to the team's internal Figma design system — state documentation, CSS specs, component maps. I was an active participant in engineering mobs and pairing sessions throughout. That foundation is what made each successive project faster to ship and easier to maintain.", callout: "Every component I contributed to the design system made the next build a little faster and a little cleaner. That value doesn't show up in any single project." }
    ],
    quote: {
      text: "The best brief isn't always the one you're given — sometimes the real work is finding the better one.",
      cite: "Project takeaway"
    },
    takeaways: {
      heading: "Two years building for people with genuinely high-stakes jobs.",
      body: [
        "The through-line across all three projects was the same: workers had built workarounds because the platform hadn't kept up. Each project was an opportunity to close that gap — to build something good enough that the workaround became unnecessary.",
        "Adoption was the real measure of success on every one of these. Not launch — adoption. That meant designing rollouts as carefully as the features themselves, staying close to users after launch, and treating post-launch feedback as a roadmap rather than a report card.",
        "Working in a high-stakes environment changes how you think about interface decisions. Speed, clarity, and reduced friction aren't nice-to-haves — they're the point."
      ]
    },
    next: { slug: "gridx-empower", title: "GridX Empower, re-imagined", tags: "SaaS · Product Strategy · Clean Energy" }
  },

  "case-finder": {
    eyebrow: ["Product Design", "Civic Tech", "Information Architecture"],
    title: ["Case", "Finder"],
    titleEm: "Finder",
    lede: "Officers were managing reference materials the same way everyone manages things they don't trust the system to handle: locally, inconsistently, alone. We fixed that.",
    confidential: true,
    meta: [
      { label: "Role",     value: "Product Designer" },
      { label: "Team",     value: "Designer · PM · Eng · Stakeholders" },
      { label: "Timeline", value: "2 months" },
      { label: "Domain",   value: "Civic Tech · Information Architecture" }
    ],
    Schema: SchemaInterview,
    problem: {
      heading: "Officers were spending real time digging through personal folders, local drives, and handwritten notes to find reference materials that should have lived in the system all along.",
      body: [
        "To do their work well, officers regularly needed to reference previous cases. The problem was that those references lived everywhere and nowhere. Every person had their own system. Every office had its own conventions. The official system wasn't cutting it, so people improvised — and that improvisation created real inefficiency at scale.",
        "Beyond the day-to-day friction, all of those offline workarounds meant the organization had zero visibility into which reference materials were actually valuable. No data, no way to improve, no way to scale support. The information existed, it just didn't exist anywhere useful.",
        "The opportunity was two-sided: build officers a better tool, and give the business the analytics layer it had never had."
      ]
    },
    results: [
      { n: "~40", u: "%", label: "Decrease in case lookup time", desc: "for officers using the new system" },
      { n: "41",  u: "%", label: "Of users actively use filters", desc: "strong signal for a newly launched feature" },
      { n: "17",  u: "%", label: "Of all page visitors use filters", desc: "engagement well above baseline for a first release" }
    ],
    process: [
      { n: "01", heading: "Research & analysis", body: "Interviewed 4 officers about their real workflow — specifically how they used reference materials, where those materials came from, and how they searched for things in the moment. What I heard was consistent: everyone had built their own system because the shared one didn't work. That's never a coincidence. I distilled those conversations into a north star problem statement that became the filter for every decision that followed.", callout: "Every officer had improvised their own system because the shared one failed them. That's consistent, and consistency means it's not a user behavior problem. Follow the workarounds and you'll find what actually needs to be built." },
      { n: "02", heading: "Workshops", body: "Facilitated workshops with subject matter experts to figure out which data fields were both genuinely useful to officers and technically feasible to surface. This sounds procedural, but it's actually the whole game — when you're building a search table, the content in that table is the product. Get it wrong and it doesn't matter how clean the UI is.", callout: "For a search tool, the columns in the table are the product. A beautiful layout with the wrong fields is useless. Getting subject matter experts in the room before touching a layout was the most important design step." },
      { n: "03", heading: "Prototyping", body: "Built multiple high-fidelity prototypes to take to leadership. Leadership buy-in was a hard gate — without it, this feature doesn't ship. Making the designs concrete enough to critique early meant the conversations stayed productive instead of circling into abstraction.", callout: "Without leadership sign-off this doesn't ship. Getting to high-fidelity fast wasn't about polish — it was what kept the conversations productive instead of theoretical." },
      { n: "04", heading: "Usability testing", body: "Tested the designs directly with officers. Asked how useful they'd find the tool in practice, got reactions to different filter configurations, and confirmed that the table data was actually helpful. Officers were direct about what worked and what didn't. That directness made the feedback easy to act on and easy to prioritize.", callout: "Officers gave direct, specific feedback. Ask the right questions and you get reactions you can act on, not 'looks good.' Design the session for specificity, not general sentiment." },
      { n: "05", heading: "Component creation & handoff", body: "Cleaned up all components and contributed them to the internal design system — documented, annotated, and ready for handoff. Every interaction state was documented before development kicked off. Fewer 'quick questions' in Slack, faster build, cleaner implementation.", callout: "Every interaction state documented before development starts is one fewer question in Slack during the build. The unglamorous part of design is what makes the implementation go clean." },
      { n: "06", heading: "Launch", body: "Coordinated the rollout with stakeholders and stayed close to users during the launch period. The offline workarounds had been comfortable — habits are hard to break even when the new thing is better. Getting officers into the new system required patience and presence, not just a good product.", callout: "Launch week isn't when adoption happens. Staying close during the weeks after — when habits are still forming — is part of shipping, not a follow-up task." }
    ],
    keyScreens: [
      { label: "Search & Filter Table", desc: "A filterable table of previous cases surfaced directly in the platform. Officers find reference materials without leaving their workflow — no local folders, no switching apps." },
      { label: "Filter Controls",       desc: "Configurable filters that let officers narrow by the dimensions that actually matter to their work. The right fields — surfaced through workshops with subject matter experts — made this useful on day one." },
      { label: "Results & Detail",      desc: "Sortable results with the information officers need to make a call, inline. The analytics layer built alongside it gave the organization its first real picture of which references were actually being used." }
    ],
    testimonials: [
      { text: "I like this, I like this part — this is really cool. I could see this being really useful.", cite: "Officer User — referencing the filter functionality" },
      { text: "Useful tool to be able to refer back to cases I've done before.", cite: "Officer User" },
      { text: "I think you guys have nailed it in terms of what needs to be on there. I can't think of anything else that would be beneficial — it pretty much covers all of the bases.", cite: "Officer User" }
    ],
    quote: {
      text: "I think you guys have nailed it in terms of what needs to be on there. I can't think of anything else that would be beneficial — it pretty much covers all of the bases.",
      cite: "Officer User"
    },
    takeaways: {
      heading: "Understanding how people currently solve a problem is the whole job.",
      body: [
        "The offline workarounds officers had built weren't signs that something was broken — they were signals of a real need the existing system had failed to meet. Following those signals led directly to a solution that resonated on first contact. That's not an accident.",
        "The analytics angle almost didn't make it into the project. Centralizing reference materials was primarily about officer efficiency, but it also handed the organization a data layer it had never had before. That second-order value only became visible once we understood the problem deeply, not just the surface complaint.",
        "Adoption is ongoing. People are creatures of habit — which is a challenge, not a failure. The feedback since launch has been strongly positive and the usage numbers are trending the right direction."
      ]
    },
    next: { slug: "gridx-empower", title: "GridX Empower, re-imagined", tags: "SaaS · Product Strategy · Clean Energy" }
  },

  "gridx-empower": {
    eyebrow: ["Experience Design", "Vision Work", "Clean Energy"],
    title: ["GridX", "Empower,", "re-imagined"],
    titleEm: "Empower,",
    lede: "I was brought in to design a data visualization system for utility customers. What the research revealed was a bigger problem: the entire path from widget creation to customer deployment was manual, fragmented work — taking teams months to execute. This is the vision I built to fix that.",
    meta: [
      { label: "Role",   value: "Lead Experience Designer" },
      { label: "Team",   value: "Design · Product · Eng · Execs" },
      { label: "Type",   value: "Vision / Strategy" },
      { label: "Domain", value: "Clean Energy · SaaS" }
    ],
    Schema: SchemaEmpower,
    heroImage: "img/empower/empower-campaigns.png",
    problem: {
      heading: "GridX had powerful energy APIs. Getting them in front of utility customers meant months of manual, client-by-client implementation work — and no system to scale it.",
      body: [
        "Utilities are navigating a changing grid — new rate models, emerging technology, shifting pricing structures — and their biggest challenge is getting customers to understand and adapt. GridX had the data to help with all of it. The path from that data to a utility customer's screen was the problem.",
        "Every widget deployment was a custom engagement — manual work, rebuilt from scratch for each utility client, taking implementation teams months to complete. GridX's Empower platform had the APIs, but was missing the front-end layer, the campaign tooling, and the measurement capabilities that would let utilities deploy and iterate on their own.",
        "The core question: how do you give utilities a system — not a service — for getting the right widget to the right customer at the right time, across a hundred different clients and portals?"
      ]
    },
    results: [
      { n: "C-suite", u: "",  label: "Presentation arranged", desc: "Leadership found the work compelling enough to arrange a dedicated presentation — design, marketing, and sales VPs all in the room." },
      { n: "0 → 1",  u: "",  label: "APIs to product", desc: "Provided the frontend vision and roadmap that transformed Empower from API suite into something utilities could actually deploy to customers." },
      { n: "Platform", u: "", label: "Thinking shaped", desc: "The prototype helped formalize how GridX's standalone products could work together — one piece of what became the GridX Platform." }
    ],
    process: [
      { n: "01", heading: "Research", image: "img/empower/empower-research.png", body: "Working from recorded research sessions with utility executives — conducted by an outside contractor and the VP of design — I synthesized findings into problem statements and stress-tested them with internal teams. The synthesis mapped each user through the full customer experience: who they were, what they were trying to accomplish, and what value this solution could unlock. The more important finding was the user type nobody had fully designed for yet: utility program managers working with APIs day-to-day. Every widget deployment was a months-long, manual, client-specific engagement. They needed a system, not another custom project. I also led constraint-setting early — working with three other designers and the VP of design to bound the project before it sprawled.", callout: "The synthesis surfaced a user type nobody had fully designed for: the utility program manager dealing with APIs day-to-day. Designing for them reframed the entire product scope." },
      { n: "02", heading: "Hypothesis", body: "If utilities can segment and sequence widgets like lightweight campaigns — and customers receive timely, contextual guidance — we'd see higher engagement and more program enrollments, with a lower support burden. That became the design brief that shaped everything downstream. Simple to state, surprisingly hard to design for.", callout: "The brief sounds simple: segment, sequence, measure. Getting there took research synthesis, constraint-setting sessions with the VP, and a lot of stress-testing with the team. Those three words were earned." },
      { n: "03", heading: "Information architecture", image: "img/empower/empower-ia.png", body: "The structure I landed on applied a different mental model entirely: a digital marketing campaign system. The program manager at the utility logs into Empower, selects a customer segment, picks which widgets to display, and tracks engagement — all without a developer in the loop. Think Google Ads, but for utility information inside a customer portal. That metaphor drove the entire IA: a Campaign system for orchestrating widget deployments, a Widget Library of pre-built and custom widgets, and an API Explorer for teams who wanted to go deeper. Getting this structure right before wireframing prevented a lot of expensive rework downstream.", callout: "Applying a marketing campaign mental model to widget deployment gave the IA a shape program managers already knew. Borrowing from a different domain was what made the architecture feel obvious in hindsight." },
      { n: "04", heading: "Wireframes", image: "img/empower/empower-wireframe.png", body: "Moved through lo-fi quickly, using wireframes to map the information requirements for each page and identify what assets needed to be built. I ran these through design critiques with the broader team — a useful pressure test for catching gaps and pulling in ideas I hadn't considered. The wireframes were never the deliverable. In a startup context with other work running in parallel, I needed a fast path to the thing that would actually communicate the vision to executives: a high-fidelity prototype. Wireframes got me there faster.", callout: "I moved through lo-fi quickly. In a startup with other work running in parallel, the artifact that actually matters is the high-fidelity prototype. Wireframes are a step, not a destination." },
      { n: "05", heading: "Prototype", body: "I built a complete high-fidelity prototype of the happy path to present to executives. Key surfaces included a Homepage with campaign insights and quick-start actions; a Campaigns section with filterable management and a creation wizard; Campaign Detail pages with embed code, reporting dashboards, and white-labeled widget previews; an APIs explorer for self-service education; and a Widget Library with pre-built and custom widget management — the foundation for a potential marketplace down the road.", callout: "I built the complete happy path, not a partial demo. Executives need to see the system working together, not a few disconnected screens. That's what got us the C-suite presentation." }
    ],
    keyScreens: [
      { label: "Campaigns dashboard",        image: "img/empower/empower-campaigns.png",        desc: "Campaign Insights surface active campaigns, impressions, and engagement at a glance — with a filterable list and one-click campaign creation." },
      { label: "Campaign detail & reporting", image: "img/empower/empower-campaign-detail.jpg",  desc: "Each campaign surfaces embed code, live analytics dashboards, and a white-labeled widget preview — giving utilities everything to deploy and measure in one place." },
      { label: "Widget library",             image: "img/empower/empower-widget-library.png",    desc: "A browsable library of pre-built widgets — Cost Over Period, Rate Comparison, EV Purchase, Solar Adoption — each tagged by category and API, with a path to custom widget creation." }
    ],
    quote: {
      text: "The best brief isn't always the one you're given — sometimes the real work is finding the better one.",
      cite: "Project takeaway"
    },
    takeaways: {
      heading: "Knowing when the real problem is bigger than the one you've been handed.",
      body: [
        "The original assignment was a data visualization system for utility customers — useful, scoped, and reasonably well-defined. What the research made clear was that there was a much bigger problem sitting right underneath it: the entire process of getting a widget from GridX's APIs into a utility customer's portal was manual, fragmented, and took teams months of custom work to execute for every single client.",
        "Following that insight meant expanding the scope significantly — from a visualization layer to a full campaign system that gave utility program managers a genuine workflow for the first time. That widget concept eventually became GridX Empower, a live product. The platform thinking contributed to the GridX Platform, a broader effort that brought GridX's standalone products into a unified ecosystem. Leadership found the vision compelling enough to take it directly to C-suite.",
        "None of that happens if the original brief gets executed as written. The discipline in this project wasn't just in the design decisions — it was in knowing when the real problem was bigger than the one you'd been handed, and having the judgment to expand the frame without letting it spiral out of control."
      ]
    },
    next: { slug: "gridx-touchscreen", title: "GridX Interactive Touchscreen Demo", tags: "Interactive · Sales Enablement · Clean Energy" }
  },

  "gridx-touchscreen": {
    eyebrow: ["Experience Design", "Sales Enablement", "Clean Energy"],
    title: ["GridX", "Interactive", "Touchscreen"],
    titleEm: "Touchscreen",
    lede: "A self-paced touchscreen demo for GridX conference booths — so attendees could explore the product on their own terms, and sales could have conversations instead of monologues.",
    meta: [
      { label: "Role",     value: "Lead Experience Designer" },
      { label: "Year",     value: "2024" },
      { label: "Team",     value: "Design · Marketing · Sales · Eng" },
      { label: "Venue",    value: "Clean energy conferences" },
      { label: "Audience", value: "Current & prospective customers" }
    ],
    Schema: SchemaTouchscreen,
    heroImage: "img/touchscreen/gridx-booth.jpg",
    heroImagePosition: "center center",
    problem: {
      heading: "The GridX booth was great at talking to people who already knew GridX. Everyone else kept walking.",
      body: [
        "Conferences are expensive, and the marketing team needed this one to actually work. The mandate was clear: more leads, more booth traffic. Lead gen had historically been inconsistent — conversations happened, but contact info didn't reliably make it into the system. The fix was structural: build lead capture into the experience itself, rather than relying on a salesperson to remember to ask.",
        "At major clean energy conferences, the primary demo format was a 20–45 minute live walkthrough. That works well for existing customers who want to see what's new. For anyone unfamiliar with GridX, it was a hard sell that most people actively avoided. They'd clock the booth, clock the salesperson, and keep moving.",
        "The goal was to build something anyone could use on their own terms — no salesperson required to get started. Something that communicated product value quickly, invited exploration, and warmed up prospects before a human conversation happened."
      ]
    },
    results: [
      { n: "24",     u: "%", label: "Increase in booth traffic",       desc: "compared to prior events with live-demo-only format" },
      { n: "18",     u: "%", label: "Increase in full demo requests",   desc: "better-informed attendees were more likely to commit" },
      { n: "Mascot", u: "",  label: "Launch",                          desc: "Deci was designed from day one as GridX's brand character — debuting at the conference with plush toys, sticker packs, and a starring role in the touchscreen demo, then extending into email, newsletters, and onboarding." }
    ],
    process: [
      { n: "01", heading: "Research", body: "Started with user behavior research focused on the in-booth conference experience — I had first-hand knowledge from attending our largest conference the year before, so this wasn't purely theoretical. Also interviewed sales and marketing team members about what the booth actually needed to accomplish. Four things stood out: demos were too long and going to the wrong people; we were good at talking to people we already knew but poor at attracting strangers; people were actively avoiding the booth to dodge a sales pitch; and a quick, visual product overview could do a lot of heavy lifting before any human interaction.", callout: "I'd attended our biggest conference the year before. That context made the research findings specific instead of theoretical. You can't replicate that from interviews alone." },
      { n: "02", heading: "Brainstorming & ideation", body: "The prior format had two distinct failure modes. A live demo assumed attendees would stay for the full walkthrough — most didn't. The looping slide deck was too broad: GridX had multiple product lines, and a deck covering all of them served none of them well. Three criteria came out of that diagnosis: show the right information at the right time — meaning attendees choose what's relevant to their business, not us; ensure they're seeing a current, accurate product demo rather than static slides; and reliably capture contact information for post-conference follow-up. We also made an early architectural decision to build the experience as a web app backed by a lightweight CMS — so marketing and sales could update content without developer involvement as products changed. The conference would be the first deployment, but the system was designed to outlast it.", callout: "The live demo and the slide deck failed for completely different reasons. Treating them as one problem would have missed both. You have to diagnose them separately before you can design around either one." },
      { n: "03", heading: "UI design", image: "img/touchscreen/touchscreen-ui-design.png", body: "Designed a clean, touch-optimized interface — large tap targets, simple navigation, clear visual hierarchy that worked at a glance. The system supported tap-and-back navigation for quick topic switching and was built to scale across screen sizes without losing usability. Conference environments are brutal for attention; the UI had to earn every second.", callout: "A conference floor is about the worst possible attention environment. If the UI works there, it works anywhere. That constraint shaped every visual decision on this project." },
      { n: "04", heading: "Character design & animation", images: ["img/touchscreen/deci-sketches.jpg", "img/touchscreen/deci-emojis.jpg"], body: "Designed 'Deci' — a custom character to guide users through the experience with some personality. The goal was to make a complex software platform feel approachable instead of intimidating, which is a real challenge when your product is B2B energy software. Deci provided visual continuity across the experience and gave the brand something to rally around. Deci was designed with the full brand rollout in mind — not just as a UI device, but as the character who would give GridX's brand a voice. The conference was the debut of a new rockstar.", callout: "Deci was designed from the start as a brand character, not a UI mascot. That distinction is what made the conference debut the beginning of a larger story rather than a one-time device." },
      { n: "05", heading: "Video & content", body: "Developed scripts for each product feature video — each under two minutes, focused on a single benefit, designed for maximum retention in a distracted environment. Directed the visual style of animations and video elements to maintain brand consistency throughout. Each video was designed to stand alone: a prospect could watch one or five and leave knowing something specific and useful.", callout: "Each video was under two minutes and focused on one thing. In a conference environment, that may be the only one someone watches. Make it count on its own." },
      { n: "06", heading: "Engineering & launch", video: "img/touchscreen/gridX-interactive-touchscreen.mov", body: "The entire project — from kickoff to hardware on-site — ran eight weeks. Many assets weren't finalized until the final stretch, which meant development and QA ran in parallel with content production rather than sequentially. Managed the full launch as both designer and project lead — coordinating across design, marketing, sales, and engineering, and managing two contracted specialists (developer and video editor). Oversaw hardware selection, worked with the marketing team on the Deci brand rollout including plush toys and sticker packs, and redesigned the physical booth layout to integrate the touchscreen experience.", callout: "Eight weeks from kickoff to hardware on-site. Design, content, and engineering ran in parallel the entire time. You plan for that on day one — you don't discover it when the deadline moves." }
    ],
    keyScreens: [
      { label: "Home screen",       image: "img/touchscreen/touchscreen-initial-flow.png", desc: "Deci greets attendees and presents the four product areas. Self-directed from the first tap — no salesperson required to get started." },
      { label: "Feature walkthrough", image: "img/touchscreen/feature-sequence-framer.jpg", desc: "Each feature plays as a guided video with a contextual sidebar. Attendees explore the actual product UI — bill comparisons, rate analysis, EV savings — at their own pace." },
      { label: "Lead capture",       image: "img/touchscreen/form-sequence.png",            desc: "Deci delivers the lead capture form at completion — when attendees are most engaged. Warm handoff to sales built into the experience itself." }
    ],
    quote: {
      text: "The best sales tool is one that doesn't feel like a sales tool.",
      cite: "Project takeaway"
    },
    takeaways: {
      heading: "Respecting attendees' time turned passive observers into informed prospects.",
      body: [
        "The interactive demo worked because it respected attendees' time. It didn't ask for anything upfront — it just offered something interesting to explore. That low-pressure entry turned passive observers into informed prospects, which made the downstream sales conversations dramatically more productive.",
        "The reusable framework ended up being a significant win. Instead of rebuilding from scratch for every conference, the team had a foundation to update and expand. Good design for one event; better design for every event after it.",
        "And Deci — planned from day one as GridX's brand character — made their conference debut and went on to become the face of the company across email, newsletters, and onboarding. That's one of my favorite things to happen on a project."
      ]
    },
    next: { slug: "taylor-series", title: "Taylor Guitars Series Pages", tags: "E-commerce · Content Design · Consumer Brand" }
  },

  "taylor-series": {
    eyebrow: ["UX/UI Design", "E-commerce", "Consumer Brand"],
    title: ["Taylor Guitars", "Series", "Pages"],
    titleEm: "Series",
    lede: "The series pages were the primary entry point for guitar buyers — and with hundreds of models across dozens of series, they weren't helping anyone decide. I was the sole in-house designer on the redesign.",
    meta: [
      { label: "Role",   value: "UX/UI Design & Art Direction" },
      { label: "Team",   value: "Web Mgr · Mktg Dir · Agency · Internal media" },
      { label: "Client", value: "Taylor Guitars" },
      { label: "Domain", value: "E-commerce · Content Design" }
    ],
    Schema: SchemaTaylorSeries,
    heroImage: "img/taylor-series/series-3.png",
    heroContain: true,
    problem: {
      heading: "The series pages weren't built to help people buy. They were marketing brochures — rich with content, but with no links to specific models and no path forward.",
      body: [
        "The existing pages had plenty of information — series overviews, features, lifestyle imagery — but nowhere to go. No model links, no comparison tools, no next step. A user who arrived curious about a guitar could read about it and then leave. That was the ceiling.",
        "This redesign was the first phase of a larger initiative: establish the series pages, then redesign product pages, then launch the ecommerce experience. The foundation had to be right. As part of that initiative, the team was in ongoing conversation with customers about how they actually shop for guitars — and what kept coming back was the analysis paralysis problem. Present someone with a wall of options and they freeze. Get them anchored to a specific guitar and the journey starts moving.",
        "The design challenge was building pages that could do both: introduce the series to someone new, and give a serious buyer the tools to find exactly what they were looking for."
      ]
    },
    results: [
      { n: "105", u: "%", label: "Increase in page views",                    desc: "measured across all 15 series pages, 3 months post-launch vs. same period prior year" },
      { n: "150", u: "%", label: "Increase in time on page",                  desc: "users were actually reading and exploring" },
      { n: "67",  u: "%", label: "Increase in clickthrough to product pages",  desc: "the journey was working" },
      { n: "77",  u: "%", label: "Of visitors continued to product pages",     desc: "a conversion path that didn't exist in analytics before this redesign" }
    ],
    process: [
      { n: "01", heading: "Defining the problem", images: ["img/taylor-series/journey-craig.jpg", "img/taylor-series/journey-shelley.jpg"], body: "Initial research focused on where users actually were in their buying journey — not where the business assumed they were. The conclusion: these pages needed to do three specific things. Provide a high-level series overview. Give easy access to specific models with clear imagery. And present multiple ways to go deeper for users interested in different things. Journey mapping informed by two personas — a style-focused newer player and an experienced collector who cared about specs and tone — helped shape the module set. The personas were grounded in customer conversations happening as part of the broader DTC initiative, even if direct usability testing wasn't available at that stage.", callout: "The two buyer personas were grounded in real customer conversations from the DTC initiative. That made design decisions defensible when priorities got debated internally — and they always do." },
      { n: "02", heading: "UX design", images: ["img/taylor-series/series-img-1.jpg", "img/taylor-series/series-img-2.jpg", "img/taylor-series/series-img-4.jpg"], body: "The core UX challenge was a known customer behavior: present someone with a wall of guitars and they freeze. Put a single guitar in their hands and they suddenly have an anchor for their journey. The goal was to replicate that on-screen — get users to a specific model as fast as possible, because the faster they land on something concrete, the more likely they are to continue to a store finder or product page. That insight drove the decision to break copy into scannable chunks rather than lead with dense marketing text. It also shaped the three-zone page structure — a series overview for everyone, a model browser for users ready to compare, and a feature deep-dive for shoppers who buy on specs or tone. Multiple entry points to product pages throughout — rather than a single CTA at the bottom — came from the reality that guitar buyers don't all shop the same way.", callout: "Every structural decision was about getting someone to a specific guitar fast. A user looking at one model is far more likely to keep going than someone staring at 40 options with nowhere to start." },
      { n: "03", heading: "Art direction", body: "Led art direction for the visual language of these pages. The brief for each series was to establish a distinct feel — usually anchored to a larger product launch shoot already associated with that series. From there, the goal was comprehensive coverage: the woods, the finishes, the color range, the overall aesthetic character of the series. Every visual decision was in service of helping a buyer understand not just what the guitar looks like, but what kind of guitar it is. That meant directing photoshoots on-site with Taylor's internal photography team and coordinating lifestyle and beauty imagery across models and environments. Managing that pipeline — multiple teams, multiple asset types, all needing to land before development started — was a significant coordination effort.", callout: "Managing multiple shoot teams, asset types, and a hard dev deadline meant the content pipeline was as much my design problem as the UI. You can't separate them." },
      { n: "04", heading: "Design & prototyping", image: "img/taylor-series/series-img-5.jpg", body: "As the sole designer on the Taylor side, I led the wireframing and prototyping of the new series page experience — developing modules that hadn't existed on the site before. I worked closely with the agency designer throughout, providing direction and feedback on execution while retaining design ownership on the Taylor side. Each module was designed to solve a specific problem from the define phase: a model browser for quick comparison without navigating away, a feature section that communicated tonal character visually, and a 'meet the series' summary that oriented users before they dove in.", callout: "Being the only Taylor-side designer meant I owned direction while the agency handled execution. That only works if you're giving clear, specific feedback at every review. If you're not, execution drifts." },
      { n: "05", heading: "Launch & iteration", body: "We launched, let the pages run, and came back to measure. Numbers came back strong across every metric. The plan going forward was CRO testing and continuous auditing — with a round-two design cycle already in the backlog before other priorities took over. That's how it goes.", callout: "We launched with a CRO plan and a round-two backlog already filled. Projects that can explain their numbers — and say what they'd do with more runway — are the ones that get continued investment." }
    ],
    keyScreens: [
      { label: "Model browser",    image: "img/taylor-series/series-meet-the-series.png", desc: "A new module that hadn't existed on the site before. Users could browse models, compare specs, and navigate to product pages without leaving the series overview." },
      { label: "Features section", image: "img/taylor-series/series-features.png",        desc: "Features communicated through full-bleed lifestyle imagery and paired copy — translating tonal character and craftsmanship into language that resonated with both casual and experienced players." },
      { label: "Browse & filter",  image: "img/taylor-series/series-browse.png",          desc: "A filterable model grid giving spec-focused buyers a fast path to exactly what they were looking for — without disrupting the overview experience for users still exploring." }
    ],
    quote: {
      text: "Helping someone browse isn't the same as helping someone decide.",
      cite: "Project takeaway"
    },
    takeaways: {
      heading: "The new pages guided users toward a guitar — not just at guitars.",
      body: [
        "The old series pages let users look at guitars. The new ones guided users toward a guitar. That distinction — between passive browsing and active decision support — drove every design choice on the project.",
        "Users weren't being pushed to product pages — they were being led there by clearer information, better imagery, and a page structure that matched how people actually shop for something they care about.",
        "A round-two cycle with direct user testing and CRO experiments would have pushed these numbers further. The groundwork was laid. The backlog was full. The results were already strong enough to validate the direction."
      ]
    },
    next: { slug: "taylor-sustainability", title: "Taylor Sustainability Hub", tags: "Editorial Design · Brand · Consumer" }
  },

  "taylor-sustainability": {
    eyebrow: ["UX Lead", "Editorial Design", "Taylor Guitars"],
    title: ["Taylor", "Sustainability", "Hub"],
    titleEm: "Sustainability",
    lede: "Taylor had years of genuine sustainability work and no place to put it where customers could find it. We built that place — and made sure it actually felt like the former, not a press release.",
    meta: [
      { label: "Role",    value: "UX Lead & Product Designer" },
      { label: "Team",    value: "Web Mgr · Agency Partners · Content Team" },
      { label: "Company", value: "Taylor Guitars" },
      { label: "Domain",  value: "Editorial Design · Brand" }
    ],
    Schema: SchemaSustainability,
    heroImage: "img/sustainability/sustainability-hub-thumbnail.jpg",
    heroContain: true,
    problem: {
      heading: "Taylor's sustainability work was genuinely industry-leading. None of it was anywhere customers could find it.",
      body: [
        "Taylor Guitars has a long history of sustainability leadership — the Ebony Project, responsible sourcing, supply chain transparency, industry awards. But those stories lived in print magazines, internal files, and scattered pages across the site. Customers had no central place to explore them. And sustainability was increasingly the reason younger buyers were choosing Taylor over another brand.",
        "The goal was a digital hub that showcased Taylor's initiatives authentically — built trust through third-party validation, and supported users along their purchasing journey without feeling like a marketing brochure. That last part is harder than it sounds. Users can smell greenwashing from a mile away.",
        "As the in-house designer at Taylor, I established the design direction from discovery through final handoff — working within a structure where a web manager owned the agency relationship and provided the initial brief. The agency handled development and contributed design input along the way; my role was to lead on UX, set the design language, and make sure the work stayed grounded in user and brand priorities throughout."
      ]
    },
    results: [
      { n: "Long-form",     u: "", label: "Depth over scanning",    desc: "Trade show conversations revealed that customers who engaged with Taylor's sustainability story wanted the full picture, not a highlight reel. That directly shaped the hub's emphasis on long-form storytelling." },
      { n: "Values-driven", u: "", label: "Purchasing",             desc: "Industry research consistently showed younger buyers factoring corporate responsibility into guitar decisions. Taylor's story was an asset — it just needed a home." },
      { n: "CMS-ready",     u: "", label: "At launch",              desc: "The component library was built so the marketing team and writers could add new sustainability stories through the CMS without involving engineering." }
    ],
    process: [
      { n: "01", heading: "Discovery & content mapping", images: ["img/sustainability/sus-hub-sketch-1.png", "img/sustainability/sus-hub-sketch-2.png", "img/sustainability/sus-hub-sketch-3.png"], body: "Facilitated early workshops with stakeholders to map content and define information architecture. From those sessions I synthesized three non-negotiables that became the criteria everything else was measured against: build trust with credible, authentic information; keep navigation simple and scannable; and design an experience that could grow independently while staying connected to the Taylor brand.", callout: "We came out of those workshops with three non-negotiables instead of ten requirements. Every design decision after that had something to check against. That's a more useful output." },
      { n: "02", heading: "Competitive analysis", body: "Looked at brands like Patagonia, The Nature Conservancy, and Martin Guitars to understand what made sustainability storytelling actually work. The pattern was clear: the strongest examples were evergreen, authentic, and focused on people rather than products. The weakest felt like PR — vague claims, infrequent updates, no external validation. As a team we landed on a clear direction: lead with stories and third-party credibility rather than product claims. My job was to make sure that decision held through every design choice.", callout: "The competitive analysis was most useful for showing what to avoid. Vague sustainability claims with no third-party validation read as greenwashing, and users know it. That finding changed how we approached everything." },
      { n: "03", heading: "User research", image: "img/sustainability/user-test-results.jpg", body: "Conversations with customers revealed that users wanted two things: quick, digestible stats they could process in a few seconds, and deeper long-form stories that legitimized the work. Trust signals — press coverage, awards, third-party endorsements — were essential, not optional. Younger demographics were factoring corporate responsibility directly into their purchasing decisions. I made the call to treat those trust signals as load-bearing content rather than footnotes — leading each project story with media mentions and certifications so credibility was established before the narrative began, not buried after.", callout: "Leading each project story with press mentions and certifications was a deliberate structural choice. Users who are skeptical about sustainability claims need to see credibility first, not buried at the bottom after the narrative." },
      { n: "04", heading: "Wireframing & testing", image: "img/sustainability/sus-hub-wireframes.png", body: "Sketched and prototyped multiple homepage layouts and tested them with users. Each round surfaced something actionable. I moved video access earlier in the page hierarchy after users consistently missed it, added pull quote blocks after finding that human voices broke through in a way straight copy couldn't, and kept trust signals prominent rather than letting them get buried under other content.", callout: "Each round of testing produced something structural. Moving video up the page and adding pull quotes weren't refinements — they were corrections. Testing should change things, not just confirm them." },
      { n: "05", heading: "Prototyping & development", images: ["img/sustainability/sus-iterate-1.png", "img/sustainability/sus-iterate-2.png", "img/sustainability/sus-iterate-3.png"], body: "The web manager and I made an early call to build the final design as a modular system rather than a one-off page. We knew the content team would need to own updates, and that engineering couldn't be in the loop every time a new story was added. The component library was the answer — a scalable framework that let writers add sustainability stories through the CMS without involving dev. Staying close to the agency throughout kept the system honest about what was actually buildable.", callout: "Building a modular system instead of a one-off page was a deliberate call. If the content team can't update it without involving engineering, it won't stay current. An outdated sustainability hub does more damage than none." }
    ],
    keyScreens: [
      { label: "Featured project module", image: "img/sustainability/main-project-module.png", desc: "Each sustainability project gets its own editorial treatment — rich media, project context, and direct links to featured press coverage. Credibility built in." },
      { label: "Quote section",           image: "img/sustainability/quote-section.png",       desc: "Human voices anchored the story throughout. Pull quotes from Taylor leadership gave the brand a face and kept the experience from reading like a corporate report." },
      { label: "Final design",            image: "img/sustainability/hub-ia.png",              desc: "The deployed hub brought together editorial storytelling, trust signals, and a modular component system — designed to grow as Taylor's sustainability work did." }
    ],
    quote: {
      text: "Content-heavy experiences need content strategy locked before design starts.",
      cite: "Project takeaway"
    },
    takeaways: {
      heading: "Keep the user top of mind, especially when the internal team isn't.",
      body: [
        "The hub launched as a modular, media-rich editorial experience the content team could actually maintain. The research signals — trade show conversations, industry data on values-driven purchasing, an appetite for long-form stories — supported the trust-first direction. The real proof was the component library: the content team could add new sustainability stories through the CMS without involving engineering.",
        "Two things stuck with me. First: keeping users central is hardest precisely when internal teams are excited about features and organizational priorities. That's when the designer's job is to be an advocate, not just an executor.",
        "Second: content-heavy experiences need content strategy locked before design starts. Imagery and video extend timelines significantly — planning for that early is a design decision, not just a project management one."
      ]
    },
    next: { slug: "supervisor-review", title: "Supervisor Review Mode", tags: "Workflow Design · Enterprise UX · Civic Tech" }
  }
};

/* ============================================================
   Page renderer
   ============================================================ */

function Lightbox({ screens, index, onClose, onPrev, onNext }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" || e.key === "ArrowDown") onNext();
      if (e.key === "ArrowLeft"  || e.key === "ArrowUp")   onPrev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [onClose, onPrev, onNext]);

  const screen = screens[index];
  const multi = screens.length > 1;

  return (
    <div className="cs-lightbox" onClick={onClose}>
      <button className="cs-lightbox-close" onClick={onClose} aria-label="Close">✕</button>
      {multi && (
        <button className="cs-lightbox-nav cs-lightbox-prev" aria-label="Previous"
          onClick={(e) => { e.stopPropagation(); onPrev(); }}>‹</button>
      )}
      <img src={screen.image} alt={screen.label} onClick={(e) => e.stopPropagation()} />
      {multi && (
        <button className="cs-lightbox-nav cs-lightbox-next" aria-label="Next"
          onClick={(e) => { e.stopPropagation(); onNext(); }}>›</button>
      )}
      {multi && (
        <div className="cs-lightbox-counter">{index + 1} <span>/</span> {screens.length}</div>
      )}
    </div>
  );
}

function CaseStudy() {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("slug") || "supervisor-review";
  const data = CASE_STUDIES[slug];
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const lbScreens = (data.keyScreens || []).filter(s => s.image);
  const openLightbox  = (s) => setLightboxIndex(lbScreens.indexOf(s));
  const closeLightbox = () => setLightboxIndex(null);
  const prevScreen = () => setLightboxIndex(i => (i - 1 + lbScreens.length) % lbScreens.length);
  const nextScreen = () => setLightboxIndex(i => (i + 1) % lbScreens.length);

  if (!data) {
    return (
      <div className="shell" style={{ padding: "180px 0", textAlign: "center" }}>
        <h2 style={{ fontFamily: "var(--sans)", fontWeight: 300, fontSize: 56, marginBottom: 24 }}>Case study not found.</h2>
        <a href="index.html" className="cs-back">Back to work</a>
      </div>
    );
  }

  const { Schema } = data;

  const schemaRef = useRef(null);
  useEffect(() => {
    if (!schemaRef.current) return;
    const draws = schemaRef.current.querySelectorAll(".draw");
    const pops = schemaRef.current.querySelectorAll(".pop");
    draws.forEach((el) => { el.style.strokeDasharray = "600"; el.style.strokeDashoffset = "600"; });
    pops.forEach((el) => { el.style.opacity = "0"; });
    const start = performance.now() + 350;
    let raf;
    const tick = (now) => {
      let done = true;
      draws.forEach((el, i) => {
        const t = Math.max(0, Math.min(1, (now - start - i * 80) / 1300));
        const eased = 1 - Math.pow(1 - t, 3);
        el.style.strokeDashoffset = String((1 - eased) * 600);
        if (t < 1) done = false;
      });
      pops.forEach((el) => {
        const t = Math.max(0, Math.min(1, (now - start - 600) / 400));
        el.style.opacity = String(t);
        if (t < 1) done = false;
      });
      if (!done) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [slug]);

  return (
    <>
      <section className="cs-hero">
        <div className="shell">
          <a href="index.html#work" className="cs-back">All work</a>
          <div className="cs-eyebrow">
            {data.eyebrow.map((e, i) =>
              <React.Fragment key={i}>
                {i > 0 && <span className="sep">·</span>}
                <span>{e}</span>
              </React.Fragment>
            )}
          </div>
          <h1 className="cs-title" style={{ fontSize: "92px" }}>
            {data.title.map((line, i) =>
              <React.Fragment key={i}>
                {line === data.titleEm ? <em>{line}</em> : line}
                {i < data.title.length - 1 ? <br /> : null}
              </React.Fragment>
            )}
          </h1>
          <p className="cs-lede">{data.lede}</p>

          <div className="cs-meta">
            {data.meta.map((m, i) =>
              <div key={i}>
                <div className="label">{m.label}</div>
                <div className="value">{m.value}</div>
              </div>
            )}
          </div>

          {data.confidential &&
            <div className="cs-confidential">
              Interface screenshots are under NDA. Everything below is based on production outcomes and documented process.
            </div>
          }

          {!data.confidential || data.heroImage
            ? <div className={"cs-hero-frame" + (data.heroImage ? " cs-hero-frame--photo" : "") + (data.heroContain ? " cs-hero-frame--contain" : "")} ref={schemaRef}>
                <span className="corner tl"></span>
                <span className="corner tr"></span>
                <span className="corner bl"></span>
                <span className="corner br"></span>
                {data.heroImage
                  ? <img src={data.heroImage} alt={data.title.join(" ")} className="cs-hero-img"
                      style={{ ...(data.heroImagePosition ? { objectPosition: data.heroImagePosition } : {}), ...(data.heroContain ? { objectFit: "contain" } : {}) }} />
                  : <Schema />}
              </div>
            : null}
        </div>
      </section>

      <section className="cs-section">
        <div className="shell">
          <h2>{data.problem.heading}</h2>
          <div className="cs-body">
            <div className="lhs">The problem</div>
            <div className="rhs">
              {data.problem.body.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </div>
        </div>
      </section>

      <section className="cs-section" style={{ paddingTop: 0 }}>
        <div className="shell">
          <div className="cs-body" style={{ marginBottom: 40 }}>
            <div className="lhs">Results</div>
            <div className="rhs">
              <p>{data.resultsBlurb || "Receipts from shipped work."}</p>
            </div>
          </div>
          <div className="cs-results">
            {data.results.map((r, i) =>
              <div className="cell" key={i}>
                <div className="top">{r.label}</div>
                <div className="stat">{r.n}<span className="unit">{r.u}</span></div>
                <div className="desc">{r.desc}</div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="cs-section">
        <div className="shell">
          <h2>{data.processLabel || "Process"}</h2>
          <div className="cs-process">
            {data.process.map((p, i) =>
              <div className="item" key={i}>
                <div className="num">{p.n}</div>
                <div className="heading">{p.heading}</div>
                <div className="body">{p.body.split("\n\n").map((para, j) => <p key={j}>{para}</p>)}</div>
                {p.image && <img src={p.image} alt={p.heading} className="cs-process-img" />}
                {p.images && (
                  <div className="cs-process-imgs">
                    {p.images.map((src, idx) => <img key={idx} src={src} alt={`${p.heading} ${idx + 1}`} />)}
                  </div>
                )}
                {p.video && (
                  <video className="cs-process-video" controls playsInline preload="metadata">
                    <source src={p.video} />
                  </video>
                )}
                {p.callout && <div className="cs-process-callout">{p.callout}</div>}
              </div>
            )}
          </div>
        </div>
      </section>

      {!data.confidential && (
        <section className="cs-section">
          <div className="shell">
            <h2>Key screens</h2>
            <div className="cs-screens">
              {data.keyScreens.map((s, i) =>
                <div className={"screen" + (s.image ? " screen--photo screen--clickable" : "")} key={i}
                  onClick={s.image ? () => openLightbox(s) : undefined}>
                  <div className="body">
                    {s.image
                      ? <img src={s.image} alt={s.label} />
                      : <Schema />}
                  </div>
                  <div className="label">{s.label}</div>
                </div>
              )}
            </div>
            <div className="cs-body" style={{ marginTop: 32 }}>
              <div className="lhs">Detail</div>
              <div className="rhs">
                {data.keyScreens.map((s, i) =>
                  <p key={i}><strong>{s.label}.</strong> {s.desc}</p>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {data.testimonials && data.testimonials.length > 0 && (
        <section className="cs-section" style={{ paddingTop: 0 }}>
          <div className="shell">
            <div className="cs-body">
              <div className="lhs">What users said</div>
              <div className="rhs">
                {data.testimonials.map((t, i) =>
                  <blockquote key={i} className="cs-testimonial">
                    <p>"{t.text}"</p>
                    <cite>{t.cite}</cite>
                  </blockquote>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      <div className="shell">
        <div className="cs-quote">
          <blockquote>
            {data.quote.text}
            <cite>{data.quote.cite}</cite>
          </blockquote>
        </div>
      </div>

      <section className="cs-section">
        <div className="shell">
          <h2>{data.takeaways.heading}</h2>
          <div className="cs-body">
            <div className="lhs">Takeaways</div>
            <div className="rhs">
              {data.takeaways.body.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </div>
        </div>
      </section>

      {lightboxIndex !== null && (
        <Lightbox screens={lbScreens} index={lightboxIndex}
          onClose={closeLightbox} onPrev={prevScreen} onNext={nextScreen} />
      )}

      <section className="cs-next">
        <div className="shell">
          <div className="label">Next project</div>
          <a href={`case-study.html?slug=${data.next.slug}`}>
            <div>
              <div className="title">{data.next.title}</div>
              <div style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--ink-3)", marginTop: 12 }}>{data.next.tags}</div>
            </div>
            <span className="arrow">View →</span>
          </a>
        </div>
      </section>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<CaseStudy />);
