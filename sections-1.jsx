// Hero, VSL, Funnel sections
const { useState, useEffect, useRef } = React;

// ===== HERO =====
function Hero() {
  const [bookings, setBookings] = useState(2847);
  const [revenue, setRevenue] = useState(184320);
  useEffect(() => {
    const id = setInterval(() => {
      setBookings(b => b + Math.floor(Math.random() * 3));
      setRevenue(r => r + Math.floor(Math.random() * 240) + 60);
    }, 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="grid-bg" />
        <div className="hero-orb a" />
        <div className="hero-orb b" />
        <div className="hero-orb c" />
      </div>
      <div className="container hero-grid">
        <div>
          <span className="eyebrow"><span className="dot" />New · GPT-class qualification engine</span>
          <h1>
            Book <span className="accent">30+ qualified calls</span> a month — on autopilot, while you sleep.
          </h1>
          <p className="hero-sub">
            Cadence AI replaces your SDR team with always-on agents that qualify, follow up, and book meetings across SMS, WhatsApp, email, and DM — in your tone, on your calendar, with your CRM.
          </p>
          <div className="hero-cta">
            <button className="btn btn-primary btn-lg">
              Start free trial <Icons.ArrowRight size={16} />
            </button>
            <button className="btn btn-ghost btn-lg">
              <Icons.Play size={14} /> Watch 4-min demo
            </button>
          </div>
          <div className="hero-cta-meta">
            <div className="avatars">
              {[260, 30, 150, 320, 200].map((h, i) => <div key={i} style={{'--h': h}} />)}
            </div>
            <span className="stars">{[...Array(5)].map((_, i) => <Icons.Star key={i} size={12} />)}</span>
            <span style={{ color: 'var(--fg-2)' }}>4.9 · trusted by 1,200+ growth teams</span>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <div className="num">{bookings.toLocaleString()}</div>
              <div className="lbl">Calls booked / 30d</div>
            </div>
            <div className="hero-stat">
              <div className="num"><span className="pct">−68%</span></div>
              <div className="lbl">Cost per lead</div>
            </div>
            <div className="hero-stat">
              <div className="num">${(revenue/1000).toFixed(1)}k</div>
              <div className="lbl">Pipeline added today</div>
            </div>
          </div>
        </div>

        <div className="dash-mock">
          <HeroDashboard />
          <div className="float-card fc-1">
            <div className="row">
              <div className="ico"><Icons.Calendar size={16} /></div>
              <div>
                <div className="ttl">New booking confirmed</div>
                <div className="sub">Mira K. · Tue 2:30pm</div>
              </div>
            </div>
          </div>
          <div className="float-card fc-2">
            <div className="row">
              <div className="ico"><Icons.Sparkle size={16} /></div>
              <div>
                <div className="ttl">AI qualified 14 leads</div>
                <div className="sub">in the last 4 minutes</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroDashboard() {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTick(t => t + 1), 1800);
    return () => clearInterval(id);
  }, []);

  // Generate area chart points
  const points = Array.from({ length: 24 }, (_, i) => {
    const v = 40 + Math.sin(i / 3 + tick * 0.3) * 18 + Math.cos(i / 5) * 12 + i * 1.6;
    return { x: i, y: v };
  });
  const w = 380, h = 110;
  const xMax = 23;
  const yMax = 100;
  const pathD = points.map((p, i) => {
    const x = (p.x / xMax) * w;
    const y = h - (p.y / yMax) * h;
    return `${i === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`;
  }).join(' ');
  const areaD = pathD + ` L ${w} ${h} L 0 ${h} Z`;

  return (
    <div className="dash-card">
      <div className="dash-header">
        <div className="dash-dots"><span /><span /><span /></div>
        <div className="dash-title">cadence.ai · Performance</div>
        <div style={{ width: 30 }} />
      </div>
      <div className="dash-body">
        <div className="dash-row">
          <div className="dash-tile">
            <div className="lbl">Conversion</div>
            <div className="val">28.4%</div>
            <div className="delta"><Icons.Trend size={11} /> +6.2%</div>
          </div>
          <div className="dash-tile">
            <div className="lbl">Show rate</div>
            <div className="val">81%</div>
            <div className="delta"><Icons.Trend size={11} /> +12%</div>
          </div>
        </div>
        <div className="dash-chart">
          <div className="dash-chart-head">
            <div className="ttl">Bookings · last 24h</div>
            <div className="pill">LIVE</div>
          </div>
          <svg viewBox={`0 0 ${w} ${h}`} width="100%" height="110" preserveAspectRatio="none">
            <defs>
              <linearGradient id="hg" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="oklch(0.78 0.16 250)" stopOpacity="0.6" />
                <stop offset="100%" stopColor="oklch(0.78 0.16 250)" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="hl" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="oklch(0.78 0.16 250)" />
                <stop offset="100%" stopColor="oklch(0.74 0.19 300)" />
              </linearGradient>
            </defs>
            <path d={areaD} fill="url(#hg)" />
            <path d={pathD} fill="none" stroke="url(#hl)" strokeWidth="2" />
            {points.slice(-1).map((p, i) => {
              const x = (p.x / xMax) * w;
              const y = h - (p.y / yMax) * h;
              return <g key={i}><circle cx={x} cy={y} r="6" fill="oklch(0.78 0.16 250)" opacity="0.3"/><circle cx={x} cy={y} r="3" fill="white" /></g>;
            })}
          </svg>
        </div>
        <div style={{ display: 'flex', gap: 8, marginTop: 12, fontSize: 11, color: 'var(--fg-3)', fontFamily: 'var(--font-mono)' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
            <span style={{ width: 8, height: 8, borderRadius: 2, background: 'var(--accent-a)' }} /> Booked
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
            <span style={{ width: 8, height: 8, borderRadius: 2, background: 'var(--accent-b)' }} /> Qualified
          </span>
          <span style={{ marginLeft: 'auto', color: 'var(--accent-green)' }}>● synced 2s ago</span>
        </div>
      </div>
    </div>
  );
}

// ===== TRUST MARQUEE =====
function Trust() {
  const logos = [
    { name: 'Northwind', h: 250 }, { name: 'Helix Coaching', h: 30 }, { name: 'Forge & Co', h: 320 },
    { name: 'Crescent', h: 200 }, { name: 'Vanta Studios', h: 100 }, { name: 'Lattice Labs', h: 60 },
    { name: 'Origin Fitness', h: 360 }, { name: 'Beacon HQ', h: 220 }, { name: 'Atlas Group', h: 280 },
  ];
  return (
    <section className="trust">
      <div className="container">
        <div className="trust-label">Trusted by 1,200+ growth-led teams worldwide</div>
        <div className="marquee">
          <div className="marquee-track">
            {[...logos, ...logos].map((l, i) => (
              <div className="logo-cell" key={i}>
                <div className="logo-mark" style={{ '--h': l.h }} />
                {l.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ===== VSL VIDEO =====
function VSL() {
  return (
    <section id="vsl">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">04:21 · Founder walkthrough</span>
          <h2>See the system that books <span className="gradient-text">$2.4M in pipeline</span> per month</h2>
          <p>Inside this 4-minute breakdown: the exact AI qualification flow, the follow-up cadence that 4× show rates, and the architecture top operators are quietly running.</p>
        </div>
        <div className="vsl-wrap">
          <div className="vsl-player">
            <div className="vsl-poster">
              <div className="play-btn"><Icons.Play /></div>
            </div>
            <div className="vsl-overlay-tl"><span className="live" /> LIVE COHORT · 12 SEATS</div>
            <div className="vsl-overlay-br">04:21</div>
            <div className="vsl-subs">"…and that's how we 4× their pipeline in 30 days."</div>
            <div className="vsl-progress"><div className="vsl-progress-fill" /></div>
          </div>
          <div className="vsl-side">
            <div className="vsl-side-card accent">
              <div className="lbl">Avg. lift / customer</div>
              <div className="big">+312%</div>
              <div className="desc">in qualified booked calls within 30 days of going live.</div>
            </div>
            <div className="vsl-side-card">
              <div className="lbl">Time saved / week</div>
              <div className="big">38h</div>
              <div className="desc">manual SDR follow-ups eliminated by AI agents.</div>
            </div>
            <div className="vsl-side-card">
              <div className="lbl">Avg. response time</div>
              <div className="big">11s</div>
              <div className="desc">first reply, 24/7 — across every channel.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ===== FUNNEL FLOW =====
function Funnel() {
  const [active, setActive] = useState(2);
  const nodes = [
    { ico: <Icons.Mouse />, lbl: 'Ad Click', sub: '01' },
    { ico: <Icons.Globe />, lbl: 'Landing', sub: '02' },
    { ico: <Icons.Brain />, lbl: 'AI Qualify', sub: '03' },
    { ico: <Icons.Calendar />, lbl: 'Booking', sub: '04' },
    { ico: <Icons.Mail />, lbl: 'Multi-channel', sub: '05' },
    { ico: <Icons.Database />, lbl: 'CRM Sync', sub: '06' },
    { ico: <Icons.Pie />, lbl: 'Pipeline', sub: '07' },
  ];
  const detail = [
    { val: '< 11s response', desc: 'AI agents reply across SMS, WhatsApp, email and IG within seconds — 24/7.' },
    { val: '94 lead signals', desc: 'BANT + intent + persona scoring before a sales rep ever touches the lead.' },
    { val: 'Zero handoff loss', desc: 'Every event streams to your CRM with full attribution and conversation context.' },
  ];

  useEffect(() => {
    const id = setInterval(() => setActive(a => (a + 1) % 7), 2400);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="flow">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow"><Icons.Workflow size={12} /> System architecture</span>
          <h2>One flow. Seven layers. <span className="gradient-text">Zero leaks.</span></h2>
          <p>From the first click to closed-won, every signal is captured, qualified, and routed automatically — without a human in the loop until the lead is hot.</p>
        </div>

        <div className="funnel-canvas">
          <div className="funnel-grid">
            {nodes.map((n, i) => (
              <div
                key={i}
                className={`funnel-node ${i === active ? 'active' : ''}`}
                onMouseEnter={() => setActive(i)}
              >
                <div className="icon">{n.ico}</div>
                <div className="lbl">{n.lbl}</div>
                <div className="sub">{n.sub}</div>
                {i < 6 && <div className="flow-particle" style={{ animationDelay: `${i * 0.3}s` }} />}
              </div>
            ))}
          </div>

          <div className="funnel-detail">
            {detail.map((d, i) => (
              <div className="funnel-detail-card" key={i}>
                <div className="lbl">Layer 0{i + 1}</div>
                <div className="val">{d.val}</div>
                <div className="desc">{d.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Hero, Trust, VSL, Funnel });
