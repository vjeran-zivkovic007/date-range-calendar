import { DayButtonProps, DayProps } from "react-day-picker";

export function Day({
  children,
  className,
  day,
  modifiers,
  ...props
}: DayProps) {
  return (
    <td
      className={`${className} text-sm hover:bg-primary-10 text-gray-80`}
      {...props}
    >
      {children}
    </td>
  );
}

export function DayButton({
  className,
  day,
  modifiers,
  onPointerCancel,
  price,
  ...props
}: DayButtonProps & { price: number | undefined }) {
  const priceString = price ? `${price}€` : "";
  return (
    <button className={`${className} flex flex-col`} {...props}>
      {!day.outside && day.date.getDate()}
      {!day.outside && !props.disabled && priceString && (
        <span className="text-[9px] tracking-[-3%] text-gray-40">
          {priceString}
        </span>
      )}
    </button>
  );
}
