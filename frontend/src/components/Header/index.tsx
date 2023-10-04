import { HeaderContainer } from "./styles";
import { House } from "phosphor-react";

export function Header() {
  return (
    <HeaderContainer>
      <div className="content">
        <div>
          <h1>SIGAC</h1>
        </div>

        <div>
          <span>Hilda Moreira Marques Oliveira</span>
          <strong>Centro de Especialidades</strong>
        </div>
      </div>
      <div className="paths">
        <button type="button">
          <House size={24} weight="fill" />
        </button>
      </div>
    </HeaderContainer>
  );
}
