import Image from "next/image";

export const ConfirmButton = ({
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={`py-4 px-4 md:px-8 bg-primary-100 hover:bg-primary-80 disabled:bg-gray-20 disabled:cursor-not-allowed rounded-full md:rounded-[64px] text-white-100 text-xl ${className}`}
      {...props}
    >
      <div className="block md:hidden">
        <Image src="/arrow-right.svg" alt="Confirm" width={20} height={20} />
      </div>
      <span className="hidden md:block">Confirm</span>
    </button>
  );
};
