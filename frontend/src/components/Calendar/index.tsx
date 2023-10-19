import { CaretLeft, CaretRight } from "phosphor-react";
import { CalendarBody, CalendarContainer, CalendarDay, CalendarHeader } from "./styles";
import { WEEK_DAYS } from "../../utils/calendarHelpers";
import { useMemo, useState } from "react";
import { isToday } from "date-fns";
import { useFormContext } from "react-hook-form";

import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import customParseFormat from "dayjs/plugin/customParseFormat";
import "dayjs/locale/pt-br";
dayjs.locale("pt-br");
dayjs.extend(isBetween);
dayjs.extend(customParseFormat);

type ICalendarWeek = {
  week: number;
  days: Array<{
    date: dayjs.Dayjs;
    disabled: boolean;
  }>;
}

type ICalendarWeeks = ICalendarWeek[];

type ICalendar = {
  isCalendarOpen: boolean;
  focusedInput: "data_inicio" | "data_fim" | null;
}

export function Calendar({
  isCalendarOpen,
  focusedInput,
}: ICalendar) {
  const [currentDate, setCurrentDate] = useState(() => {
    return dayjs().set("date", 1);
  });

  const currentMonth = currentDate.format("MMMM");
  const currentYear = currentDate.format("YYYY");

  const { setValue, setFocus, watch } = useFormContext();

  const data_inicio = watch("data_inicio");
  const data_fim = watch("data_fim");

  const tomorrow = dayjs().add(1, "day");

  const handleSelectADate = (date: dayjs.Dayjs) => {
    if (!focusedInput) {
      return;
    }
    setValue(focusedInput, date.format("DD/MM/YYYY"));
    if (focusedInput === "data_inicio")
      return setFocus("data_fim");
    return setFocus("data_inicio");

  }

  function isBetween(data: dayjs.Dayjs, data_inicio: string, data_fim: string) {
    const start = dayjs(data_inicio, "DD/MM/YYYY");
    const end = dayjs(data_fim, "DD/MM/YYYY");

    // console.log(data_inicio, start, end, data);
    // console.log(dayjs("31-12-2023").format("MM/DD/YYYY"));

    return data.isBetween(start, end, "day", "[]");

  }

  const handlePreviousMonth = () => {
    const previousMonth = currentDate.subtract(1, "month");

    setCurrentDate(previousMonth);
  }

  const handleNextMonth = () => {
    const nextMonth = currentDate.add(1, "month");

    setCurrentDate(nextMonth);
  }

  const handlePreviousYear = () => {
    const previousYear = currentDate.subtract(1, "year");

    setCurrentDate(previousYear);
  }

  const handleNextYear = () => {
    const nextYear = currentDate.add(1, "year");

    setCurrentDate(nextYear);
  }

  const calendarWeeks = useMemo(() => {
    const daysInMonthArray = Array.from({
      length: currentDate.daysInMonth(),
    }).map((_, i) => {
      return currentDate.set("date", i + 1);
    });

    const firstWeekDay = currentDate.get("day");

    const previousMonthFillArray = Array.from({
      length: firstWeekDay,
    }).map((_, i) => {
      return currentDate.subtract(i + 1, "day")
    }).reverse();

    const lastDayInCurrentMonth = currentDate.set(
      "date",
      currentDate.daysInMonth()
    );

    const lastWeekDay = lastDayInCurrentMonth.get("day");

    const nextMonthFillArray = Array.from({
      length: 7 - (lastWeekDay + 1)
    }).map((_, i) => {
      return lastDayInCurrentMonth.add(i + 1, "day");
    })

    const calendarDays = [
      ...previousMonthFillArray.map((date) => {
        return { date, disabled: date.endOf("day").isAfter(tomorrow) }
      }),
      ...daysInMonthArray.map((date) => {
        return {
          date,
          disabled: date.endOf("day").isAfter(tomorrow)
        }
      }),
      ...nextMonthFillArray.map((date) => {
        return { date, disabled: true }
      })
    ]

    const calendarWeeks = calendarDays.reduce<ICalendarWeeks>(
      (weeks, _, i, original) => {
        const isNewWeek = i % 7 === 0;
        if (isNewWeek) {
          weeks.push({
            week: i / 7 + 1,
            days: original.slice(i, i + 7)
          });
        }

        return weeks;
      },
      []
    )

    return calendarWeeks;
  }, [currentDate]);


  if (!isCalendarOpen) {
    return null;
  }
  // console.log("isBetween", dayjs())

  return (
    <>
      {/* <CalendarBackdrop onClick={onCloseCalendarSelect} className="cover" /> */}
      <CalendarContainer onClick={e => e.stopPropagation()}>

        <CalendarHeader>
          <div className="headerActions">
            <button type="button" onClick={handlePreviousMonth}>
              <CaretLeft size={24} weight="bold" />
            </button>
            <strong>{currentMonth}</strong>
            <button type="button" onClick={handleNextMonth}>
              <CaretRight size={24} weight="bold" />
            </button>
          </div>
          <div className="headerActions">
            <button type="button" onClick={handlePreviousYear}>
              <CaretLeft size={24} weight="bold" />
            </button>
            <strong>{currentYear}</strong>
            <button type="button" onClick={handleNextYear}>
              <CaretRight size={24} weight="bold" />
            </button>
          </div>
        </CalendarHeader>
        <CalendarBody>
          <thead>
            <tr>
              {WEEK_DAYS.map((day) => (
                <th key={day}>{day[0]}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {calendarWeeks.map(({ week, days }) => {
              return (
                <tr key={week}>
                  {days.map(({ date, disabled }) => {
                    // console.log(date.isBetween(data_inicio, data_fim, "day"));
                    // console.log(date.isBetween(dayjs(data_inicio), dayjs(data_fim), "day", "()"));
                    return (
                      <td key={date.toString()}>
                        <CalendarDay
                          className="calendarDay"
                          disabled={disabled}
                          type="button"
                          onClick={() => handleSelectADate(date)}
                          $isToday={isToday(date.toDate())}
                          $isHighlighted={isBetween(date, data_inicio, data_fim)}
                        >
                          {date.get("date")}
                        </CalendarDay>
                      </td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </CalendarBody>
      </CalendarContainer>
    </>
  );
}


