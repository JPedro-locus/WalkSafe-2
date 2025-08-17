// app/routes/relatar.tsx
import { Form, useNavigate } from "@remix-run/react";
import { useEffect, useState } from "react";
import { getSessionUser } from "~/utils/auth.client";
import { saveOccurrence, type Occurrence } from "~/utils/storage.client";
import { BottomNav } from "~/components/BottomNav";

type FormDataShape = {
  local: string;
  data: string;        // YYYY-MM-DDTHH:mm (datetime-local)
  crime: string;
  descricao: string;
  numeroBo?: string;
};

const crimeOptions = ["Roubo", "Furto", "Assédio", "Agressão", "Outro"];

export default function RelatarOcorrencia() {
  const navigate = useNavigate();
  const [form, setForm] = useState<FormDataShape>({
    local: "",
    data: "",
    crime: "",
    descricao: "",
    numeroBo: "",
  });
  const [errors, setErrors] = useState<string[]>([]);

  useEffect(() => {
    if (!getSessionUser()) navigate("/login?redirectTo=/relatar");
  }, [navigate]);

  const brandBg = "#F3F6F4";  // cinza clarinho do app
  const panelBg = "#FCFCF8";  // off-white do painel de conteúdo
  const brandText = "#1c1c1c";
  const brandMuted = "#6b7280";
  const brandMint = "#E6FFF4";
  const brandBlack = "#1c1c1c";

  const page: React.CSSProperties = {
    minHeight: "100svh",
    background: brandBg,
    color: brandText,
    display: "flex",
    flexDirection: "column",
  };

  // 🔑 LARGURA TOTAL + cresce até a BottomNav
  const container: React.CSSProperties = {
    flex: 1,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    // padding lateral responsivo + espaço para a BottomNav fixa
    padding: "20px clamp(12px, 4vw, 28px) calc(120px + env(safe-area-inset-bottom))",
    boxSizing: "border-box",
  };

  // Faixa (painel) de conteúdo que ocupa 100% da largura disponível
  const panel: React.CSSProperties = {
    background: panelBg,
    borderRadius: 12,
    boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
    padding: "clamp(16px, 3vw, 28px)",
    display: "flex",
    flexDirection: "column",
    flex: 1, // 🔑 o painel ocupa a altura restante
  };

  const headerRow: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    marginBottom: 6,
    marginLeft:40
  };

  const logo: React.CSSProperties = { height: 140 , width: 'auto'};

  const h1: React.CSSProperties = {
    fontSize: "clamp(24px, 3vw, 36px)",
    fontWeight: 800,
    margin: "8px 0 18px",
  };

  // Formulário cresce dentro do painel
  const formCol: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: 14,
    flex: 1,
  };

  const label: React.CSSProperties = { fontSize: 14, fontWeight: 600, marginBottom: 6 };

  const inputBase: React.CSSProperties = {
    width: "100%",
    padding: "14px 16px",
    borderRadius: 12,
    border: "1px solid #D1D5DB",
    background: "#fff",
    fontSize: 16,
    boxSizing: "border-box",
  };

  const select: React.CSSProperties = {
    ...inputBase,
    appearance: "none",
    WebkitAppearance: "none",
    MozAppearance: "none",
    backgroundImage:
      "linear-gradient(45deg, transparent 50%, #9CA3AF 50%), linear-gradient(135deg, #9CA3AF 50%, transparent 50%)",
    backgroundPosition: "calc(100% - 24px) 18px, calc(100% - 18px) 18px",
    backgroundSize: "6px 6px, 6px 6px",
    backgroundRepeat: "no-repeat",
  } as React.CSSProperties;

  const textarea: React.CSSProperties = {
    ...inputBase,
    minHeight: 140,
    resize: "vertical",
    flex: 1, // 🔑 ajuda a “encher” a tela em monitores altos
  };

  const btnPrimary: React.CSSProperties = {
    alignSelf: "stretch",
    background: brandBlack,
    color: "#fff",
    padding: "14px 18px",
    borderRadius: 12,
    fontWeight: 800,
    border: "none",
    boxShadow: "0 10px 20px rgba(0,0,0,0.25)",
    cursor: "pointer",
    fontSize: 16,
  };

  const infoBox: React.CSSProperties = {
    marginTop: 18,
    background: brandMint,
    borderRadius: 12,
    padding: "14px 16px",
    lineHeight: 1.5,
  };

  const errorBox: React.CSSProperties = {
    background: "#FEE2E2",
    color: "#991B1B",
    padding: "10px 14px",
    borderRadius: 12,
    margin: "8px 0 12px",
  };

  const validate = (d: FormDataShape): string[] => {
    const errs: string[] = [];
    if (!d.local || d.local.trim().length < 3) errs.push("📍 Informe o local.");
    if (!d.data) errs.push("📅 Informe a data e hora.");
    if (!crimeOptions.includes(d.crime)) errs.push("🚨 Selecione o tipo de crime.");
    if (!d.descricao || d.descricao.trim().length < 10) errs.push("📝 Descreva melhor o que aconteceu.");
    if (d.numeroBo && !/^\d{4}-\d{6}-\d{2}$/.test(d.numeroBo.trim()))
      errs.push("📎 Nº do BO deve ser YYYY-######-## (ex: 2025-000123-01).");
    return errs;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fieldErrors = validate(form);
    if (fieldErrors.length) return setErrors(fieldErrors);
    setErrors([]);

    const dateOnly = form.data.slice(0, 10);
    const payload: Omit<Occurrence, "id" | "comments"> = {
      local: form.local,
      data: dateOnly,
      crime: form.crime,
      descricao: form.descricao,
      hasBo: Boolean(form.numeroBo && form.numeroBo.trim()),
      numeroBo: form.numeroBo?.trim() || undefined,
    };

    const created = saveOccurrence(payload);
    if (created) navigate(`/ocorrencias/${encodeURIComponent(created.id)}`);
  };

  return (
    <div style={page}>
      {/* Conteúdo ocupa a tela inteira (largura total) */}
      <div style={container}>
        <div style={panel}>
          <div style={headerRow}>
            <img src="/images/LogoSemFundo.png" alt="WalkSafe Logo" style={logo} />

          </div>

          <h1 style={h1}>Relatar Ocorrência</h1>

          {errors.length > 0 && (
            <div style={errorBox}>
              <ul style={{ margin: 0, paddingLeft: 18 }}>
                {errors.map((err, i) => (
                  <li key={i}>{err}</li>
                ))}
              </ul>
            </div>
          )}

          <Form onSubmit={handleSubmit} style={formCol}>
            <div>
              <label htmlFor="local" style={label}>Local</label>
              <input
                id="local" name="local" type="text"
                placeholder="Digite o endereço ou aproxime"
                value={form.local} onChange={handleChange} required
                style={inputBase}
              />
            </div>

            <div>
              <label htmlFor="data" style={label}>Data e Hora</label>
              <input
                id="data" name="data" type="datetime-local"
                value={form.data} onChange={handleChange} required
                style={inputBase}
              />
            </div>

            <div>
              <label htmlFor="crime" style={label}>Tipo de crime</label>
              <select
                id="crime" name="crime" value={form.crime} onChange={handleChange} required
                style={select}
              >
                <option value="">Selecione o tipo de crime</option>
                {crimeOptions.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
              <label htmlFor="descricao" style={label}>Descrição</label>
              <textarea
                id="descricao" name="descricao"
                placeholder="Descreva com detalhes o que aconteceu"
                value={form.descricao} onChange={handleChange} required
                style={textarea}
              />
            </div>

            <div>
              <label htmlFor="numeroBo" style={label}>Boletim de Ocorrência (BO)</label>
              <input
                id="numeroBo" name="numeroBo" type="text"
                placeholder="Nº do protocolo (opcional)"
                value={form.numeroBo} onChange={handleChange}
                style={inputBase}
              />
            </div>

            <button type="submit" style={btnPrimary}>Enviar relato</button>
          </Form>

          <div style={infoBox}>
            <strong style={{ display: "block", marginBottom: 6 }}>A importância do B.O.</strong>
            <p style={{ margin: 0, color: brandMuted }}>
              Registrar um Boletim de Ocorrência é fundamental. Ele oficializa o crime, permitindo que a polícia
              investigue e ajuda a mapear áreas de risco, contribuindo para a segurança de todos.
            </p>
          </div>
        </div>
      </div>

      {/* BottomNav fixa, como na home */}
      <BottomNav />
    </div>
  );
}
