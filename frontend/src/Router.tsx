import { Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { ListaAtendimentos } from "./pages/ListaAtendimentos";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/*" element={<DefaultLayout />}>
        <Route path="lista-atendimento" element={<ListaAtendimentos />} />

      </Route>
    </Routes>
  );
}
