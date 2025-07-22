import { NextResponse } from "next/server";

const todayString = new Date().toDateString();

const disabledDates = [
  { before: todayString },
  { from: "2025-08-13", to: "2025-08-18" },
];
const pricesByDate = [
  { date: "2025-08-04", price: 65 },
  { date: "2025-08-05", price: 68 },
  { date: "2025-08-06", price: 68 },
  { date: "2025-08-07", price: 75 },
];

export async function GET() {
  return NextResponse.json({ pricesByDate, disabledDates });
}
