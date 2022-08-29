import React from "react"

interface InputInterface {
    value: string | number
    type: string
    onChange: (value: string | number) => void
    employeeKey: string
    placeholder: string
}

export const Input: React.FC<InputInterface> = ({ value, type, onChange, employeeKey, placeholder }) => {
    return (
        <>
            <input
                value={value}
                className="form-field"
                type={type}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                name={employeeKey}
            />
        </>)
}