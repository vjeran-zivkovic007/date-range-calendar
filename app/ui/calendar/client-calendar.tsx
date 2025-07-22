"use client";

import { useState } from "react";
import { Calendar, ModeType } from "./calendar";

export const ClientCalendar = () => {
  const [mode, setMode] = useState<ModeType>("popup");

  return (
    <>
      {renderModeSelector()}
      <Calendar
        mode={mode}
        disabledDates={[
          { before: new Date() },
          { from: new Date(2025, 7, 13), to: new Date(2025, 7, 18) },
        ]}
        pricesByDate={[
          { date: new Date(2025, 7, 4), price: 65 },
          { date: new Date(2025, 7, 5), price: 68 },
          { date: new Date(2025, 7, 6), price: 68 },
          { date: new Date(2025, 7, 7), price: 75 },
        ]}
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
