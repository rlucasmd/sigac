import styled from "styled-components";

export const ListaAtendimentoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  flex-grow: 1;
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
export const ListaAtendimentoContent = styled.div`
    display: flex;
    padding: 0 64px;
    flex-direction: column;
    margin-bottom: 32px;

    background-color: rgb(240, 240, 245);
  `;

export const FiltrosContainer = styled.div`
  display: flex;
  margin: 16px 0px;
  flex-direction: column;
  gap: 8px;

  width: 100%;
  .actions{
    position: relative;
    display: flex;
    justify-content: space-between;

    >button{
      gap: 8px;
      height: fit-content;
      width: fit-content;

      font-size: 14px;
    }
  }

`;



export const ListagemAtendimentos = styled.div`
  h4{
    margin-bottom: 8px;
  }

  gap: 8px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  -moz-box-flex: 1;
  min-height: 100%;
`;
