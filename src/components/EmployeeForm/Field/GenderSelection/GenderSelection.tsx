import React from "react"
import { Gender } from "../../../../common/enums/Gender"
import { Radio } from "../Radio/Radio"

interface GenderSelectionInterface {
    value: string | number
    onChange: (value: Gender) => void
}

export const GenderSelection: React.FC<GenderSelectionInterface> = ({ value, onChange }) => {
    return (
        <>
            <Radio onChange={(e)=>onChange(Gender.female)} placeholder={'Female'} employeeKey={Gender.female} isSelected={value === Gender.female} value={Gender.female}/>

            <Radio onChange={(e)=>onChange(Gender.male)} placeholder={'Male'} employeeKey={Gender.male} isSelected={value === Gender.male} value={Gender.male} />

            <Radio onChange={(e)=>onChange(Gender.unisex)} placeholder={'Unisex'} employeeKey={Gender.unisex} isSelected={value === Gender.unisex} value={Gender.unisex} />
        </>)
}