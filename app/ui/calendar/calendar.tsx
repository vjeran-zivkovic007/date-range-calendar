"use client";

import "react-day-picker/style.css";
import { DateRange, DayPicker, getDefaultClassNames } from "react-day-picker";
import * as Popover from "@radix-ui/react-popover";
import * as Dialog from "@radix-ui/react-dialog";
import { ibmPlexSans } from "@/app/lib/fonts";
import { Footer } from "./components/footer";
import { Input } from "./components/input";
import { useState } from "react";
import { ModalClose } from "./components/modal-close";
import { ConfirmButton } from "./components/confirm-button";
import { Day, DayButton } from "./components/day-picker";

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
          <Input
            dateRange={selected}
            renderButton={<ConfirmButton className="absolute right-2" />}
          />
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
    const isConfirmDisabled = !selected;

    return (
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <Input dateRange={selected} />
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-gray-60 animate-dialog-overlay" />
          <Dialog.Content
            className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-8 bg-white-100 rounded-xl animate-dialog-content ${ibmPlexSans.className} font-medium`}
          >
            <Dialog.Title className="text-xl text-gray-100">
              Choose Period of Stay
            </Dialog.Title>
            {renderDayPicker()}
            <div className="flex justify-end pt-4">
              <ConfirmButton disabled={isConfirmDisabled} />
            </div>
            <Dialog.Close asChild>
              <ModalClose />
            </Dialog.Close>
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
        weekday: `py-2 font-medium last:text-primary-100 text-xs`,
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
}
