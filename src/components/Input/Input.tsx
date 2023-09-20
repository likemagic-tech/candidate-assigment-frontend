import React, { HTMLInputTypeAttribute } from "react";

export interface InputProps {
  className?: string;
  label: string;
  required?: boolean;
  type: HTMLInputTypeAttribute;
  value: string;
  max?: string;
  onChange: (value: string) => void;
}

const Input = ({
  className,
  label,
  required,
  onChange,
  ...rest
}: InputProps) => {
  return (
    <div className={className}>
      <label htmlFor="">
        {label} {!!required && <span className="text-red">*</span>} :
      </label>
      <input onChange={(e) => onChange(e.target.value)} {...rest} />
    </div>
  );
};

export default Input;
