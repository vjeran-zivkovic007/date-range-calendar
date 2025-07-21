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
