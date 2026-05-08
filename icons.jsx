// Icon library — Lucide-style stroke icons
const Ic = ({ d, viewBox = "0 0 24 24", size = 20, ...props }) => (
  <svg viewBox={viewBox} width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
    {d}
  </svg>
);

const Icons = {
  Brand: (p) => <svg viewBox="0 0 24 24" {...p} fill="none"><path d="M5 12 L11 6 L11 18 Z" fill="white" opacity="0.95"/><path d="M13 12 L19 6 L19 18 Z" fill="white" opacity="0.6"/></svg>,
  Sparkle: (p) => <Ic {...p} d={<><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"/></>} />,
  Bolt: (p) => <Ic {...p} d={<path d="M13 2 L4 14 H11 L10 22 L20 10 H13 Z"/>} />,
  Calendar: (p) => <Ic {...p} d={<><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></>} />,
  Phone: (p) => <Ic {...p} d={<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>} />,
  Chat: (p) => <Ic {...p} d={<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>} />,
  Mail: (p) => <Ic {...p} d={<><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/></>} />,
  Users: (p) => <Ic {...p} d={<><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></>} />,
  Target: (p) => <Ic {...p} d={<><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></>} />,
  Brain: (p) => <Ic {...p} d={<path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24A2.5 2.5 0 0 1 7.5 4 2.5 2.5 0 0 1 9.5 2zM14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24A2.5 2.5 0 0 0 16.5 4 2.5 2.5 0 0 0 14.5 2z"/>} />,
  Workflow: (p) => <Ic {...p} d={<><rect x="3" y="3" width="6" height="6" rx="1"/><rect x="15" y="15" width="6" height="6" rx="1"/><path d="M9 6h6a3 3 0 0 1 3 3v6"/></>} />,
  Plug: (p) => <Ic {...p} d={<><path d="M9 2v6M15 2v6M5 8h14v3a7 7 0 0 1-7 7 7 7 0 0 1-7-7zM12 18v4"/></>} />,
  Code: (p) => <Ic {...p} d={<><path d="m16 18 6-6-6-6M8 6l-6 6 6 6"/></>} />,
  Server: (p) => <Ic {...p} d={<><rect x="2" y="4" width="20" height="6" rx="1"/><rect x="2" y="14" width="20" height="6" rx="1"/><path d="M6 7h.01M6 17h.01"/></>} />,
  Globe: (p) => <Ic {...p} d={<><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></>} />,
  Shield: (p) => <Ic {...p} d={<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>} />,
  Zap: (p) => <Ic {...p} d={<path d="M13 2 L3 14h7l-1 8 11-12h-7z"/>} />,
  Activity: (p) => <Ic {...p} d={<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>} />,
  Filter: (p) => <Ic {...p} d={<path d="M22 3H2l8 9.46V19l4 2v-8.54z"/>} />,
  Play: (p) => <Ic {...p} d={<path d="M5 3 L19 12 L5 21 Z"/>} fill="currentColor" />,
  ArrowRight: (p) => <Ic {...p} d={<><path d="M5 12h14M12 5l7 7-7 7"/></>} />,
  Check: (p) => <Ic {...p} d={<path d="M20 6 9 17l-5-5"/>} />,
  Trend: (p) => <Ic {...p} d={<><path d="M22 7L13.5 15.5 8.5 10.5 2 17"/><path d="M16 7h6v6"/></>} />,
  Mouse: (p) => <Ic {...p} d={<><rect x="6" y="3" width="12" height="18" rx="6"/><path d="M12 7v4"/></>} />,
  Card: (p) => <Ic {...p} d={<><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20M6 15h2"/></>} />,
  Database: (p) => <Ic {...p} d={<><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></>} />,
  Layers: (p) => <Ic {...p} d={<><path d="M12 2 2 7l10 5 10-5z"/><path d="M2 17l10 5 10-5M2 12l10 5 10-5"/></>} />,
  Compass: (p) => <Ic {...p} d={<><circle cx="12" cy="12" r="10"/><path d="m16.24 7.76-2.12 6.36-6.36 2.12 2.12-6.36z"/></>} />,
  Lock: (p) => <Ic {...p} d={<><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></>} />,
  Eye: (p) => <Ic {...p} d={<><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></>} />,
  Quote: (p) => <Ic {...p} d={<path d="M3 21c3-2 5-5 5-9V3H3v9h4M14 21c3-2 5-5 5-9V3h-5v9h4"/>} />,
  Arrow: (p) => <Ic {...p} d={<path d="M5 12h14M12 5l7 7-7 7"/>} />,
  Discord: () => null,
  Star: (p) => <Ic {...p} d={<path d="M12 2 15.09 8.26 22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z"/>} fill="currentColor" />,
  Settings: (p) => <Ic {...p} d={<><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></>} />,
  Inbox: (p) => <Ic {...p} d={<><path d="M22 12h-6l-2 3h-4l-2-3H2"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></>} />,
  Pie: (p) => <Ic {...p} d={<><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></>} />,
  Mic: (p) => <Ic {...p} d={<><rect x="9" y="2" width="6" height="13" rx="3"/><path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v3"/></>} />,
};

window.Icons = Icons;
