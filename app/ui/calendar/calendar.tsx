"use client";

import { DayPicker, getDefaultClassNames } from "react-day-picker";
import { IBM_Plex_Sans } from "next/font/google";
import { Footer } from "./components/footer";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export function BidCalendar({
  className,
  classNames,
  formatters,
  ...props
}: React.ComponentProps<typeof DayPicker>) {
  const defaultClassNames = getDefaultClassNames();

  return (
    <DayPicker
      mode="range"
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
        day: `${defaultClassNames.day} text-sm hover:bg-primary-10`,
        footer: `${defaultClassNames.footer} pt-4`,
        ...classNames,
      }}
      footer={<Footer />}
      formatters={{
        formatWeekdayName: (date) =>
          date.toLocaleString("default", { weekday: "short" }),
        ...formatters,
      }}
      {...props}
    />
  );
}
