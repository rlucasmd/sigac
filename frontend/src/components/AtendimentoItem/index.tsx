import { DotsThreeOutlineVertical, Users } from "phosphor-react";
import { ActionsContent, Container, Content, Details, StatusIndicator } from "./styles";
import { formatAge } from "../../utils/formatAge";
import { status_atendimento_enum } from "../../utils/statusAtendimentoEnum";

type IAtendimentoItem = {
  _id: string;
  status_atendimento: "EM_ATENDIMENTO" | "NAO_AGUARDOU" | "AGUARDANDO_ATENDIMENTO" | "ATENDIMENTO_FINALIZADO",
  cidadao: {
    _id: string;
    nome: string;
    data_nascimento: string;
  }
}

export function AtendimentoItem({
  _id,
  status_atendimento,
  cidadao
}: IAtendimentoItem) {
  const idade = formatAge(cidadao.data_nascimento);
  // console.log(_id);
  return (
    <Container>
      <StatusIndicator />
      <Content>
        <Details>
          <div>
            <strong>22:30</strong>
            <span>{status_atendimento_enum[status_atendimento]}</span>
          </div>
          <div>
            <strong>{cidadao.nome}</strong>
            <span>{idade}</span>
          </div>
        </Details>
        <ActionsContent>
          <button type="button">
            <Users size={32} />
          </button>
          <button type="button">
            <DotsThreeOutlineVertical size={32} />
          </button>
        </ActionsContent>
      </Content>
    </Container>
  );
}
