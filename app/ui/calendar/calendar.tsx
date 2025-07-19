"use client";

import {
  DateRange,
  DayButtonProps,
  DayPicker,
  DayProps,
  getDefaultClassNames,
} from "react-day-picker";
import * as Popover from "@radix-ui/react-popover";
import { Footer } from "./components/footer";
import "react-day-picker/style.css";
import { Input } from "./components/input";
import { ibmPlexSans } from "@/app/lib/fonts";
import { useState } from "react";

export function Calendar({
  className,
  classNames,
  formatters,
  ...props
}: React.ComponentProps<typeof DayPicker>) {
  const defaultClassNames = getDefaultClassNames();
  const [selected, setSelected] = useState<DateRange | undefined>();

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <Input dateRange={selected} />
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className="PopoverContent" sideOffset={32}>
          <DayPicker
            mode="range"
            numberOfMonths={2}
            navLayout="around"
            weekStartsOn={1}
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            selected={selected}
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            onSelect={setSelected}
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
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
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
