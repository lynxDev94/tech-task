import { ButtonType } from "./button.types";

const Button = ({ children, onClick, className }: ButtonType) => {
  return (
    <button
      onClick={onClick}
      className={`bg-[#1DE9B6] text-black font-bold px-6 py-2 rounded-sm cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
