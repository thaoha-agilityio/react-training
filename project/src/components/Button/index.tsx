import { ButtonHTMLAttributes, memo } from "react";
import { clsx } from "clsx";

// Components
import { SpinnerIcon } from "../Icons";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  isLoading?: boolean;
  extraStyle?: string;
  variant?: "primary" | "secondary" | "unstyled";
}

const Button = ({
  variant = "primary",
  isLoading = false,
  disabled = false,
  extraStyle = "",
  children,
  ...rest
}: ButtonProps) => {
  const variantClass = () => {
    switch (variant) {
      case "secondary":
        return "bg-slate-100 text-zinc-800";

      case "unstyled":
        return "bg-none";

      case "primary":
      default:
        return "bg-indigo-600 text-white";
    }
  };

  const baseClass =
    "flex items-center justify-center rounded-md text-sm font-medium px-4 py-2 hover:opacity-70";

  const activeClass =
    disabled || isLoading ? "opacity-70 pointer-events-none" : "cursor-pointer";

  return (
    <button
      {...rest}
      className={clsx(baseClass, variantClass(), activeClass, extraStyle)}
      disabled={disabled}
    >
      {isLoading ? <SpinnerIcon /> : children}
    </button>
  );
};

export default memo(Button);
