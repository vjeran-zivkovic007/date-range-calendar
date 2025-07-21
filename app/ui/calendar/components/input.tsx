import { ibmPlexSans } from "@/app/lib/fonts";
import Image from "next/image";
import { DateRange } from "react-day-picker";
import { formatDateRange } from "../utils/utils";
import type { ReactNode } from "react";

interface InputPropsType extends React.HTMLAttributes<HTMLDivElement> {
  dateRange: DateRange | undefined;
  renderButton?: ReactNode;
}

export const Input = ({
  dateRange,
  renderButton,
  ...props
}: InputPropsType) => {
  const formattedDate = formatDateRange(dateRange);

  return (
    <div className="fixed bottom-4 md:relative" {...props}>
      <div className="flex items-center input-box-shadow px-2 py-2 min-h-[66px] md:min-h-[74px] bg-white-100 rounded-full shadow-sm border border-gray-10 cursor-pointer">
        <div className="flex items-center px-4">
          <Image
            className="dark:invert mx-4"
            src="/calendar.svg"
            alt="Calendar logo"
            width={20}
            height={20}
          />
          <div
            className={`${ibmPlexSans.className} flex flex-col text-gray-60`}
          >
            <span className="font-light text-xl">Select Dates</span>
            <span className="font-normal text-sm">{formattedDate}</span>
          </div>
          <Image
            className="dark:invert mx-4"
            src="/chevron-down.svg"
            alt="Calendar logo"
            width={20}
            height={20}
          />
        </div>

        {renderButton}
      </div>
    </div>
  );
};
