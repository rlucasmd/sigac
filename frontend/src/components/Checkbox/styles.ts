import styled from "styled-components";

type StatusIndicatorProps = {
  variant?: string;
}

export const Container = styled.label`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const CheckboxInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;

  &:checked ~ span{
    background-color: rgb(0, 105, 208);
    border-color: rgb(0, 105, 208);
    svg{
      display: block;
    }

  }

  &:not(:checked) ~ span{
    border: 1px solid rgb(122, 123, 142);
    background: #fff;
    svg{
      display: none;
    }
  }
`;

export const CheckMark = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  color: #fff;
  border-radius: 4px;

`;


export const StatusIndicator = styled.div<StatusIndicatorProps>`
  width: 8px;
  height: 24px;
  border-radius: 2px;
  background-image: ${({ variant }) => variant === "AGUARDANDO_ATENDIMENTO" && "linear-gradient(to top, rgb(46, 142, 22), rgb(84, 194, 65));"};
  background-image: ${({ variant }) => variant === "EM_ATENDIMENTO" && "linear-gradient(to top, rgb(99, 0, 135), rgb(157, 23, 86));"};
  background-image: ${({ variant }) => variant === "ATENDIMENTO_FINALIZADO" && "linear-gradient(to top, rgb(0, 58, 121), rgb(0, 105, 208));"};
  background-image: ${({ variant }) => variant === "NAO_AGUARDOU" && "linear-gradient(to top, rgb(170, 170, 185), rgb(211, 212, 221));"};
`;


