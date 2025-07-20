export const ConfirmButton = ({
    className,
  ...props
}: React.HTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={`py-3 px-8 bg-primary-100 hover:bg-primary-80 disabled:bg-gray-20 rounded-[64px] text-white-100 text-xl ${className}`}
      {...props}
    >
      Confirm
    </button>
  );
};
