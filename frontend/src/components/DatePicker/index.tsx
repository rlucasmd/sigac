import { CalendarBlank, X } from "phosphor-react";
import { Container, Icon, InputContainer, Overlay } from "./styles";
import { Calendar } from "../Calendar";
import { useEffect, useRef, useState } from "react";
import { useFormContext, Controller } from "react-hook-form";
import { DateInputCustom } from "../DateInputCustom";

export function DatePicker() {


  const [isCalendarFromOpen, setIsCalendarFromOpen] = useState(false);
  const [focusedInput, setFocusedInput] = useState<"data_inicio" | "data_fim" | null>(null);
  //const input = useRef(null);

  const { setValue } = useFormContext();

  // useEffect(() => {
  //   console.log(focusedInput);
  // }, [focusedInput]);

  // const firstInput = watch("data_inicio");
  // console.log(firstInput);

  // if (firstInput.length > 10) {
  //   setFocus("data_fim");
  // }

  function handleOpenCalendar(name: "data_inicio" | "data_fim") {
    setFocusedInput(name);
    setIsCalendarFromOpen(true);
  }

  function handleCloseCalendar() {
    // console.log("close");
    // console.log(document.activeElement);
    setIsCalendarFromOpen(false);
    // const field = getFieldState("data_inicio");
    // console.log(control._fields.data_inicio);
  }

  function handleClearDateInput(name: "data_inicio" | "data_fim") {
    // e.stopPropagation();
    setValue(name, "");
  }


  return (
    <>
      {isCalendarFromOpen && <Overlay onClick={handleCloseCalendar} />}
      <Container>
        <Calendar
          isCalendarOpen={isCalendarFromOpen}
          focusedInput={focusedInput}
        />
        <InputContainer >
          <DateInputCustom
            name="data_inicio"
            onFocus={() => handleOpenCalendar("data_inicio")}
          />
          <button type="button" onClick={() => handleClearDateInput("data_inicio")}>
            <X weight="bold" />
          </button>
        </InputContainer>
        <strong>até</strong>
        <InputContainer>
          <DateInputCustom
            name="data_fim"
            onFocus={() => handleOpenCalendar("data_fim")}
          />
          <button type="button" onClick={() => handleClearDateInput("data_fim")}>
            <X weight="bold" />
          </button>
        </InputContainer>
        <Icon>
          <CalendarBlank weight="bold" />
        </Icon>
      </Container>
    </>
  );
}
