'use client';

import { DayPicker, getDefaultClassNames } from "react-day-picker";
import { IBM_Plex_Sans } from "next/font/google";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export function BidCalendar() {
  const defaultClassNames = getDefaultClassNames();
  return (
    <DayPicker
      mode="range"
      navLayout="around"
      className={`${ibmPlexSans.className} text-rdp-body`}
      classNames={{
        caption_label: `${defaultClassNames.caption_label} text-base`
      }}
    />
  );
}