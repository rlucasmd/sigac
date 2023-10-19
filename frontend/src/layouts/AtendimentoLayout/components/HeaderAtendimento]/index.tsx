import { Link } from "react-router-dom";
import { HeaderContainer } from "./styles";


export function HeaderAtendimento() {
  return (
    <HeaderContainer>
      <div>
        <h2>Ranieri Lucas de Medeiros Dantas</h2>
        <span>| Masculino</span>
      </div>
      <div>
        <span>23 anos e 9 meses | Nasceu em 16/02/2000</span>

        <strong>CPF</strong>
        <span>999.999.999-09</span>

        <strong>CNS</strong>
        <span>123456789101213</span>

        <strong>Nome da mãe</strong>
        <span>Maria Aparecida de Araújo</span>
      </div>
      <div>
        <ul>
          <li><Link to="folha-rosto">Folha de rosto</Link></li>
          <li><Link to="soap">SOAP</Link></li>
        </ul>
      </div>
    </HeaderContainer>
  );
}
