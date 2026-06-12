/* Schematics — abstract diagrams of each project's design solution.
   Not screenshots. Architectural shapes only. */

const SchemaSupervisor = () => (
  <svg className="schema" viewBox="0 0 380 300" preserveAspectRatio="xMidYMid meet">
    {/* before vs after frame */}
    <rect x="20" y="36" width="148" height="200" className="stroke-thin draw" />
    <text x="20" y="28">Before · Acrobat</text>
    {/* messy lines */}
    <line x1="32" y1="56" x2="156" y2="56" className="stroke-thin draw" />
    <line x1="32" y1="68" x2="120" y2="68" className="stroke-thin draw" />
    <line x1="32" y1="80" x2="140" y2="80" className="stroke-thin draw" />
    <line x1="32" y1="92" x2="100" y2="92" className="stroke-thin draw" />
    <rect x="32" y="106" width="64" height="40" className="stroke-thin draw" />
    <rect x="100" y="106" width="56" height="40" className="stroke-thin draw" />
    <line x1="32" y1="158" x2="156" y2="158" className="stroke-thin draw" />
    <line x1="32" y1="170" x2="124" y2="170" className="stroke-thin draw" />
    <line x1="32" y1="182" x2="148" y2="182" className="stroke-thin draw" />

    {/* arrow */}
    <line x1="174" y1="136" x2="206" y2="136" className="stroke-mark draw" />
    <polyline points="200,130 206,136 200,142" className="stroke-mark draw" />

    {/* After: review mode toggle */}
    <rect x="212" y="36" width="148" height="200" className="stroke draw" />
    <text x="212" y="28">After · Review mode</text>
    {/* toggle */}
    <rect x="224" y="50" width="60" height="18" rx="9" className="fill-ink pop" />
    <circle cx="274" cy="59" r="6" fill="var(--paper)" className="pop" />
    {/* panel */}
    <rect x="224" y="80" width="124" height="40" className="fill-soft pop" />
    <line x1="232" y1="92" x2="280" y2="92" className="stroke draw" />
    <line x1="232" y1="102" x2="320" y2="102" className="stroke draw" />
    <line x1="232" y1="112" x2="300" y2="112" className="stroke draw" />
    <rect x="224" y="130" width="60" height="90" className="stroke draw" />
    <rect x="288" y="130" width="60" height="90" className="stroke draw" />
    <text x="228" y="146">Q&amp;A</text>
    <text x="292" y="146">Notes</text>
    {/* concur badge */}
    <rect x="288" y="200" width="60" height="18" className="fill-mark pop" />
    <text x="294" y="212" style={{fill: 'var(--paper)'}}>Concur</text>

    {/* legend */}
    <g className="schema-legend" transform="translate(20, 284)">
      <rect x="0" y="-7" width="7" height="7" className="legend-border" />
      <text x="11" y="0">prior</text>
      <rect x="47" y="-7" width="7" height="7" className="legend-fill-soft" />
      <text x="58" y="0">new</text>
      <line x1="94" y1="-3" x2="106" y2="-3" className="legend-arrow" />
      <polyline points="102,-7 106,-3 102,1" className="legend-arrow" />
      <text x="110" y="0">action</text>
    </g>
  </svg>
);

const SchemaInterview = () => (
  <svg className="schema" viewBox="0 0 380 300" preserveAspectRatio="xMidYMid meet">
    <text x="20" y="28">Q&amp;A list · color-coded applicants</text>
    <rect x="20" y="36" width="340" height="220" className="stroke-thin draw" />
    {/* Q rows with colored dots */}
    {[0,1,2,3,4].map(i => (
      <g key={i}>
        <circle cx={36} cy={62 + i*36} r="5" className={i % 2 === 0 ? 'fill-mark' : 'fill-ink'} />
        <line x1={50} y1={62 + i*36} x2={250} y2={62 + i*36} className="stroke draw" />
        <line x1={50} y1={70 + i*36} x2={210} y2={70 + i*36} className="stroke-thin draw" />
      </g>
    ))}
    {/* table view divider */}
    <line x1="270" y1="36" x2="270" y2="256" className="stroke-thin draw" />
    <text x="278" y="56">Table view</text>
    {[0,1,2,3].map(i => (
      <g key={i}>
        <rect x={278} y={66 + i*36} width="74" height="26" className="stroke-thin draw" />
        <line x1={284} y1={75 + i*36} x2={332} y2={75 + i*36} className="stroke draw" />
        <line x1={284} y1={83 + i*36} x2={322} y2={83 + i*36} className="stroke-thin draw" />
      </g>
    ))}
    {/* drag handle */}
    <g className="pop" transform="translate(20, 220)">
      <rect x="0" y="0" width="200" height="22" className="fill-soft" />
      <circle cx="10" cy="11" r="2" className="fill-ink" />
      <circle cx="16" cy="11" r="2" className="fill-ink" />
      <circle cx="10" cy="5" r="2" className="fill-ink" />
      <circle cx="16" cy="5" r="2" className="fill-ink" />
      <circle cx="10" cy="17" r="2" className="fill-ink" />
      <circle cx="16" cy="17" r="2" className="fill-ink" />
      <text x="28" y="14">Drag to reorder</text>
    </g>

    {/* legend */}
    <g className="schema-legend" transform="translate(20, 284)">
      <circle cx="3" cy="-3" r="4" className="fill-mark" />
      <text x="11" y="0">applicant A</text>
      <circle cx="71" cy="-3" r="4" className="fill-ink" />
      <text x="79" y="0">applicant B</text>
      <rect x="148" y="-7" width="7" height="7" className="legend-fill-soft" />
      <text x="159" y="0">reorder</text>
    </g>
  </svg>
);

const SchemaEmpower = () => (
  <svg className="schema" viewBox="0 0 380 280" preserveAspectRatio="xMidYMid meet">
    <text x="20" y="28">API → Campaign → Customer</text>
    {/* API node */}
    <rect x="20" y="40" width="80" height="60" className="stroke draw" />
    <text x="28" y="58">API Layer</text>
    <line x1="28" y1="68" x2="92" y2="68" className="stroke-thin draw" />
    <line x1="28" y1="78" x2="80" y2="78" className="stroke-thin draw" />
    <line x1="28" y1="88" x2="88" y2="88" className="stroke-thin draw" />

    {/* connector */}
    <line x1="100" y1="70" x2="140" y2="70" className="stroke-mark draw" />
    <polyline points="134,64 140,70 134,76" className="stroke-mark draw" />

    {/* Campaign builder */}
    <rect x="140" y="40" width="100" height="200" className="stroke draw" />
    <text x="148" y="58">Campaign · widgets</text>
    {[0,1,2,3].map(i => (
      <rect key={i} x={150} y={68 + i*40} width={80} height={32} className={i===1?"fill-mark":"fill-soft"} />
    ))}
    <text x="152" y="86" style={{fill: 'var(--ink-2)'}}>Cost</text>
    <text x="152" y="126" style={{fill: 'var(--paper)'}}>Rate Compare</text>
    <text x="152" y="166">EV Savings</text>
    <text x="152" y="206">Solar ROI</text>

    {/* connector */}
    <line x1="240" y1="140" x2="280" y2="140" className="stroke-mark draw" />
    <polyline points="274,134 280,140 274,146" className="stroke-mark draw" />

    {/* Customer screen */}
    <rect x="280" y="80" width="80" height="120" className="stroke draw" />
    <text x="286" y="98">Customer</text>
    <rect x="288" y="106" width="64" height="40" className="fill-soft" />
    <line x1="294" y1="120" x2="346" y2="120" className="stroke-thin draw" />
    <line x1="294" y1="128" x2="338" y2="128" className="stroke-thin draw" />
    <line x1="294" y1="136" x2="342" y2="136" className="stroke-thin draw" />
    <rect x="288" y="152" width="64" height="14" className="fill-ink" />
    <rect x="288" y="170" width="64" height="20" className="stroke-thin" />
  </svg>
);

const SchemaTouchscreen = () => (
  <svg className="schema" viewBox="0 0 380 280" preserveAspectRatio="xMidYMid meet">
    <text x="20" y="28">Touchscreen kiosk · self-paced</text>
    {/* kiosk frame */}
    <rect x="20" y="40" width="160" height="216" rx="6" className="stroke draw" />
    <rect x="32" y="52" width="136" height="180" className="stroke-thin draw" />
    {/* deci character marker */}
    <circle cx="100" cy="100" r="18" className="fill-mark pop" />
    <circle cx="94" cy="95" r="2" fill="var(--paper)" className="pop" />
    <circle cx="106" cy="95" r="2" fill="var(--paper)" className="pop" />
    <path d="M 92 106 Q 100 112 108 106" stroke="var(--paper)" strokeWidth="1.2" fill="none" className="pop" />
    <text x="74" y="138">Hi, I'm Deci</text>
    {/* four quadrants */}
    <rect x="42" y="148" width="58" height="34" className="fill-soft" />
    <rect x="106" y="148" width="58" height="34" className="fill-soft" />
    <rect x="42" y="188" width="58" height="34" className="fill-soft" />
    <rect x="106" y="188" width="58" height="34" className="fill-soft" />
    <text x="48" y="167">Cost</text>
    <text x="112" y="167">Rates</text>
    <text x="48" y="207">EV</text>
    <text x="112" y="207">Solar</text>
    {/* base stand */}
    <line x1="60" y1="256" x2="140" y2="256" className="stroke" />
    {/* paths */}
    <line x1="180" y1="120" x2="260" y2="80" className="stroke-mark draw" />
    <line x1="180" y1="140" x2="260" y2="130" className="stroke-mark draw" />
    <line x1="180" y1="180" x2="260" y2="180" className="stroke-mark draw" />
    <line x1="180" y1="200" x2="260" y2="230" className="stroke-mark draw" />
    {/* paths land */}
    <rect x="260" y="64" width="100" height="32" className="stroke draw" />
    <text x="266" y="84">Bill compare</text>
    <rect x="260" y="114" width="100" height="32" className="stroke draw" />
    <text x="266" y="134">Rate analysis</text>
    <rect x="260" y="164" width="100" height="32" className="stroke draw" />
    <text x="266" y="184">EV savings</text>
    <rect x="260" y="214" width="100" height="32" className="fill-mark draw" />
    <text x="266" y="234" style={{fill: 'var(--paper)'}}>Lead capture</text>
  </svg>
);

const SchemaTaylorSeries = () => (
  <svg className="schema" viewBox="0 0 380 280" preserveAspectRatio="xMidYMid meet">
    <text x="20" y="28">Series page · three zones</text>
    {/* page frame */}
    <rect x="20" y="36" width="340" height="220" className="stroke-thin draw" />
    {/* zone 1: overview */}
    <rect x="32" y="48" width="316" height="48" className="fill-soft pop" />
    <text x="38" y="62">Series overview</text>
    <line x1="38" y1="74" x2="200" y2="74" className="stroke-thin" />
    <line x1="38" y1="84" x2="240" y2="84" className="stroke-thin" />
    {/* zone 2: model browser */}
    <text x="32" y="110">Model browser</text>
    <g>
      {[0,1,2,3,4].map(i => (
        <g key={i}>
          <rect x={32 + i*64} y={116} width={56} height={70} className="stroke draw" />
          <line x1={36 + i*64} y1={150} x2={84 + i*64} y2={150} className="stroke-thin" />
          <line x1={36 + i*64} y1={158} x2={76 + i*64} y2={158} className="stroke-thin" />
          {i === 2 && <rect x={32 + i*64} y={116} width={56} height={70} className="stroke-mark" />}
        </g>
      ))}
    </g>
    {/* zone 3: feature deep dive */}
    <text x="32" y="206">Features · spec deep-dive</text>
    <rect x="32" y="212" width="148" height="38" className="fill-ink pop" />
    <rect x="188" y="212" width="160" height="38" className="stroke draw" />
    <line x1="196" y1="226" x2="320" y2="226" className="stroke-thin" />
    <line x1="196" y1="236" x2="296" y2="236" className="stroke-thin" />
  </svg>
);

const SchemaSustainability = () => (
  <svg className="schema" viewBox="0 0 380 280" preserveAspectRatio="xMidYMid meet">
    <text x="20" y="28">Editorial hub · modular stories</text>
    {/* magazine-like grid */}
    <rect x="20" y="36" width="340" height="220" className="stroke-thin draw" />
    {/* featured story large */}
    <rect x="32" y="48" width="186" height="120" className="fill-soft pop" />
    <line x1="40" y1="60" x2="100" y2="60" className="stroke-mark" />
    <text x="40" y="80" style={{fontSize: 10, fill: 'var(--ink)'}}>The Ebony Project</text>
    <line x1="40" y1="92" x2="160" y2="92" className="stroke-thin" />
    <line x1="40" y1="100" x2="200" y2="100" className="stroke-thin" />
    <line x1="40" y1="108" x2="180" y2="108" className="stroke-thin" />
    <rect x="40" y="140" width="36" height="14" className="fill-mark pop" />
    {/* sidebar stories */}
    <rect x="228" y="48" width="120" height="56" className="stroke draw" />
    <line x1="236" y1="62" x2="280" y2="62" className="stroke-mark" />
    <line x1="236" y1="74" x2="338" y2="74" className="stroke-thin" />
    <line x1="236" y1="82" x2="322" y2="82" className="stroke-thin" />
    <line x1="236" y1="90" x2="332" y2="90" className="stroke-thin" />
    <rect x="228" y="112" width="120" height="56" className="stroke draw" />
    <line x1="236" y1="126" x2="280" y2="126" className="stroke-mark" />
    <line x1="236" y1="138" x2="338" y2="138" className="stroke-thin" />
    <line x1="236" y1="146" x2="322" y2="146" className="stroke-thin" />
    {/* pull quote */}
    <g className="pop">
      <text x="32" y="190" style={{fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 14, letterSpacing: '-0.01em', textTransform: 'none', fill: 'var(--ink)'}}>"Sustainability isn't a</text>
      <text x="32" y="208" style={{fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 14, letterSpacing: '-0.01em', textTransform: 'none', fill: 'var(--ink)'}}>marketing line — it's how</text>
      <text x="32" y="226" style={{fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 14, letterSpacing: '-0.01em', textTransform: 'none', fill: 'var(--ink)'}}>we make the instruments."</text>
      <text x="32" y="244">— Andy Powers</text>
    </g>
    {/* trust signals */}
    <rect x="228" y="180" width="120" height="64" className="fill-soft" />
    <text x="236" y="198">Press · Awards</text>
    <line x1="236" y1="208" x2="338" y2="208" className="stroke-thin" />
    <line x1="236" y1="218" x2="328" y2="218" className="stroke-thin" />
    <line x1="236" y1="228" x2="332" y2="228" className="stroke-thin" />
  </svg>
);

window.Schematics = {
  SchemaSupervisor,
  SchemaInterview,
  SchemaEmpower,
  SchemaTouchscreen,
  SchemaTaylorSeries,
  SchemaSustainability,
};
