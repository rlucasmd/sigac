import styled, { css } from "styled-components";

export const CalendarBackdrop = styled.div`
  &.cover{
    position: fixed;
    inset: 0px;
    height: 100vh;
    width: 100vw;
    background-color: transparent;
  }

`;

export const CalendarContainer = styled.div`
  display: flex;
  position: absolute;
  background-color: #fff;
  flex-direction: column;
  border-radius: 2px;
  gap: 16px;
  /* bottom: 120px;*/
  inset: auto auto 0px 0px;
  padding: 16px 8px;
  background: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px;
  transform: translate(-16px, -32px);

`;

export const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 64px;
  .headerActions{
    display: flex;
    gap: 16px;
    align-items: center;
    >button {

      all: unset;
      height: 32px;
      width: 32px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #fff;
      cursor: pointer;
      &:hover{
        background-color: #cecece;
        opacity: 0.8;
      }
    }
  }
`;

export const CalendarBody = styled.table`
  /* thead{
    height: 32px;
  } */
  tr{
    height: 16px;

  }
  tr, td{
    text-align: center;
  }

  td{
    width: 32px;
    height: 32px;
  }
`;

type ICalendarDay = {
  $isHighlighted?: boolean;
  $isToday?: boolean;
}

export const CalendarDay = styled.button<ICalendarDay>`

  all: unset;
  width: 32px;
  cursor: pointer;
  border-radius: 999px;
  aspect-ratio: 1/1;


  ${({ $isHighlighted }) => {
    return $isHighlighted && css`
      background: rgb(0, 105, 208);
      color: rgb(255, 255, 255);
    `
  }};
  font-weight: ${({ $isToday }) => $isToday ? 700 : 400};

  &:disabled{
    cursor: not-allowed;
    opacity: 0.6;
  }







`;
