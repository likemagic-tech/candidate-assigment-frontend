import React from "react";

export interface DropdownProps {
  value: string;
  options: { label: string; value: string }[];
  onChange: (value: string) => void;
}

const Dropdown = ({ value, options, onChange }: DropdownProps) => {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)}>
      {options.map((item, index) => (
        <option key={index} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
