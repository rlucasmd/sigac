import { Container, StatusIndicator, CheckboxInput, CheckMark } from "./styles";
import { Check } from "phosphor-react";
import { ElementRef, HTMLAttributes, ReactNode, forwardRef } from "react";

type ICheckBox = HTMLAttributes<HTMLInputElement> & {
  children: ReactNode;
  name: string;
}

export const Checkbox = forwardRef<
  ElementRef<typeof CheckboxInput>,
  ICheckBox
>(({ children, ...rest }, ref) => (
  <Container htmlFor={rest.id}>
    <CheckboxInput type="checkbox" {...rest} ref={ref} />
    <CheckMark>
      <Check weight="bold" size="16" />
    </CheckMark>
    <StatusIndicator variant={rest.name.split(".")[1]} />
    {children}
  </Container>
));
Checkbox.displayName = "Checkbox";
