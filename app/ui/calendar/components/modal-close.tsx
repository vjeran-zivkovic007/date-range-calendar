import Image from "next/image";

export const ModalClose = (
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) => (
  <button
    aria-label="Close"
    className="absolute top-4 right-4 w-5 h-5 hover:bg-gray-10 flex items-center justify-center"
    {...props}
  >
    <Image
      className="dark:invert"
      src="/close.svg"
      alt=""
      width={16}
      height={16}
    />
  </button>
);
