import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 12px;
  position: relative;
  border: 1px solid #c3c3c3;
  border-radius: 2px;
  width: fit-content;
  height: 32px;
  padding-left: 6px;
  background-color: #fff;

  justify-content: center;
  align-items: center;

  &:focus-within:not(:disabled){
    box-shadow: rgb(240, 240, 245) 0px 0px 0px 2px, rgb(0, 105, 208) 0px 0px 0px 4px;
    outline: none;
  }


  input[type="date"]::-webkit-inner-spin-button,
  input[type="date"]::-webkit-calendar-picker-indicator {
    display: none;
    -webkit-appearance: none;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  button{
    all: unset;
    display: flex;


    &:hover{
      color: red;
      cursor: pointer;
    }

  }


`;

export const Icon = styled.div`
  display: flex;
  flex: 1;
  cursor: pointer;
  /* align-items: center; */
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 40px;
  background-color: #cecece;
`;

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  /* background: rgba(0, 0, 0, 0.4); */
`;
