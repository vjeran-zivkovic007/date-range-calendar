"use client";

import "react-day-picker/style.css";
import {
  DateRange,
  DayFlag,
  DayPicker,
  DayPickerProps,
  getDefaultClassNames,
} from "react-day-picker";
import { ibmPlexSans } from "@/app/lib/fonts";
import { Footer } from "./components/footer";
import { useState } from "react";
import { Day, DayButton } from "./components/day-picker";
import { ModalCalendar, PopoverCalendar } from "./components/calendar-modes";
import { useForceModal } from "./utils/useForceModal";
import { formatDateRange, rangeIncludesDisabledDays } from "./utils/utils";

export type ModeType = "popup" | "modal";

export type CalendarProps = {
  mode: ModeType;
  disabled?: DayPickerProps["disabled"];
};

function onConfirm(selected: DateRange) {
  alert(`You selected ${formatDateRange(selected)}`);
}

export function Calendar({ mode, disabled }: CalendarProps) {
  const [selected, setSelected] = useState<DateRange | undefined>();
  const forceModal = useForceModal();

  if (forceModal === null) return null;

  const useModal = forceModal || mode === "modal";

  const CalendarComponent = useModal ? ModalCalendar : PopoverCalendar;

  return (
    <CalendarComponent
      selected={selected}
      onConfirm={() => onConfirm(selected!)}
    >
      <DayPickerInternal
        mode="range"
        selected={selected}
        onSelect={(range) => {
          if (rangeIncludesDisabledDays(range, disabled)) {
            alert("Range contains disabled dates!");
            return;
          }
          setSelected(range);
        }}
        disabled={disabled}
        className={mode === "popup" ? "p-4" : ""}
        footer={!forceModal && <Footer />}
      />
    </CalendarComponent>
  );
}

function DayPickerInternal({
  className,
  classNames,
  formatters,
  ...props
}: React.ComponentProps<typeof DayPicker>) {
  const defaultClassNames = getDefaultClassNames();

  return (
    <DayPicker
      numberOfMonths={2}
      navLayout="around"
      weekStartsOn={1}
      className={`${ibmPlexSans.className} text-gray-100 ${className}`}
      modifiersClassNames={{ [DayFlag.disabled]: "bg-gray-5" }}
      classNames={{
        today: "",
        selected: `rdp-selected-1`,
        root: `${defaultClassNames.root} rounded-xl bg-white-100`,
        chevron: `fill-gray-60 w-4 h-4`,
        caption_label: `${defaultClassNames.caption_label} text-primary-100 text-base uppercase font-medium`,
        months: `${defaultClassNames.months} justify-center`,
        weekdays: `uppercase`,
        weekday: `py-2 font-medium last:text-primary-100 text-xs`,
        footer: `${defaultClassNames.footer} pt-4`,
        ...classNames,
      }}
      formatters={{
        formatWeekdayName: (date) =>
          date.toLocaleString("default", { weekday: "short" }),
        ...formatters,
      }}
      components={{
        Day,
        DayButton,
      }}
      {...props}
    />
  );
}
