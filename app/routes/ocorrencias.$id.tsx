// app/routes/ocorrencias.$id.tsx
import type { LoaderFunctionArgs } from "@remix-run/node";
import { Form, useLoaderData, Link } from "@remix-run/react";
import { useEffect, useMemo, useState } from "react";
import { getSessionUser } from "~/utils/auth.client";
import {
  addCommentToOccurrence,
  getOccurrences,
  type Occurrence,
} from "~/utils/storage.client";

// Loader só passa o ID (string codificada na URL)
export const loader = async ({ params }: LoaderFunctionArgs) => {
  return { id: params.id ?? null };
};

export default function OcorrenciaDetalhe() {
  const { id } = useLoaderData<typeof loader>();
  const [occurrence, setOccurrence] = useState<Occurrence | null>(null);
  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    const decodedId = decodeURIComponent(id);
    const found = getOccurrences().find((o) => o.id === decodedId) || null;
    setOccurrence(found);
    setUser(getSessionUser());
  }, [id]);

  const handleCommentSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!occurrence || !user || !id) return;
    const formData = new FormData(event.currentTarget);
    const text = (formData.get("comment") as string)?.trim();
    if (!text) return;

    const decodedId = decodeURIComponent(id);
    addCommentToOccurrence(decodedId, user, text);
    setOccurrence((prev) =>
      prev ? { ...prev, comments: [...prev.comments, { author: user, text }] } : prev
    );
    (event.target as HTMLFormElement).reset();
  };

  // --------- estilos base (iguais ao mock) ---------
  const colors = {
    bg: "#d1fae5", // verde clarinho (fundo)
    white: "#ffffff",
    text: "#1c1c0d",
    text2: "#6c6c5f",
    border: "#e9e8ce",
    brand: "#f9f506",
    brandDark: "#1c1c1c",
    boChipBg: "#dcfce7",
    boChipText: "#166534",
  };

  const page: React.CSSProperties = {
    minHeight: "100svh",
    display: "flex",
    flexDirection: "column",
    background: colors.bg,
    color: colors.text,
  };

  const header: React.CSSProperties = {
    position: "sticky",
    top: 0,
    zIndex: 10,
    display: "grid",
    gridTemplateColumns: "40px 1fr 1fr 40px",
    alignItems: "center",
    gap: 8,
    background: colors.white,
    borderBottom: `1px solid ${colors.border}`,
    padding: "10px 14px",
  };

  const backBtn: React.CSSProperties = {
    gridColumn: "1 / 2",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: 32,
    height: 32,
    borderRadius: 8,
    color: colors.text,
    textDecoration: "none",
  };

  const logoWrap: React.CSSProperties = {
    gridColumn: "2 / 3",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: '100%',
    height: '100%'
  };

  const logo: React.CSSProperties = { maxHeight: 80, width: "auto" };

  const headerTitle: React.CSSProperties = {
    gridColumn: "3 / 4",
    justifySelf: "center",
    fontWeight: 800,
    fontSize: 16,
    color: colors.brandDark,
  };

  const main: React.CSSProperties = {
    flex: 1,
    padding: "16px",
    display: "flex",
    flexDirection: "column",
    gap: 16,
  };

  const card: React.CSSProperties = {
    background: colors.white,
    borderRadius: 12,
    boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
    padding: "18px 16px",
  };

  const title: React.CSSProperties = {
    fontSize: "clamp(18px, 2.4vw, 24px)",
    fontWeight: 800,
    margin: "0 0 10px",
  };

  const row: React.CSSProperties = {
    display: "flex",
    gap: 12,
    alignItems: "flex-start",
    margin: "10px 0",
  };

  const rowLabel: React.CSSProperties = {
    width: "25%",
    minWidth: 96,
    fontWeight: 700,
    color: colors.text,
  };

  const rowValue: React.CSSProperties = { flex: 1, color: colors.text2 };

  const boChip: React.CSSProperties = {
    display: "inline-block",
    background: colors.boChipBg,
    color: colors.boChipText,
    fontSize: 12,
    fontWeight: 700,
    padding: "6px 10px",
    borderRadius: 999,
  };

  const commentsHeader: React.CSSProperties = {
    fontSize: 18,
    fontWeight: 800,
    margin: 0,
    marginBottom: 10,
  };

  const commentItem: React.CSSProperties = {
    display: "flex",
    gap: 12,
    alignItems: "flex-start",
    padding: "12px 0",
    borderTop: `1px solid ${colors.border}`,
  };

  const avatar: React.CSSProperties = {
    width: 40,
    height: 40,
    borderRadius: "50%",
    background: "#e5e7eb",
    color: colors.brandDark,
    fontSize: 14,
    fontWeight: 800,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  };

  const commentNameLine: React.CSSProperties = {
    display: "flex",
    alignItems: "baseline",
    gap: 8,
    marginBottom: 4,
  };

  const commentName: React.CSSProperties = { fontWeight: 800 };
  const commentTime: React.CSSProperties = { fontSize: 12, color: colors.text2 };

  const footer: React.CSSProperties = {
    position: "sticky",
    bottom: 0,
    zIndex: 10,
    background: colors.white,
    borderTop: `1px solid ${colors.border}`,
    padding: "10px 14px calc(12px + env(safe-area-inset-bottom))",
  };

  const composer: React.CSSProperties = {
    display: "flex",
    gap: 10,
    alignItems: "center",
  };

  const textarea: React.CSSProperties = {
    flex: 1,
    borderRadius: 12,
    border: `1px solid #d1d5db`,
    padding: "12px 14px",
    minHeight: 40,
    resize: "none" as const,
    outline: "none",
  };

  const sendBtn: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    background: "#22c55e",
    color: "#fff",
    fontWeight: 800,
    padding: "10px 16px",
    borderRadius: 10,
    border: "none",
    cursor: "pointer",
  };

  const initials = useMemo(() => {
    // gera iniciais para avatares improvisados
    const get = (name: string) =>
      name
        .split(/\s+/)
        .slice(0, 2)
        .map((n) => n[0]?.toUpperCase() ?? "")
        .join("");
    return (name: string) => get(name || "U");
  }, []);

  if (!occurrence) {
    return (
      <div style={page}>
        <div style={header}>
          <Link to="/ocorrencias" style={backBtn} aria-label="Voltar">
            ←
          </Link>
          <div style={logoWrap}>
            <img src="/images/LogoSemFundo.png" alt="WalkSafe Logo" style={logo} />
          </div>
          <div style={headerTitle}>Detalhe da Ocorrência</div>
        </div>

        <main style={main}>
          <div style={card}>
            <p style={{ margin: 0 }}>Ocorrência não encontrada.</p>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div style={page}>
      {/* Header fixo */}
      <div style={header}>
        <Link to="/ocorrencias" style={backBtn} aria-label="Voltar">
          {/* seta simples para manter o visual do mock */}
          <span style={{ fontSize: 18, lineHeight: 1 }}>←</span>
        </Link>

        <div style={logoWrap}>
          <img src="/images/LogoSemFundo.png" alt="WalkSafe Logo" style={logo} />
        </div>

        <div style={headerTitle}>Detalhe da Ocorrência</div>
        <div /> {/* espaçador à direita */}
      </div>

      {/* Conteúdo */}
      <main style={main}>
        {/* Card principal com dados */}
        <section style={card}>
          <h2 style={title}>
            {occurrence.crime === "Roubo" ? "Roubo de celular" : occurrence.crime}
          </h2>

          <div>
            <div style={row}>
              <div style={rowLabel}>Crime</div>
              <div style={rowValue}>{occurrence.crime}</div>
            </div>
            <div style={row}>
              <div style={rowLabel}>Local</div>
              <div style={rowValue}>{occurrence.local}</div>
            </div>
            <div style={row}>
              <div style={rowLabel}>Data</div>
              <div style={rowValue}>
                {new Date(occurrence.data).toLocaleString("pt-BR", {
                  timeZone: "UTC",
                })}
              </div>
            </div>
            <div style={row}>
              <div style={rowLabel}>Descrição</div>
              <div style={rowValue}>{occurrence.descricao}</div>
            </div>
          </div>

          {occurrence.numeroBo && (
            <div style={{ marginTop: 12 }}>
              <span style={boChip}>BO: {occurrence.numeroBo}</span>
            </div>
          )}
        </section>

        {/* Card de comentários */}
        <section style={card}>
          <h3 style={commentsHeader}>Comentários</h3>

          {/* Lista */}
          <div>
            {occurrence.comments.length === 0 && (
              <p style={{ color: colors.text2, marginTop: 8 }}>
                Ainda não há comentários.
              </p>
            )}

            {occurrence.comments.map((c, i) => (
              <div key={i} style={commentItem}>
                <div style={avatar}>{initials(c.author)}</div>
                <div style={{ flex: 1 }}>
                  <div style={commentNameLine}>
                    <span style={commentName}>{c.author}</span>
                    {/* tempo “fake” só para compor o layout */}
                    <span style={commentTime}>{i === 0 ? "2h atrás" : "1h atrás"}</span>
                  </div>
                  <div style={{ color: colors.text2, fontSize: 14 }}>{c.text}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Composer fixo no rodapé */}
      <footer style={footer}>
        <Form method="post" onSubmit={handleCommentSubmit} style={composer}>
          <textarea
            name="comment"
            placeholder={user ? "Adicionar comentário..." : "Faça login para comentar"}
            disabled={!user}
            rows={1}
            style={textarea}
          />
        <button type="submit" style={sendBtn} disabled={!user}>
            <span>Enviar</span>
            <svg width="18" height="18" viewBox="0 0 256 256" fill="currentColor" aria-hidden>
              <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"/>
            </svg>
          </button>
        </Form>
      </footer>
    </div>
  );
}
