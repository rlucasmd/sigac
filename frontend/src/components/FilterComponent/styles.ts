import styled from "styled-components";

import * as Dialog from "@radix-ui/react-dialog";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50px;
  right: 0px;
  /* background: rgb(255, 255, 255); */
  /* padding: 1rem; */
  border-radius: 2px;
  border: 1px solid rgb(211, 212, 221);
  /* transform: translate(50%, -50%); */
  background: #fff;
  padding: 32px;
  /* border-radius: 16px; */
  gap: 8px;
  .filterGrid{
    margin-top: 8px;
    margin-bottom: 8px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  /* background: rgba(0, 0, 0, 0.4); */
`;

export const ModalFooter = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 32px;
  button{
    width: fit-content;
  }
`;

export const DateInputs = styled.div`
  display: flex;
`;
