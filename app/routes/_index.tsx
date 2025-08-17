// app/routes/_index.tsx
import { Link } from "@remix-run/react";
import { BottomNav } from "~/components/BottomNav";

export default function Index() {
  const brandGreen = "#d1fae5";
  const brandBlack = "#1c1c1c";
  const brandWhite = "#ffffff";

  // Seção full-bleed ocupando 100% da viewport (mobile-safe)
  const fullBleed: React.CSSProperties = {
    position: "relative",
    left: "50%",
    right: "50%",
    marginLeft: "-50vw",
    marginRight: "-50vw",
    width: "100vw",
    minHeight: "100svh",
    background: brandGreen,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    overflow: "hidden",
  };

  const main: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",

    // ocupa toda a altura menos a bottom-nav
    flex: 1,
    justifyContent: "center",

    padding: "clamp(24px, 6vh, 64px) 16px",
    zIndex: 10,
  };

  const logoCard: React.CSSProperties = {
    background: brandWhite,
    padding: 0,
    borderRadius: 16,
    boxShadow: "0 10px 20px rgba(0,0,0,0.10)",
    transform: "rotate(-3deg)",
  };

  const logoImg: React.CSSProperties = {
    maxHeight: "clamp(72px, 12vw, 140px)",
    width: "auto",
    display: "block",
  };

  const taglineCard: React.CSSProperties = {
    marginTop: "clamp(16px, 3vh, 32px)",
    background: brandWhite,
    padding: "clamp(12px, 2vh, 20px) clamp(12px, 3vw, 20px)",
    borderRadius: 16,
    boxShadow: "0 8px 16px rgba(0,0,0,0.08)",
    width: "min(92vw, 420px)",
    fontSize: "clamp(14px, 2.6vw, 18px)",
    fontWeight: 600,
    color: brandBlack,
  };

  const cta: React.CSSProperties = {
    marginTop: "clamp(16px, 3vh, 24px)",
    display: "inline-flex",
    alignItems: "center",
    gap: 12,
    background: brandBlack,
    color: "#fff",
    padding: "clamp(10px, 2.2vh, 14px) clamp(16px, 4vw, 22px)",
    borderRadius: 12,
    fontWeight: 800,
    textDecoration: "none",
    boxShadow: "0 10px 20px rgba(0,0,0,0.25)",
    fontSize: "clamp(14px, 2.8vw, 16px)",
  };

  return (
    <section style={fullBleed}>
      <main style={main}>
        {/* Logo em "card" levemente girado */}
        <div style={logoCard}>
          <img
            src="/images/LogoSemFundo.png"
            alt="WalkSafe Logo"
            style={logoImg}
          />
        </div>

        {/* Tagline */}
        <div style={taglineCard}>
          <p style={{ margin: 0 }}>Uma cidade mais segura começa com você!</p>
        </div>

        {/* CTA */}
        <Link to="/relatar" style={cta}>
          <span>Relatar Ocorrência</span>
          <svg width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" fill="none" aria-hidden>
            <path d="M13 7l5 5-5 5M6 12h12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </main>

      {/* Ondas do fundo (responsivas) */}
      <div
        style={{
          position: "absolute",
          left: 0,
          bottom: 0,
          width: "100%",
          height: "28vh",
          minHeight: 140,
          maxHeight: 220,
          zIndex: 0,
          overflow: "hidden",
        }}
      >
        <style>{`
          @keyframes wave-green { 0% { transform: translateX(-50%) rotate(0deg); } 100% { transform: translateX(-50%) rotate(360deg); } }
          @keyframes wave-black { 0% { transform: translateX(-50%) rotate(0deg); } 100% { transform: translateX(-50%) rotate(-360deg); } }
        `}</style>
        <div
          style={{
            position: "absolute",
            left: "50%",
            width: "200%",
            height: "200%",
            borderRadius: "45%",
            background: "rgba(28,28,28,0.6)",
            bottom: "-105%",
            transform: "translateX(-50%)",
            animation: "wave-black 10s linear infinite",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: "50%",
            width: "200%",
            height: "200%",
            borderRadius: "45%",
            background: "rgba(209,250,229,0.6)",
            bottom: "-100%",
            transform: "translateX(-50%)",
            animation: "wave-green 8s linear infinite",
          }}
        />
      </div>

      {/* Bottom nav fixa (100% largura) */}
      <BottomNav />
    </section>
  );
}
