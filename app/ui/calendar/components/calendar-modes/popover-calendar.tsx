import * as Popover from "@radix-ui/react-popover";
import { CalendarComponentProps } from "./types";
import { Input } from "../input";
import { ConfirmButton } from "../confirm-button";

export const PopoverCalendar = ({
  selected,
  children,
  onConfirm,
}: CalendarComponentProps) => {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <Input
          dateRange={selected}
          renderButton={
            <ConfirmButton disabled={!selected} onClick={onConfirm} />
          }
        />
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          className="origin-(--radix-popover-content-transform-origin) animate-popover-content"
          sideOffset={32}
        >
          {children}
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};
