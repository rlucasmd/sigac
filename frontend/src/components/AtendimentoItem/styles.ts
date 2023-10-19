import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 3rem;

  border: 1px solid #c3c3c3;
  background: rgb(255, 255, 255);
`;

export const StatusIndicator = styled.div`
  display: flex;
  width: 8px;
  flex-grow: 1;
  background-image: linear-gradient(to top, rgb(0, 58, 121), rgb(0, 105, 208));
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 16px;

`;

export const Details = styled.div`
  display: flex;
  gap: 16px;
  span{
    font-size: 14px;
    line-height: 1.5rem;

  }
  div{
    display: flex;
    flex-direction: column;
  }
`;

export const ActionsContent = styled.div`
  display: flex;
  gap: 16px
`;
