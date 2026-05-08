// Live dashboard, testimonials, final CTA, footer
const { useState: useState3, useEffect: useEffect3 } = React;

function LiveDashboard() {
  const [tick, setTick] = useState3(0);
  useEffect3(() => {
    const id = setInterval(() => setTick(t => t + 1), 2000);
    return () => clearInterval(id);
  }, []);

  const leads = [
    { name: 'Sarah Chen', co: 'Helix Coaching', src: 'Meta Ads', score: 94, status: 'booked', time: '2m' },
    { name: 'Marcus Reid', co: 'Forge Studio', src: 'Organic', score: 78, status: 'qualified', time: '6m' },
    { name: 'Priya Anand', co: 'Beacon HQ', src: 'WhatsApp', score: 88, status: 'booked', time: '11m' },
    { name: 'Tomás García', co: 'Crescent Labs', src: 'Email', score: 62, status: 'followup', time: '18m' },
    { name: 'Amelia Vance', co: 'Origin Fit', src: 'Meta Ads', score: 91, status: 'booked', time: '24m' },
    { name: 'Daniel Kwon', co: 'Atlas Group', src: 'IG DM', score: 71, status: 'followup', time: '31m' },
  ];

  const sources = [
    { n: 'Meta Ads', v: 42 }, { n: 'Organic Search', v: 24 }, { n: 'Email', v: 18 }, { n: 'WhatsApp', v: 11 }, { n: 'IG DM', v: 5 },
  ];

  return (
    <section id="dashboard">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow"><Icons.Eye size={12} /> Live operator view</span>
          <h2>Watch your pipeline fill <span className="gradient-text">in real time.</span></h2>
          <p>Every lead, every conversation, every booking — streamed to a dashboard that actually tells you what's working.</p>
        </div>

        <div className="bigdash">
          <div className="bigdash-chrome">
            <div className="dots"><span /><span /><span /></div>
            <div className="url">app.cadence.ai/workspace/helix-coaching/leads</div>
          </div>
          <div className="bigdash-body">
            <div className="bd-sidebar">
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '0 8px 14px', borderBottom: '1px solid var(--line-soft)' }}>
                <div className="brand-mark" style={{ width: 22, height: 22 }}><Icons.Brand /></div>
                <span style={{ fontSize: 13, fontWeight: 500, color: 'var(--fg-0)' }}>Helix Coaching</span>
              </div>
              <div className="bd-side-section">Workspace</div>
              {[
                { ico: <Icons.Pie />, l: 'Overview' },
                { ico: <Icons.Inbox />, l: 'Leads', active: true },
                { ico: <Icons.Calendar />, l: 'Bookings' },
                { ico: <Icons.Workflow />, l: 'Cadences' },
              ].map((n, i) => (
                <div key={i} className={`bd-nav-item ${n.active ? 'active' : ''}`}>{n.ico}{n.l}</div>
              ))}
              <div className="bd-side-section">Intelligence</div>
              {[
                { ico: <Icons.Brain />, l: 'AI Insights' },
                { ico: <Icons.Activity />, l: 'Analytics' },
                { ico: <Icons.Compass />, l: 'Experiments' },
              ].map((n, i) => (
                <div key={i} className="bd-nav-item">{n.ico}{n.l}</div>
              ))}
              <div className="bd-side-section">Settings</div>
              {[
                { ico: <Icons.Plug />, l: 'Integrations' },
                { ico: <Icons.Settings />, l: 'Team' },
              ].map((n, i) => (
                <div key={i} className="bd-nav-item">{n.ico}{n.l}</div>
              ))}
            </div>

            <div className="bd-main">
              <div className="bd-main-head">
                <div>
                  <h3>Leads · This week</h3>
                  <div className="meta">Updated {tick % 60}s ago · 6 active conversations</div>
                </div>
                <div style={{ display: 'flex', gap: 8 }}>
                  <button className="btn btn-ghost" style={{ padding: '8px 12px', fontSize: 12 }}><Icons.Filter size={12} /> Filter</button>
                  <button className="btn btn-primary" style={{ padding: '8px 12px', fontSize: 12 }}>Export <Icons.ArrowRight size={12} /></button>
                </div>
              </div>

              <div className="bd-tiles">
                {[
                  { l: 'New leads', v: '348', d: '+12% wow' },
                  { l: 'Qualified', v: '127', d: '+34% wow' },
                  { l: 'Booked', v: '89', d: '+22% wow' },
                  { l: 'Avg. score', v: '74', d: '+4 pts', dn: false },
                ].map((t, i) => (
                  <div className="bd-tile" key={i}>
                    <div className="lbl">{t.l}</div>
                    <div className="val">{t.v}</div>
                    <div className="delta">↑ {t.d}</div>
                  </div>
                ))}
              </div>

              <div className="bd-row">
                <div className="bd-panel">
                  <h4>Recent leads <span className="hint">live · auto-refresh</span></h4>
                  <table className="bd-table">
                    <thead>
                      <tr><th>Lead</th><th>Source</th><th>Score</th><th>Status</th><th>When</th></tr>
                    </thead>
                    <tbody>
                      {leads.map((l, i) => (
                        <tr key={i}>
                          <td>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                              <div style={{ width: 24, height: 24, borderRadius: '50%', background: `linear-gradient(135deg, oklch(0.7 0.13 ${i*60}) 0%, oklch(0.4 0.12 ${i*60+30}) 100%)` }} />
                              <div>
                                <div style={{ color: 'var(--fg-0)' }}>{l.name}</div>
                                <div style={{ fontSize: 10, color: 'var(--fg-3)' }}>{l.co}</div>
                              </div>
                            </div>
                          </td>
                          <td style={{ color: 'var(--fg-2)', fontFamily: 'var(--font-mono)', fontSize: 11 }}>{l.src}</td>
                          <td><span style={{ color: l.score > 80 ? 'var(--accent-green)' : l.score > 65 ? 'var(--accent-warm)' : 'var(--fg-2)', fontFamily: 'var(--font-mono)' }}>{l.score}</span></td>
                          <td><span className={`bd-status ${l.status}`}>{l.status}</span></td>
                          <td style={{ color: 'var(--fg-3)', fontFamily: 'var(--font-mono)', fontSize: 11 }}>{l.time} ago</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="bd-panel">
                  <h4>Source mix <span className="hint">7 days</span></h4>
                  {sources.map((s, i) => (
                    <div className="bd-source" key={i}>
                      <span style={{ color: 'var(--fg-1)', minWidth: 100 }}>{s.n}</span>
                      <span className="bd-bar"><span style={{ width: `${s.v * 2}%` }} /></span>
                      <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--fg-2)', fontSize: 11, minWidth: 24, textAlign: 'right' }}>{s.v}%</span>
                    </div>
                  ))}
                  <div style={{ marginTop: 16, padding: 14, background: 'var(--grad-soft)', border: '1px solid oklch(0.78 0.16 250 / 0.3)', borderRadius: 10 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                      <Icons.Sparkle size={14} />
                      <span style={{ fontSize: 11, color: 'var(--fg-0)', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.06em' }}>AI Insight</span>
                    </div>
                    <div style={{ fontSize: 12, color: 'var(--fg-1)', lineHeight: 1.5 }}>
                      Meta CPL dropped 18% this week. Reallocate $3.2k from Email to capture +24 booked calls.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const t = [
    {
      quote: '"We replaced a 6-person SDR team in 9 days. Bookings tripled, CAC dropped 64%, and our reps only talk to leads that are ready to buy."',
      name: 'Mira Kowalski',
      role: 'Founder, Northwind Coaching',
      h: 260,
      stats: [{ v: '3.1×', l: 'Bookings' }, { v: '−64%', l: 'CAC' }],
      featured: true,
    },
    {
      quote: '"It books calls overnight. I\'m sleeping in Tokyo and waking up to 12 confirmed strategy sessions. This thing prints."',
      name: 'Dan Reyes',
      role: 'CEO, Forge & Co',
      h: 30,
      stats: [{ v: '12/night', l: 'Booked' }, { v: '4.2×', l: 'Pipeline' }],
    },
    {
      quote: '"Show rate went from 32% to 81%. The follow-up cadences are doing what 3 humans couldn\'t. I genuinely don\'t know how it\'s this good."',
      name: 'Aisha Bello',
      role: 'Growth Lead, Beacon HQ',
      h: 320,
      stats: [{ v: '81%', l: 'Show rate' }, { v: '+247', l: 'Calls/mo' }],
    },
  ];
  return (
    <section id="testimonials">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow"><Icons.Quote size={12} /> What operators say</span>
          <h2>"It paid for itself <span className="gradient-text">in the first 72 hours."</span></h2>
          <p>Real numbers from real teams running Cadence in production today.</p>
        </div>
        <div className="testi-grid">
          {t.map((c, i) => (
            <div key={i} className={`testi-card ${c.featured ? 'featured' : ''}`}>
              <div className="testi-quote">{c.quote}</div>
              <div className="testi-author">
                <div className="testi-avatar" style={{ '--h': c.h }} />
                <div className="testi-meta">
                  <div className="name">{c.name}</div>
                  <div className="role">{c.role}</div>
                </div>
              </div>
              <div className="pull">
                {c.stats.map((s, j) => (
                  <div className="pull-stat" key={j}>
                    <div className="v">{s.v}</div>
                    <div className="l">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section style={{ padding: '40px 0' }}>
      <div className="container">
        <div className="final-cta">
          <span className="eyebrow"><span className="dot" />Q2 cohort · 12 seats remaining</span>
          <h2 style={{ marginTop: 22 }}>Stop losing leads to <span className="gradient-text">slow follow-ups.</span></h2>
          <p>Spin up your AI appointment setter in under 6 minutes. First 14 days free. Cancel any time. No card required.</p>
          <div className="final-cta-row">
            <button className="btn btn-primary btn-lg">Start free trial <Icons.ArrowRight size={16} /></button>
            <button className="btn btn-ghost btn-lg">Talk to founders</button>
          </div>
          <div className="final-cta-meta">
            <span><Icons.Check size={14} className="check" /> Free 14-day trial</span>
            <span><Icons.Check size={14} className="check" /> 6-min setup</span>
            <span><Icons.Check size={14} className="check" /> SOC 2 · GDPR</span>
            <span><Icons.Check size={14} className="check" /> Cancel any time</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="brand" style={{ fontSize: 20 }}>
              <div className="brand-mark"><Icons.Brand /></div>
              Cadence <span style={{ color: 'var(--fg-3)', fontWeight: 400 }}>AI</span>
            </div>
            <p style={{ fontSize: 14, color: 'var(--fg-2)', marginTop: 16, maxWidth: 320, lineHeight: 1.6 }}>
              The AI appointment setter for growth-led teams. Qualify, follow up, and book — on autopilot.
            </p>
            <div style={{ display: 'flex', gap: 10, marginTop: 24 }}>
              {['X', 'in', 'YT', 'GH'].map((s, i) => (
                <div key={i} style={{ width: 32, height: 32, borderRadius: 8, background: 'oklch(0.2 0.018 265)', border: '1px solid var(--line)', display: 'grid', placeItems: 'center', fontSize: 11, fontFamily: 'var(--font-mono)', color: 'var(--fg-2)', cursor: 'pointer' }}>{s}</div>
              ))}
            </div>
          </div>
          <div className="footer-col">
            <h5>Product</h5>
            <ul>
              <li><a>AI Setter</a></li>
              <li><a>Voice Agent</a></li>
              <li><a>Cadences</a></li>
              <li><a>Analytics</a></li>
              <li><a>Integrations</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Resources</h5>
            <ul>
              <li><a>Customer stories</a></li>
              <li><a>Playbooks</a></li>
              <li><a>API docs</a></li>
              <li><a>Changelog</a></li>
              <li><a>Status</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Company</h5>
            <ul>
              <li><a>About</a></li>
              <li><a>Careers <span style={{ color: 'var(--accent-green)', fontSize: 11, marginLeft: 4 }}>● 8</span></a></li>
              <li><a>Security</a></li>
              <li><a>Privacy</a></li>
              <li><a>Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Cadence AI · All rights reserved</span>
          <span>SOC 2 Type II · GDPR · HIPAA</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { LiveDashboard, Testimonials, FinalCTA, Footer });
