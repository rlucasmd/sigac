import { Outlet } from "react-router-dom";
import { AtendimentoLayoutContainer } from "./styles";
import { HeaderAtendimento } from "./components/HeaderAtendimento]";

export function AtendimentoLayout() {
  return (
    <AtendimentoLayoutContainer>
      <HeaderAtendimento />
      <Outlet />
    </AtendimentoLayoutContainer>

  );
}
