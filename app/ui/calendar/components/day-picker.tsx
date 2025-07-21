import { DayButtonProps, DayProps } from "react-day-picker";

export function Day({ children, className, ...props }: DayProps) {
  return (
    <td
      className={`${className} text-sm hover:bg-primary-10 text-gray-80`}
      {...props}
    >
      {children}
    </td>
  );
}

export function DayButton({ day, className, ...props }: DayButtonProps) {
  return (
    <button className={`${className} flex flex-col`} {...props}>
      {!day.outside && day.date.getDate()}
      {!day.outside && (
        <span className="text-[9px] tracking-[-3%] text-gray-40">55€</span>
      )}
    </button>
  );
}
