import { dateMatchModifiers, DateRange, Matcher } from "react-day-picker";
import { PricesByDateType } from "../calendar";

export const formatDateRange = (range: DateRange | undefined) => {
  if (!range || !range.from || !range.to) return "";

  const formatDate = (date: Date) => {
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, "0");
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const year = d.getFullYear();
    return `${day}/${month}/${year}.`;
  };

  return `${formatDate(range.from)} - ${formatDate(range.to)}`;
};

export function rangeIncludesDisabledDays(
  range: DateRange | undefined,
  disabled: Matcher | Matcher[] | undefined
): boolean {
  if (disabled === undefined) return false;
  if (!range?.from || !range?.to) return false;

  const current = new Date(range.from);
  const end = new Date(range.to);

  while (current <= end) {
    const matched = dateMatchModifiers(current, disabled);

    if (matched) return true;
    current.setDate(current.getDate() + 1);
  }

  return false;
}

export function isCheckoutDate(
  date: Date | undefined,
  disabled: Matcher | Matcher[] | undefined
): boolean {
  if (date === undefined) return false;
  if (disabled === undefined) return false;

  const nextDay = new Date(date);
  nextDay.setDate(date.getDate() + 1);

  return dateMatchModifiers(nextDay, disabled);
}

export function isConfirmButtonDisabled(range: DateRange | undefined) {
  if (!range?.from || !range?.to) return true;

  const current = new Date(range.from).getTime();
  const end = new Date(range.to).getTime();

  return current === end;
}

export function getPriceForDate(
  date: Date,
  prices: PricesByDateType | undefined
): number | undefined {
  if (prices === undefined) return undefined;

  const match = prices.find((p) => p.date.getTime() === date.getTime());
  return match?.price;
}
