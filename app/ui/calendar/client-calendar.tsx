"use client";

import { useEffect, useState } from "react";
import {
  Calendar,
  DisabledDatesType,
  ModeType,
  PricesByDateType,
} from "./calendar";
import { parseDisabledDates } from "./utils/utils";

export const ClientCalendar = () => {
  const [mode, setMode] = useState<ModeType>("popup");
  const [pricesByDate, setPricesByDate] = useState<PricesByDateType>([]);
  const [disabledDates, setDisabledDates] = useState<DisabledDatesType>([]);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then(({ disabledDates, pricesByDate }) => {
        setPricesByDate(pricesByDate);
        setDisabledDates(parseDisabledDates(disabledDates));
      })
      .catch((err) => console.error("Failed to fetch calendar data:", err));
  }, []);

  console.log(pricesByDate);

  return (
    <>
      {renderModeSelector()}
      <Calendar
        mode={mode}
        disabledDates={disabledDates}
        pricesByDate={pricesByDate}
      />
    </>
  );

  function renderModeSelector() {
    return (
      <div className="fixed left-10">
        <label htmlFor="mode">Calendar mode:</label>
        <select id="mode" onChange={(e) => setMode(e.target.value as ModeType)}>
          <option value="popup">Popup</option>
          <option value="modal">Modal</option>
        </select>
      </div>
    );
  }
};
