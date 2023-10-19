import { Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { ListaAtendimentos } from "./pages/ListaAtendimentos";
import { Soap } from "./pages/Soap";
import { AtendimentoLayout } from "./layouts/AtendimentoLayout";
import { FolhaRosto } from "./pages/FolhaRosto";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/*" element={<DefaultLayout />}>
        <Route path="lista-atendimento" element={<ListaAtendimentos />} />
        <Route path="lista-atendimento/atendimento/:atendimentoId/*" element={<AtendimentoLayout />}>
          <Route path="soap" element={<Soap />} />
          <Route path="folha-rosto" element={<FolhaRosto />} />
        </Route>

      </Route>
    </Routes>
  );
}
