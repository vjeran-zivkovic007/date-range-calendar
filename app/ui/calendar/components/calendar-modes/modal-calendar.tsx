import * as Dialog from "@radix-ui/react-dialog";
import { CalendarComponentProps } from "./types";
import { Input } from "../input";
import { ModalClose } from "../modal-close";
import { ConfirmButton } from "../confirm-button";
import { ibmPlexSans } from "@/app/lib/fonts";

export const ModalCalendar = ({
  selected,
  children,
}: CalendarComponentProps) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Input dateRange={selected} />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-gray-60 animate-dialog-overlay" />
        <Dialog.Content
          aria-describedby={undefined}
          className={`w-full md:size-auto fixed overflow-y-auto max-h-[100vh] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-8 bg-white-100 md:rounded-xl animate-dialog-content ${ibmPlexSans.className} font-medium`}
        >
          <div className="flex items-center justify-between mb-8">
            <Dialog.Title className="text-lg md:text-xl text-gray-100">
              Choose Period of Stay
            </Dialog.Title>
            <Dialog.Close asChild>
              <ModalClose />
            </Dialog.Close>
          </div>
          {children}
          <div className="flex justify-center md:justify-end pt-12 gap-x-2">
            <div className="block md:hidden">
              <Input
                dateRange={selected}
                className="static"
                renderButton={<ConfirmButton disabled={!selected} />}
              />
            </div>
            <div className="hidden md:block">
              <ConfirmButton disabled={!selected} />
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
