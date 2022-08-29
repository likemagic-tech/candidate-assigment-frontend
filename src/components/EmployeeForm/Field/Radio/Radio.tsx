import React from "react"

interface RadioInterface {
    value: string
    onChange: (ley: string, value: string | number) => void
    employeeKey: string
    placeholder: string
    isSelected: boolean
}

export const Radio: React.FC<RadioInterface> = ({ value, isSelected, onChange, employeeKey, placeholder }) => {
    return (
        <>
            <div className="RadioButton">
                <input id={employeeKey} onChange={(e)=>onChange(employeeKey, e.target.value)} value={value} type="radio" checked={isSelected} />
                <label htmlFor={employeeKey}>{placeholder}</label>
            </div>
        </>)
}