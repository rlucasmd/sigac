import styled from "styled-components";

export const InputContainer = styled.div`
  position: relative;

  svg{
    position: absolute;
    width: 20px;
    height: 20px;
    top: 6px;
    left: 6px;
    color: rgb(36, 37, 46);
  }
`;

export const InputContent = styled.input`
  border: 1px solid rgb(143, 143, 162);
  border-radius: 4px;
  height: 32px;
  font-weight: 500;
  padding-left: 32px;
  min-width: 300px;
  width: fit-content;
  color: rgb(36, 37, 46);
  font-size: 14px;
  outline: none;

  &:not(:disabled):focus{
    box-shadow: rgb(240, 240, 245) 0px 0px 0px 2px, rgb(0, 105, 208) 0px 0px 0px 4px;
  }
  ::placeholder{
    color: rgb(143, 143, 162);
  }
`;
