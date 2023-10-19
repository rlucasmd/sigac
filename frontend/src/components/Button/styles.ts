import styled, { css } from "styled-components";

type IButtonProps = {
  variant?: "primary" | "secondary";
}

export const ButtonContainer = styled.button<IButtonProps>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 12px;
  gap: 8px;

  font-size: 14px;
  font-family: GeneralSans, sans-serif;
  font-weight: 700;
  color: #fff;
  border-radius: 4px;
  border: none;
  line-height: 1.5;

  ${({ variant }) => variant === "primary" && css
    `
      background: rgb(0, 105, 208);
      color: #fff;

      border: 1px solid rgb(0, 105, 208);
    `
  }
  ${({ variant }) => variant === "secondary" && css
    `
      background: transparent;
      font-weight: bold;
      color: rgb(36, 37, 46);
      border: 1px solid rgb(105, 105, 121);
    `
  }


`;
