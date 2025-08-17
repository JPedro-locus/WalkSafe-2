// app/components/Header.tsx
import { NavLink, useNavigate, useLocation } from "@remix-run/react";
import { useEffect, useState } from "react";
import { getSessionUser, logout } from "~/utils/auth.client";

export function Header() {
  const [user, setUser] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setUser(getSessionUser());
  }, [user]);

  const handleLogout = () => {
    logout();
    setUser(null);
    navigate("/");
  };

  // 🔕 Oculta o header na home para ficar como a segunda imagem
  if (location.pathname === "/") return null;

  return (
    <header className="main-header">
      <nav>
        <NavLink to="/">Início</NavLink>
        <NavLink to="/relatar">Relatar</NavLink>
        <NavLink to="/ocorrencias">Ocorrências</NavLink>
      </nav>
      {user && (
        <button type="button" onClick={handleLogout} className="btn btn-logout">
          Sair
        </button>
      )}
    </header>
  );
}
