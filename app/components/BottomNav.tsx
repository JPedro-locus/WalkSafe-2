// app/components/BottomNav.tsx
import { NavLink } from "@remix-run/react";

export function BottomNav() {
  const wrap: React.CSSProperties = {
    position: "fixed",               // <- era sticky
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    background: "#FCFCF8",
    WebkitBackdropFilter: "blur(6px)",
    backdropFilter: "blur(6px)",
    zIndex: 50,                      // acima das ondas
  };

  const bar: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-around",
    borderTop: "1px solid rgba(229,231,235,0.5)",
    padding: "8px 0",
  };

  const link: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 4,
    color: "#6b7280",
    textDecoration: "none",
    fontSize: 12,
    fontWeight: 500,
  };

  const active: React.CSSProperties = { color: "#059669", fontWeight: 700 };

  return (
    <footer style={wrap}>
      <div style={bar}>
        <NavLink to="/" style={({ isActive }) => (isActive ? { ...link, ...active } : link)}>
          <svg width="24" height="24" viewBox="0 0 256 256" fill="currentColor"><path d="M218.83,103.77l-80-75.48a1.14,1.14,0,0,1-.11-.11,16,16,0,0,0-21.53,0l-.11.11L37.17,103.77A16,16,0,0,0,32,115.55V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V160h32v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V115.55A16,16,0,0,0,218.83,103.77Z"/></svg>
          <span>Home</span>
        </NavLink>
        <NavLink to="/relatar" style={({ isActive }) => (isActive ? { ...link, ...active } : link)}>
          <svg width="24" height="24" viewBox="0 0 256 256" fill="currentColor"><path d="M224,48V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM136,120h32a8,8,0,0,0,0-16H136V72a8,8,0,0,0-16,0v32H88a8,8,0,0,0,0,16h32v32a8,8,0,0,0,16,0Z"/></svg>
          <span>Relatar</span>
        </NavLink>
        <NavLink to="/ocorrencias" style={({ isActive }) => (isActive ? { ...link, ...active } : link)}>
          <svg width="24" height="24" viewBox="0 0 256 256" fill="currentColor"><path d="M128,16a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,192c-15.63-12.72-64-59.54-64-104a64,64,0,1,1,128,0C192,148.46,143.63,195.28,128,208Zm0-120a24,24,0,1,1-24,24A24,24,0,0,1,128,88Z"/></svg>
          <span>Ocorrências</span>
        </NavLink>
      </div>
      <div style={{ height: "env(safe-area-inset-bottom)", background: "#FCFCF8" }} />
    </footer>
  );
}
