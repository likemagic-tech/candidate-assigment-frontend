import React from "react"
import { Currency } from "../../../../common/enums/Currency"

interface SelectInterface {
    value: string
    onChange: (value: Currency) => void
}

export const Select: React.FC<SelectInterface> = ({ value, onChange }) => {
    return (
        <select className={'form-field'} value={value} onChange={(e)=>onChange(e.target.value as Currency)}>
          <option value={Currency.CHF}>{Currency.CHF}</option>
          <option value={Currency.EUR}>{Currency.EUR}</option>
      </select>)
}