import React from "react";

export interface RadioButtonProps {
  className?: string;
  label: string;
  required?: boolean;
  value: string | null;
  values: { label: string; value: string }[];
  onChange: (value: string) => void;
}

const RadioButton = ({
  className,
  label,
  required,
  value,
  values,
  onChange,
}: RadioButtonProps) => {
  return (
    <div className={className}>
      {label} {!!required && <span className="text-red">*</span>}:
      {values.map((item, index) => (
        <div key={index}>
          <input
            type="radio"
            id={item.value}
            value={item.value}
            onChange={(e) => onChange(e.target.value)}
            checked={item.value === value}
          />
          <label htmlFor={item.value}>{item.label}</label>
        </div>
      ))}
    </div>
  );
};

export default RadioButton;
