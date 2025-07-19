import { ibmPlexSans } from "@/app/lib/fonts";
import { DateRange } from "react-day-picker";
import { formatDateRange } from "../utils/utils";

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
}

export const Input = ({ dateRange, ...props }: InputPropsType) => {
  const formattedDate = formatDateRange(dateRange);

  return (
    <div className={`${ibmPlexSans.className} relative flex items-center`}>
      <div
        style={{ ...backgroundImageStyles }}
        className="flex flex-col absolute w-full py-4 px-22 text-[20px] text-gray-60"
        {...props}
      >
        <span className="font-light">Select Dates</span>
        <span className="font-normal text-[14px]">{formattedDate}</span>
      </div>
      <input
        className="bg-white-100 w-120 text-[20px] text-gray-60 border border-gray-10 py-4 px-22 rounded-full"
        name="input"
        type="text"
        readOnly
        placeholder=""
      />
      <Button />
    </div>
  );
};

const Button = ({ ...props }: React.HTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className="absolute right-2 py-3 px-8 bg-primary-100 hover:bg-primary-80 disabled:bg-gray-20 rounded-[64px] text-white-100 text-[20px]"
      {...props}
    >
      Confirm
    </button>
  );
};
