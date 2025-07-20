const backgroundImageClose = `url('/close.svg')`;

export const ModalClose = (
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) => (
  <button
    aria-label="Close"
    className="absolute top-4 right-4 w-5 h-5 hover:bg-gray-10 flex items-center justify-center"
    {...props}
  >
    <div
      style={{ backgroundImage: backgroundImageClose }}
      className="w-4 h-4"
    />
  </button>
);
