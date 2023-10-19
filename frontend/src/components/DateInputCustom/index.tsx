import { Controller, useFormContext } from "react-hook-form";
import { DateInputContainer } from "./styles";
import { dateMask } from "../../utils/masks";
import { ChangeEvent, ComponentProps, HTMLAttributes, forwardRef } from "react";

type IDateInputCustom = HTMLAttributes<HTMLInputElement> & {
  name: string;
};

// const DateInputCustomm = forwardRef<
//   ComponentProps<typeof DateInputContainer>,
//   IDateInputCustom
// >(({ name, ...props }, ref) => {
//   const { control } = useFormContext();


//   function handleChangeInput(e: ChangeEvent<HTMLInputElement>, change: any) {
//     console.log(e.target.value);
//     const value = dateMask(e.target.value);

//     change(value);
//   }
//   return (
//     <Controller
//       control={control}
//       name={name}
//       render={({ field: { onChange, onBlur } }) => (
//         <DateInputContainer
//           ref={ref}
//           placeholder="dd/mm/aaaa"
//           onChange={(e) => handleChangeInput(e, onChange)}
//           onBlur={onBlur}
//           {...props}
//         // {...rest}
//         />
//       )}
//     />
//   )
// });
// DateInputCustomm.displayName = "Date Input";

export function DateInputCustom({ name, ...props }: IDateInputCustom) {
  const { control } = useFormContext();


  function handleChangeInput(e: ChangeEvent<HTMLInputElement>, change: any) {
    console.log(e.target.value);
    const value = dateMask(e.target.value);

    change(value);
  }
  return (
    <Controller
      control={control}
      name={name}
      // ref={}
      render={({ field: { ref, onChange, ...rest } }) => (
        <DateInputContainer
          ref={ref}
          placeholder="dd/mm/aaaa"
          onChange={(e) => handleChangeInput(e, onChange)}
          {...rest}
          {...props}
        />
      )}
    />
  )
}
