import type { LoaderFunctionArgs } from "@remix-run/node";
import { Form, useLoaderData, Link } from "@remix-run/react";
import { useEffect, useState } from "react";
import { getSessionUser } from "~/utils/auth.client";
import {
  addCommentToOccurrence,
  getOccurrences,
  type Occurrence,
} from "~/utils/storage.client";

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
    const occurrences = getOccurrences();
    const found = occurrences.find((o) => o.id === decodedId) || null;
    setOccurrence(found);
    setUser(getSessionUser());
  }, [id]);

  const handleCommentSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const text = (formData.get("comment") as string)?.trim();

    if (text && user && id) {
      const decodedId = decodeURIComponent(id);
      addCommentToOccurrence(decodedId, user, text);
      setOccurrence((prev) =>
        prev ? { ...prev, comments: [...prev.comments, { author: user, text }] } : prev
      );
      (event.target as HTMLFormElement).reset();
    }
  };

  if (!occurrence) {
    return (
      <div style={{ marginTop: "2rem" }}>
        <Link to="/ocorrencias" style={{ textDecoration: "none", color: "#0070f3" }}>
          ← Voltar
        </Link>
        <p>Ocorrência não encontrada.</p>
      </div>
    );
  }

  return (
    <div className="occurrence-card" style={{ marginTop: "2rem" }}>
      {/* 🔙 Botão de voltar adaptado ao mobile */}
      <div style={{ marginBottom: "1rem" }}>
        <Link
          to="/ocorrencias"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            textDecoration: "none",
            color: "#0070f3",
            fontWeight: 500,
          }}
        >
          <span style={{ fontSize: "1.2rem" }}>←</span> Voltar para ocorrências
        </Link>
      </div>

      <h2>Detalhe da Ocorrência</h2>
      <p><strong>Crime:</strong> {occurrence.crime}</p>
      <p><strong>Local:</strong> {occurrence.local}</p>
      <p>
        <strong>Data:</strong>{" "}
        {new Date(occurrence.data).toLocaleDateString("pt-BR", { timeZone: "UTC" })}
      </p>
      <p><strong>Descrição:</strong> {occurrence.descricao}</p>
      {occurrence.hasBo && (
        <p className="occurrence-info-tag">✓ Com BO informado (não verificado)</p>
      )}

      <div className="comments-section">
        <h3>Comentários</h3>
        <Form onSubmit={handleCommentSubmit}>
          <div className="form-group">
            <textarea
              name="comment"
              placeholder={user ? "Deixe seu comentário..." : "Faça login para comentar"}
              disabled={!user}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary" disabled={!user}>
            Enviar
          </button>
        </Form>

        <div className="comments-list">
          {occurrence.comments.map((comment, index) => (
            <div key={index} className="comment">
              <p><strong>{comment.author}:</strong> {comment.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
