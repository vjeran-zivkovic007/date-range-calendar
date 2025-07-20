"use client";

import "react-day-picker/style.css";
import {
  DateRange,
  DayButtonProps,
  DayPicker,
  DayProps,
  getDefaultClassNames,
} from "react-day-picker";
import * as Popover from "@radix-ui/react-popover";
import * as Dialog from "@radix-ui/react-dialog";
import { ibmPlexSans } from "@/app/lib/fonts";
import { Footer } from "./components/footer";
import { Input } from "./components/input";
import { useState } from "react";

type VariantType = "popup" | "modal";

export type CalendarProps = {
  variant: VariantType;
};

export function Calendar({ variant }: CalendarProps) {
  const [selected, setSelected] = useState<DateRange | undefined>();

  const renderDayPicker = () => (
    <DayPickerInternal
      mode="range"
      selected={selected}
      onSelect={setSelected}
    />
  );

  if (variant === "popup") {
    return (
      <Popover.Root>
        <Popover.Trigger asChild>
          <Input dateRange={selected} />
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content
            className="origin-(--radix-popover-content-transform-origin) animate-popover-content"
            sideOffset={32}
          >
            {renderDayPicker()}
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    );
  }

  if (variant === "modal") {
    return (
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <Input dateRange={selected} />
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-gray-60 animate-dialog-overlay" />
          <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-8 bg-white-100 rounded-md animate-dialog-content">
            <Dialog.Title className="text-xl text-gray-100">
              Choose Period of Stay
            </Dialog.Title>
            {renderDayPicker()}
            {/* <Dialog.Close /> */}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    );
  }

  return null;
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
      classNames={{
        today: "",
        selected: `rdp-selected-1`,
        root: `${defaultClassNames.root} rounded-xl p-5 bg-white-100`,
        chevron: `fill-gray-60 w-4 h-4`,
        caption_label: `${defaultClassNames.caption_label} text-primary-100 text-base uppercase font-medium`,
        weekdays: `uppercase`,
        weekday: `py-2 font-medium last:text-primary-100 text-[12px]`,
        footer: `${defaultClassNames.footer} pt-4`,
        ...classNames,
      }}
      footer={<Footer />}
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

  function Day({ children, className, ...props }: DayProps) {
    return (
      <td
        className={`${className} text-sm hover:bg-primary-10 text-gray-80 `}
        {...props}
      >
        {children}
      </td>
    );
  }

  function DayButton({ day, className, ...props }: DayButtonProps) {
    return (
      <button className={`${className} flex flex-col`} {...props}>
        {!day.outside && day.date.getDate()}
        {!day.outside && (
          <span className="text-[9px] tracking-[-3%] text-gray-40 ">55€</span>
        )}
      </button>
    );
  }
}
