import styled from "styled-components";

export const LoginPageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  >main{
    flex-direction: column;
    padding: 20px;
    align-items: center;
    justify-content: center;
    display: flex;
    flex: 3;
  }
  >aside{
    display: flex;
    flex: 7;
    img {
      width: 100%;
    }
  }
`;

export const LoginForm = styled.form`
  margin-top: 32px;
  display: flex;
  /* background-color: red; */
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 64px;
  gap: 12px;

  div{
    background-color: aliceblue;
    display: flex;
    width: 100%;
    flex-direction: column;

    label{
      font-weight: 700;
    }

    input{
      width: 100%;
    }
  }
`;
