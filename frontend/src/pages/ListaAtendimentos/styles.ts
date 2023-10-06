import styled from "styled-components";

export const ListaAtendimentoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const ListaAtendimentoHeader = styled.div`
  padding: 32px 64px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  width: 100%;
  div{
    display: flex;
    justify-content: space-between;
    button{
      width: fit-content;
    }
  }
`;

export const FiltrosContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  div{
    display: flex;
  }
  button{
    gap: 8px;
    height: fit-content;
    width: fit-content;

    font-size: 14px;
  }
`;


export const ListaAtendimentoContent = styled.div`
  display: flex;
  padding: 32px 64px;
  flex-direction: column;
`;

export const ListagemAtendimentos = styled.div`
  display: flex;
  flex-direction: column;
`;
