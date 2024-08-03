import { clsx } from "clsx";
import { InputHTMLAttributes, LegacyRef, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  placeholder?: string;
  errorMessage?: string;
  variant?: "outline" | "fill";
}

const InputGroup = (
  { variant = "outline", errorMessage, label, id, ...rest }: InputProps,
  ref: LegacyRef<HTMLInputElement>,
) => {
  const variantClass = () => {
    switch (variant) {
      case "fill":
        return "rounded-lg bg-slate-50 ring-slate-50";

      case "outline":
      default:
        return "rounded-md ring-gray-300";
    }
  };

  const baseClass =
    "w-full h-8 outline-0 py-1.5 px-4 text-zinc-800 text-sm ring-1 focus:ring-indigo-600";

  const errorClass = errorMessage && "ring-red-600";

  return (
    <div className="flex flex-col gap-2">
      <label
        className="text-gray-700 capitalize font-medium text-sm"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        {...rest}
        ref={ref}
        id={id}
        className={clsx(baseClass, variantClass(), errorClass)}
      />
      {errorMessage && <p className="text-xs text-red-600">{errorMessage}</p>}
    </div>
  );
};

export default forwardRef(InputGroup);
