import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  position: sticky;
  top: 0px;
  /* margin: 16px 64px; */
  padding: 16px 64px;

  div{
    display: flex;
    align-items: baseline;

    gap: 6px;
  }
`;
