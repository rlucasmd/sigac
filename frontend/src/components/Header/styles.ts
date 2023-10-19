import styled from "styled-components";

export const HeaderContainer = styled.header`
  .content{
    display: flex;
    padding: 16px 64px;
    background-color: rgb(0, 81, 162);
    color: #fff;
    width: 100%;
    display: flex;
    border-bottom: 1px solid rgb(211, 212, 221);

    justify-content: space-between;

    div{
      display: flex;
      flex-direction: column;
    }
  }
  .paths{
    padding: 0px 64px;

    border-bottom: 1px solid #cecece;

    button{
      display: flex;
      align-items: center;
      justify-content: center;
      height: 32px;
      width: 40px;

      line-height: 0;
      background: transparent;
      cursor: pointer;
      border: none;
      border-radius: 8px;
      transition: 0.3s;


      &:hover{
        background-color: #cecece;
      }
    }
  }
`;
