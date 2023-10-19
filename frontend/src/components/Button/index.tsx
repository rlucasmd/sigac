import { ComponentProps, forwardRef, ElementRef, ReactNode } from "react";
import { ButtonContainer } from "./styles";

type IButton = ComponentProps<typeof ButtonContainer> & {
  children: ReactNode;
  variant?: "primary" | "secondary";
}

export const Button = forwardRef<
  ElementRef<typeof ButtonContainer>,
  IButton
>(({ children, variant = "primary", ...rest }, ref) => (
  <ButtonContainer {...rest} ref={ref} variant={variant}>
    {children}
  </ButtonContainer>
));

Button.displayName = "Button";
