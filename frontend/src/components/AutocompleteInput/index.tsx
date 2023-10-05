import { InputHTMLAttributes } from "react";

type IAutocompleteInput = InputHTMLAttributes<HTMLInputElement>;

export function AutocompleteInput({ ...rest }: IAutocompleteInput) {
  return (
    <div>
      <input type="text" {...rest} />
    </div>
  );
}
