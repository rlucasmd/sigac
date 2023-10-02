import { ComponentProps, forwardRef, ElementRef, ReactNode } from "react";
import { ButtonContainer } from "./styles";

type IButton = ComponentProps<typeof ButtonContainer> & {
  children: ReactNode;
}

export const Button = forwardRef<
  ElementRef<typeof ButtonContainer>,
  IButton
>(({ children, ...rest }, ref) => (
  <ButtonContainer {...rest} ref={ref}>
    {children}
  </ButtonContainer>
));

Button.displayName = "Button";
