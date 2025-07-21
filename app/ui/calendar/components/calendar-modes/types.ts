import type { ReactNode } from "react";
import { DateRange } from "react-day-picker";

export interface CalendarComponentProps {
  selected: DateRange | undefined;
  children: ReactNode;
}
