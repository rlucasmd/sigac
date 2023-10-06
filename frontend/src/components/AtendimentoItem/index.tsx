import { Container, Content, StatusIndicator } from "./styles";

export function AtendimentoItem() {
  return (
    <Container>
      <StatusIndicator />
      <Content>
        <div>
          <div>
            <strong>22:30</strong>
            <span>Aguardando Atendimento</span>
          </div>
          <div>
            <strong>Ranieri Lucas de Medeiros Dantas</strong>
            <span>23 anos e 7 meses</span>
          </div>
        </div>
      </Content>
    </Container>
  );
}
