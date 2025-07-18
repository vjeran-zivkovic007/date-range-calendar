export const Button = ({
  children,
  ...props
}: React.HTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className="py-4 px-12 bg-primary-100 hover:bg-primary-80 disabled:bg-gray-20 rounded-[64px] text-white-100 text-[20px]"
      {...props}
    >
      {children}
    </button>
  );
};
