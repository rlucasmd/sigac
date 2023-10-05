import { HTMLAttributes, ReactNode } from "react";
import { InputContainer, InputContent } from "./styles";

type IInput = HTMLAttributes<HTMLInputElement> & {
  icon?: ReactNode;
};

export function Input({ icon, ...rest }: IInput) {
  return (
    <InputContainer>
      {icon}
      <InputContent {...rest} />
    </InputContainer>
  );
}
