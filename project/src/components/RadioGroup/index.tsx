import { clsx } from "clsx";
import { forwardRef, InputHTMLAttributes } from "react";

// Types
import { RadioOptions } from "@/types";

interface RadioGroupProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  errorMessage?: string;
  options: RadioOptions[];
}

const RadioGroup = forwardRef<HTMLInputElement, RadioGroupProps>(
  ({ label, options, errorMessage, ...rest }, ref) => (
    <fieldset>
      <legend className="text-gray-700 capitalize font-medium text-sm py-2">
        {label}
      </legend>
      <div className="rounded-lg border p-2">
        <div className="flex gap-4">
          {options.map(({ value, label, color }) => (
            <div key={value} className="flex items-center">
              <input
                id={value}
                name="radio-group"
                type="radio"
                value={value}
                data-testid={`${value}-status`}
                ref={ref}
                {...rest}
              />
              <label
                htmlFor={value}
                className={clsx(
                  "ml-2 flex cursor-pointer items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium capitalize",
                  color,
                )}
              >
                {label}
              </label>
            </div>
          ))}
        </div>
      </div>
      {errorMessage && (
        <p className="text-xs text-red-600 pt-2">{errorMessage}</p>
      )}
    </fieldset>
  ),
);

export default RadioGroup;
