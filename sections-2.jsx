// Metrics, Features, Tech, Dashboard, Testimonials, Final CTA, Footer
const { useState: useState2, useEffect: useEffect2, useRef: useRef2 } = React;

// ===== METRICS =====
function Metrics() {
  const cards = [
    { lbl: 'Booked calls', num: '12,847', unit: '', delta: '+34%', up: true, color: 'oklch(0.78 0.16 250)' },
    { lbl: 'Cost per lead', num: '$8', unit: '.40', delta: '−68%', up: true, color: 'oklch(0.78 0.17 155)' },
    { lbl: 'Show-up rate', num: '81', unit: '%', delta: '+22pt', up: true, color: 'oklch(0.74 0.19 300)' },
    { lbl: 'ROI · 90d', num: '14', unit: '.2×', delta: '+41%', up: true, color: 'oklch(0.82 0.16 70)' },
  ];

  const generateSpark = (seed, color) => {
    const pts = Array.from({ length: 16 }, (_, i) => {
      const v = 30 + Math.sin(i * 0.6 + seed) * 12 + i * 2.5;
      return { x: i, y: v };
    });
    const w = 200, h = 56, xMax = 15, yMax = 70;
    const d = pts.map((p, i) => {
      const x = (p.x / xMax) * w;
      const y = h - (p.y / yMax) * h;
      return `${i === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`;
    }).join(' ');
    return (
      <svg viewBox={`0 0 ${w} ${h}`} width="100%" height={h} preserveAspectRatio="none">
        <path d={d + ` L ${w} ${h} L 0 ${h} Z`} fill={color} opacity="0.12" />
        <path d={d} fill="none" stroke={color} strokeWidth="1.6" />
      </svg>
    );
  };

  return (
    <section id="metrics">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow"><Icons.Activity size={12} /> Real customer aggregate · last 90 days</span>
          <h2>The numbers operators <span className="gradient-text">don't post on Twitter.</span></h2>
          <p>Pulled live from 1,200+ Cadence-powered workspaces. Real bookings, real pipeline, real CAC reductions.</p>
        </div>

        <div className="metrics-grid">
          {cards.map((c, i) => (
            <div className="metric-card" key={i}>
              <div className="glow" style={{ background: c.color }} />
              <div className="lbl">{c.lbl}</div>
              <div className="num">{c.num}<span className="unit">{c.unit}</span></div>
              <div className={`delta ${c.up ? 'up' : 'down'}`}>{c.delta} vs prior</div>
              <div className="spark-wrap">{generateSpark(i * 1.7, c.color)}</div>
            </div>
          ))}
        </div>

        <BigChart />
      </div>
    </section>
  );
}

function BigChart() {
  const [tab, setTab] = useState2('30d');
  const data = {
    '7d': { pipeline: [42, 50, 47, 58, 62, 78, 85], cpl: [38, 36, 34, 30, 26, 22, 18] },
    '30d': { pipeline: [22, 28, 26, 34, 30, 38, 36, 42, 48, 50, 55, 58, 60, 64, 70, 72, 75, 78, 82, 85, 88, 92, 96, 100, 105, 112, 118, 124, 130, 138], cpl: [62, 58, 56, 54, 50, 48, 45, 42, 40, 38, 36, 34, 32, 30, 28, 26, 25, 24, 22, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10] },
    '90d': { pipeline: Array.from({length: 30}, (_, i) => 20 + i * 5 + Math.sin(i*0.4)*8), cpl: Array.from({length: 30}, (_, i) => 70 - i * 1.8 + Math.cos(i*0.5)*4) },
  };
  const d = data[tab];
  const w = 1100, h = 280;
  const points = d.pipeline;
  const cplPoints = d.cpl;
  const xMax = points.length - 1;
  const yMax = Math.max(...points) * 1.15;
  const cplMax = Math.max(...cplPoints) * 1.2;

  const path = (arr, max) => arr.map((v, i) => {
    const x = (i / xMax) * w;
    const y = h - (v / max) * h;
    return `${i === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`;
  }).join(' ');

  return (
    <div className="bigchart">
      <div className="bigchart-head">
        <div>
          <h3>Pipeline growth vs cost per lead</h3>
          <div className="desc">Aggregate across all customers · indexed to start of period</div>
        </div>
        <div className="bigchart-tabs">
          {['7d', '30d', '90d'].map(t => (
            <button key={t} className={tab === t ? 'active' : ''} onClick={() => setTab(t)}>{t.toUpperCase()}</button>
          ))}
        </div>
      </div>
      <svg viewBox={`0 0 ${w} ${h}`} className="bigchart-svg" preserveAspectRatio="none">
        <defs>
          <linearGradient id="bcg" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="oklch(0.78 0.16 250)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="oklch(0.78 0.16 250)" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="bcl" x1="0" x2="1">
            <stop offset="0%" stopColor="oklch(0.78 0.16 250)" />
            <stop offset="100%" stopColor="oklch(0.74 0.19 300)" />
          </linearGradient>
        </defs>
        {[0, 0.25, 0.5, 0.75].map((y, i) => (
          <line key={i} x1="0" x2={w} y1={h * y + 1} y2={h * y + 1} stroke="oklch(0.4 0.02 260 / 0.18)" strokeDasharray="3 4" />
        ))}
        <path d={path(points, yMax) + ` L ${w} ${h} L 0 ${h} Z`} fill="url(#bcg)" />
        <path d={path(points, yMax)} fill="none" stroke="url(#bcl)" strokeWidth="2.5" />
        <path d={path(cplPoints, cplMax)} fill="none" stroke="oklch(0.82 0.16 70)" strokeWidth="2" strokeDasharray="4 4" opacity="0.7" />
      </svg>
      <div style={{ display: 'flex', gap: 24, fontSize: 12, color: 'var(--fg-2)', fontFamily: 'var(--font-mono)', marginTop: 12 }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><span style={{ width: 12, height: 2, background: 'var(--accent-a)' }} /> Pipeline ($)</span>
        <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><span style={{ width: 12, height: 2, background: 'var(--accent-warm)', borderTop: '2px dashed' }} /> CPL ($)</span>
      </div>
    </div>
  );
}

// ===== FEATURES =====
function Features() {
  return (
    <section id="features">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow"><Icons.Brain size={12} /> AI capabilities</span>
          <h2>An SDR team that <span className="gradient-text">never sleeps, never quits.</span></h2>
          <p>Every Cadence agent is fluent in your offer, your tone, and your rules — and gets sharper with every conversation.</p>
        </div>

        <div className="features-grid">
          <div className="feature-card wide">
            <div className="feature-icon"><Icons.Chat /></div>
            <h3>AI qualification across every channel</h3>
            <p>SMS, WhatsApp, IG DM, email, web chat. One brain, one context window, one source of truth — synced to your CRM in real time.</p>
            <div className="feature-visual">
              <div className="chat-row bot">
                <div className="chat-bubble">Hey Sarah! Saw you booked the strategy call — quick q so we can prep: roughly how many leads/mo are you running through right now?</div>
              </div>
              <div className="chat-row user">
                <div className="chat-bubble">Around 800/mo, mostly from Meta ads. Conversion is brutal.</div>
              </div>
              <div className="chat-row bot">
                <div className="chat-bubble">Got it — that's exactly the volume we tune for. I'll pre-load the call with your funnel breakdown 👌</div>
              </div>
              <div className="chat-row bot">
                <div className="chat-typing"><span /><span /><span /></div>
              </div>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-icon"><Icons.Target /></div>
            <h3>Lead scoring on 94 signals</h3>
            <p>BANT + persona + intent + behavioral — every lead gets a confidence score and routing logic before a human sees it.</p>
            <div className="feature-visual">
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {[
                  { name: 'James L.', score: 94, tag: 'Hot', color: 'var(--accent-green)' },
                  { name: 'Priya S.', score: 78, tag: 'Warm', color: 'var(--accent-warm)' },
                  { name: 'Ben W.', score: 41, tag: 'Nurture', color: 'var(--accent-c)' },
                ].map((l, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 12 }}>
                    <span style={{ flex: 1, color: 'var(--fg-1)' }}>{l.name}</span>
                    <span style={{ flex: 2, height: 6, background: 'oklch(0.22 0.018 265)', borderRadius: 100, overflow: 'hidden' }}>
                      <span style={{ display: 'block', width: `${l.score}%`, height: '100%', background: l.color, borderRadius: 100 }} />
                    </span>
                    <span style={{ fontFamily: 'var(--font-mono)', color: l.color, width: 24 }}>{l.score}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-icon"><Icons.Workflow /></div>
            <h3>Multi-touch follow-up cadences</h3>
            <p>11-step sequences across channels with intent-aware branching. Reschedules, re-engages, and re-books cold leads on its own.</p>
            <div className="feature-visual">
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, lineHeight: 1.8, color: 'var(--fg-2)' }}>
                <div><span style={{ color: 'var(--accent-a)' }}>D+0</span> · SMS welcome</div>
                <div><span style={{ color: 'var(--accent-a)' }}>D+1</span> · Email recap</div>
                <div><span style={{ color: 'var(--accent-b)' }}>D+3</span> · WhatsApp reminder</div>
                <div><span style={{ color: 'var(--accent-warm)' }}>D+7</span> · Reschedule offer</div>
                <div><span style={{ color: 'var(--accent-green)' }}>D+14</span> · Re-engage trigger</div>
              </div>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-icon"><Icons.Shield /></div>
            <h3>Objection handling, on rails</h3>
            <p>Train your agent on every objection you've ever heard. It pattern-matches in real time and resolves in your founder voice.</p>
            <div className="feature-visual">
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {['"too expensive"', '"need to think"', '"call me later"', '"send me info"', '"not the decision-maker"'].map((t, i) => (
                  <span key={i} style={{ padding: '6px 10px', background: 'oklch(0.22 0.018 265)', border: '1px solid var(--line-soft)', borderRadius: 6, fontSize: 11, color: 'var(--fg-2)', fontFamily: 'var(--font-mono)' }}>{t}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-icon"><Icons.Mic /></div>
            <h3>Voice AI for outbound</h3>
            <p>Optional voice agent that books, reconfirms, and reschedules calls — indistinguishable from a great human SDR.</p>
            <div className="feature-visual">
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <Icons.Phone size={16} />
                <div style={{ flex: 1, display: 'flex', gap: 2, alignItems: 'flex-end', height: 28 }}>
                  {Array.from({ length: 32 }).map((_, i) => (
                    <span key={i} style={{
                      flex: 1,
                      background: 'var(--grad-primary)',
                      borderRadius: 1,
                      height: `${20 + Math.sin(i * 0.7) * 50 + Math.cos(i*0.3)*30}%`,
                      opacity: 0.7,
                      animation: `floaty ${1 + (i%5)*0.2}s ease-in-out infinite`,
                      animationDelay: `${i*0.05}s`
                    }} />
                  ))}
                </div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-3)' }}>0:42</span>
              </div>
            </div>
          </div>

          <div className="feature-card wide">
            <div className="feature-icon"><Icons.Plug /></div>
            <h3>Native integrations · 80+ tools</h3>
            <p>HubSpot, Salesforce, Close, Pipedrive, GoHighLevel, Calendly, Cal.com, Twilio, Stripe, Zapier — and a webhook layer that goes anywhere.</p>
            <div className="feature-visual">
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)', gap: 10 }}>
                {Array.from({ length: 16 }).map((_, i) => (
                  <div key={i} style={{
                    aspectRatio: '1',
                    background: 'oklch(0.2 0.018 265)',
                    border: '1px solid var(--line-soft)',
                    borderRadius: 8,
                    display: 'grid',
                    placeItems: 'center',
                    color: 'oklch(0.6 0.06 ' + ((i*40)%360) + ')',
                    fontSize: 10,
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 600,
                  }}>{['HS', 'SF', 'CL', 'PD', 'CV', 'CC', 'TW', 'ST', 'ZP', 'MK', 'IN', 'GA', 'AC', 'WB', 'RT', 'DC'][i]}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ===== TECH DEPTH =====
function TechDepth() {
  const items = [
    { ico: <Icons.Server />, ttl: 'Edge-rendered everything', tag: 'Edge', desc: 'Routed via 280+ PoPs. p95 TTFB under 90ms globally — even from your customer\'s phone in São Paulo.' },
    { ico: <Icons.Workflow />, ttl: 'Idempotent webhook fabric', tag: 'Webhooks', desc: 'Every event is signed, retried with exponential backoff, and replayable. Lost a webhook? Time-travel up to 30 days.' },
    { ico: <Icons.Layers />, ttl: 'Streaming SSR + RSC', tag: 'SSR', desc: 'Lead pages hydrate progressively. First contentful paint < 1.1s on a 3G connection.' },
    { ico: <Icons.Database />, ttl: 'Append-only event store', tag: 'Postgres', desc: 'Every conversation, score change, and routing decision is logged immutably. Full audit trail, GDPR-clean.' },
    { ico: <Icons.Compass />, ttl: 'Server-side A/B + bandit', tag: 'Experiments', desc: 'No flicker, no client SDK. Runs as middleware. Multi-arm bandits for headline & CTA optimization.' },
    { ico: <Icons.Lock />, ttl: 'SOC 2 Type II · GDPR · HIPAA', tag: 'Security', desc: 'Tenant-isolated data, BYOK encryption, granular RBAC, and a redaction layer for PII before it hits the LLM.' },
  ];

  return (
    <section id="tech">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow"><Icons.Code size={12} /> Engineering depth</span>
          <h2>Built like infrastructure, <span className="gradient-text">priced like software.</span></h2>
          <p>Most "AI funnel" tools are duct tape. Cadence is a real distributed system — same playbook as the platforms running your bank.</p>
        </div>

        <div className="tech-grid">
          <div className="tech-diagram">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <h4 style={{ fontSize: 14, color: 'var(--fg-1)', margin: 0 }}>Inside the qualification engine</h4>
              <span style={{ fontSize: 10, color: 'var(--fg-3)', fontFamily: 'var(--font-mono)' }}>v4.2.1 · 99.99% uptime</span>
            </div>
            <div className="code-block">
              <div className="code-head">
                <div className="dash-dots"><span style={{ width: 8, height: 8, borderRadius: '50%', background: 'oklch(0.7 0.2 25)', display: 'inline-block', marginRight: 4 }} /><span style={{ width: 8, height: 8, borderRadius: '50%', background: 'oklch(0.82 0.16 70)', display: 'inline-block', marginRight: 4 }} /><span style={{ width: 8, height: 8, borderRadius: '50%', background: 'oklch(0.78 0.17 155)', display: 'inline-block' }} /></div>
                <span className="file" style={{ marginLeft: 8 }}>edge/qualify.ts</span>
              </div>
              <div className="code-body" dangerouslySetInnerHTML={{ __html: `<span class="tk-com">// Streamed, edge-cached, retry-safe</span>
<span class="tk-key">export async function</span> <span class="tk-fn">qualify</span>(lead: Lead) {
  <span class="tk-key">const</span> ctx = <span class="tk-key">await</span> <span class="tk-fn">enrich</span>(lead.email)
  <span class="tk-key">const</span> score = <span class="tk-key">await</span> agent.<span class="tk-fn">infer</span>({
    persona: ctx.persona,
    intent:  ctx.signals,
    history: ctx.touches,
    rubric:  workspace.rubric,
  })
  <span class="tk-key">await</span> events.<span class="tk-fn">emit</span>(<span class="tk-str">"lead.qualified"</span>, {
    leadId: lead.id, score, ctx,
  })
  <span class="tk-key">if</span> (score &gt;= <span class="tk-num">75</span>) <span class="tk-key">return</span> <span class="tk-fn">routeToBooking</span>(lead)
  <span class="tk-key">return</span> <span class="tk-fn">enqueueCadence</span>(lead, score)
}` }} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10, marginTop: 16 }}>
              {[
                { v: '11ms', l: 'p50 latency' },
                { v: '99.99%', l: 'uptime SLA' },
                { v: '0', l: 'cold starts' },
              ].map((s, i) => (
                <div key={i} style={{ padding: '14px 16px', background: 'var(--bg-ink)', border: '1px solid var(--bg-ink)', borderRadius: 10 }}>
                  <div style={{ fontSize: 22, fontWeight: 600, fontFamily: 'var(--font-display)', color: 'white', letterSpacing: '-0.025em' }}>{s.v}</div>
                  <div style={{ fontSize: 10, color: 'oklch(0.65 0.02 260)', textTransform: 'uppercase', letterSpacing: '0.06em', marginTop: 4, fontFamily: 'var(--font-mono)' }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="tech-list">
            {items.map((it, i) => (
              <div className="tech-item" key={i}>
                <div className="ico">{it.ico}</div>
                <div>
                  <div className="ttl">{it.ttl} <span className="tag">{it.tag}</span></div>
                  <div className="desc">{it.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Metrics, Features, TechDepth });
