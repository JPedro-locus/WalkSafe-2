// app/routes/ocorrencias._index.tsx
import { Link } from "@remix-run/react";
import { useEffect, useMemo, useState } from "react";
import { BottomNav } from "~/components/BottomNav";
import { getOccurrences, type Occurrence } from "~/utils/storage.client";

export default function OcorrenciasLista() {
  const [occurrences, setOccurrences] = useState<Occurrence[]>([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    setOccurrences(getOccurrences());
  }, []);

  const filtered = useMemo(() => {
    if (!query.trim()) return occurrences;
    const q = query.toLowerCase();
    return occurrences.filter(
      (o) =>
        o.local.toLowerCase().includes(q) ||
        o.crime.toLowerCase().includes(q) ||
        o.descricao.toLowerCase().includes(q)
    );
  }, [occurrences, query]);

  // Paleta e helpers
  const NEUTRAL_LIGHT = "#FCFCF8";
  const NEUTRAL_MEDIUM = "#F4F4E6";
  const NEUTRAL_DARK = "#1c1c0d";
  const NEUTRAL_GRAY = "#9e9d47";
  const BRAND_GREEN = "#d1fae5";
  const BRAND_PEACH = "#f9d6b4";

  const page: React.CSSProperties = {
    minHeight: "100svh",
    background: NEUTRAL_LIGHT,
    display: "flex",
    flexDirection: "column",
  };

  const main: React.CSSProperties = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    paddingBottom: "calc(96px + env(safe-area-inset-bottom))", // espaço pra BottomNav
  };

  const stickyHeader: React.CSSProperties = {
    position: "sticky",
    top: 0,
    zIndex: 10,
    backdropFilter: "blur(6px)",
    background: "rgba(255,255,255,0.85)",
  };

  const headerRow: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: "14px 16px 10px",
  };

  const title: React.CSSProperties = {
    flex: 1,
    textAlign: "center",
    fontWeight: 800,
    color: NEUTRAL_DARK,
    fontSize: 18,
  };

  const searchWrap: React.CSSProperties = {
    padding: "0 16px 14px",
  };

  const searchBox: React.CSSProperties = {
    width: "100%",
    border: "none",
    outline: "none",
    background: NEUTRAL_MEDIUM,
    borderRadius: 999,
    padding: "12px 16px 12px 40px",
    fontSize: 16,
    color: NEUTRAL_DARK,
  };

  const searchIconWrap: React.CSSProperties = {
    position: "relative",
  };

  const searchIcon: React.CSSProperties = {
    position: "absolute",
    left: 28,
    top: "50%",
    transform: "translate(-50%, -50%)",
    color: NEUTRAL_GRAY,
  };

  const locationBtn: React.CSSProperties = {
    marginTop: 12,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    background: BRAND_GREEN,
    borderRadius: 999,
    padding: "12px 16px",
    fontWeight: 700,
    color: NEUTRAL_DARK,
    border: "none",
  };

  const listSection: React.CSSProperties = {
    padding: 16,
    display: "grid",
    gap: 16,
  };

  const card: React.CSSProperties = {
    background: "#fff",
    borderRadius: 12,
    boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
    overflow: "hidden",
  };

  const cardBody: React.CSSProperties = {
    padding: 16,
  };

  const cardTitle: React.CSSProperties = {
    fontSize: 18,
    fontWeight: 800,
    color: NEUTRAL_DARK,
    margin: 0,
  };

  const meta: React.CSSProperties = {
    fontSize: 13,
    color: NEUTRAL_GRAY,
    marginTop: 4,
  };

  const desc: React.CSSProperties = {
    marginTop: 8,
    color: NEUTRAL_DARK,
    lineHeight: 1.5,
  };

  const cardFooter: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderTop: `1px solid ${NEUTRAL_MEDIUM}`,
    background: "rgba(209,250,229,0.3)",
    padding: "10px 16px",
  };

  const boChip: React.CSSProperties = {
    display: "inline-block",
    background: BRAND_PEACH,
    color: NEUTRAL_DARK,
    fontWeight: 800,
    fontSize: 12,
    padding: "6px 10px",
    borderRadius: 8,
  };

  const commentsInfo: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: 6,
    color: NEUTRAL_GRAY,
    fontSize: 14,
  };

  return (
    <div style={page}>
      <main style={main}>
        {/* HEADER */}
        <header style={stickyHeader}>
          <div style={headerRow}>
            <img
              src="/images/LogoSemFundo.png"
              alt="WalkSafe Logo"
              style={{ height: 100, width: "auto" }}
            />
            <h1 style={title}>Ocorrências Recentes</h1>
          </div>

          <div style={searchWrap}>
            <div style={searchIconWrap}>
              <span style={searchIcon}>
                {/* lupa */}
                <svg width="18" height="18" viewBox="0 0 256 256" fill="currentColor">
                  <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
                </svg>
              </span>
              <input
                placeholder="Buscar por rua, bairro ou cidade..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                style={searchBox}
                type="search"
              />
            </div>

            <button type="button" style={locationBtn}>
              <svg width="18" height="18" viewBox="0 0 256 256" fill="currentColor">
                <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm0-144a88.1,88.1,0,0,0-88,88c0,42.28,24.32,83.2,56.78,114.83a8,8,0,0,0,11.23,1.38,8,8,0,0,0,1.38-11.23C85.59,203.46,64,159.25,64,104a64,64,0,1,1,128,0c0,55.25-21.59,99.46-45.39,123a8,8,0,0,0,12.61,10.05C187.68,211.2,216,170.28,216,104A88.1,88.1,0,0,0,128,16Z" />
              </svg>
              <span>Usar minha localização atual</span>
            </button>
          </div>
        </header>

        {/* LISTA */}
        <section style={listSection}>
          {filtered.map((occ) => {
            const href = `/ocorrencias/${encodeURIComponent(occ.id)}`;
            const data = new Date(occ.data).toLocaleDateString("pt-BR", { timeZone: "UTC" });
            const metaLine = `${data} - ${occ.local}`;
            const boLabel =
              occ.numeroBo && occ.numeroBo.trim() ? `BO: ${occ.numeroBo}` : occ.hasBo ? "BO informado" : "";

            return (
              <article key={occ.id} style={card}>
                <Link to={href} style={{ color: "inherit", textDecoration: "none" }}>
                  <div style={cardBody}>
                    <h3 style={cardTitle}>{occ.crime}</h3>
                    <p style={meta}>{metaLine}</p>
                    <p style={desc}>{occ.descricao}</p>
                  </div>
                </Link>

                <div style={cardFooter}>
                  <div>
                    {boLabel && <span style={boChip}>{boLabel}</span>}
                  </div>
                  <div style={commentsInfo}>
                    <svg width="16" height="16" viewBox="0 0 256 256" fill="currentColor">
                      <path d="M216,48H40A16,16,0,0,0,24,64V176a16,16,0,0,0,16,16h40v32a8,8,0,0,0,13.66,5.66L144,192h72a16,16,0,0,0,16-16V64A16,16,0,0,0,216,48ZM200,176H136a8,8,0,0,0-5.66,2.34L112,196.69V184a8,8,0,0,0-8-8H40V64H216l.06,112Z" />
                    </svg>
                    <span>{occ.comments.length} comentário(s)</span>
                  </div>
                </div>
              </article>
            );
          })}

          {filtered.length === 0 && (
            <p style={{ color: NEUTRAL_GRAY }}>Nenhuma ocorrência encontrada.</p>
          )}
        </section>
      </main>

      {/* Bottom nav fixa (igual às outras telas) */}
      <BottomNav />
    </div>
  );
}
