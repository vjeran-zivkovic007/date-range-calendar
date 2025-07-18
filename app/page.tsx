import { BidCalendar } from "./ui/calendar";
import "react-day-picker/style.css";

export default function Home() {
  return (
    <div
      className="font-sans items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-gradient-to-b from-[#FFFFFF] to-[#DADADD]"
    >
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <BidCalendar />
      </main>
    </div>
  );
}
