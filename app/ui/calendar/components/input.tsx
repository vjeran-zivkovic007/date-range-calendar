import { ibmPlexSans } from "@/app/lib/fonts";
import { DateRange } from "react-day-picker";
import { formatDateRange } from "../utils/utils";
import type { ReactNode } from "react";

const backgroundImageCalendar = `url('/calendar.svg')`;
const backgroundImageChevron = `url('/chevron-down.svg')`;
const backgroundImageStyles = {
  backgroundImage: `${backgroundImageCalendar}, ${backgroundImageChevron}`,
  backgroundRepeat: "no-repeat",
  backgroundPositionY: "center",
  backgroundPositionX: "50px, 280px",
};

interface InputPropsType extends React.HTMLAttributes<HTMLInputElement> {
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
    <div className={`${ibmPlexSans.className} relative flex items-center`}>
      <div
        style={{ ...backgroundImageStyles }}
        className="flex flex-col absolute w-full py-4 px-22 text-xl text-gray-60"
        {...props}
      >
        <span className="font-light">Select Dates</span>
        <span className="font-normal text-sm">{formattedDate}</span>
      </div>
      <input
        className="input-box-shadow bg-white-100 w-120 text-xl text-gray-60 border border-gray-10 py-4 px-22 rounded-full"
        name="input"
        type="text"
        readOnly
      />
      {renderButton}
    </div>
  );
};
