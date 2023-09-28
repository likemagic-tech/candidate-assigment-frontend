import { ChangeEvent } from "react";
import "./inputField.css";
import { Person } from "../../model/Person";

export interface InputFieldProps {
  type: string,
  label: string,
  value: string,
  required?: boolean,
  onChange: (value: string, name: string) => void,
}

const InputField = ({ type, label, value, required, onChange }: InputFieldProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value, label)
  }

  return (
    <div className="inputField">
      <label>{label}:{required && ' *'}</label>
      {type === 'radio' ? (
        <div>
          <input
            type={type}
            id={`${label}-male`}
            name={label}
            value='male'
            checked={value === 'male'}
            onChange={handleChange}
          />
          <label htmlFor={`${label}-male`}>male</label>

          <input
            type={type}
            id={`${label}-female`}
            name={label}
            value='female'
            checked={value === 'female'}
            onChange={handleChange}
          />
          <label htmlFor={`${label}-female`}>female</label>
          <input
            type={type}
            id={`${label}-unisex`}
            name={label}
            value='unisex'
            checked={value === 'unisex'}
            onChange={handleChange}
          />
          <label htmlFor={`${label}-unisex`}>unisex</label>
        </div>
        // Didn't implemented, but here would be a place for handling errors
        // {errorMessage && <span>{errorMessage}</span>}
      ) : (
        <input
          type={type}
          value={value}
          required={required}
          onChange={handleChange}
        />
        // Didn't implemented, but here would be a place for handling errors
        // {errorMessage && <span>{errorMessage}</span>}
      )}
    </div>
  )


};

export default InputField;