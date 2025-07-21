import Image from "next/image";

export const ModalClose = (
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) => (
  <button
    aria-label="Close"
    className="w-6 h-6 md:w-5 md:h-5 hover:bg-gray-10 flex items-center justify-center"
    {...props}
  >
    <Image
      className="dark:invert"
      src="/close.svg"
      alt=""
      width={20}
      height={20}
    />
  </button>
);
