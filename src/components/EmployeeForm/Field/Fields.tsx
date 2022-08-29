import React from "react";
import { Currency } from "../../../common/enums/Currency";
import { Gender } from "../../../common/enums/Gender";
import { EmployeeInterface } from "../../../interfaces/EmployeeInterface";
import { GenderSelection } from "./GenderSelection/GenderSelection";
import { Input } from "./Input/Input";
import { Select } from "./Select/Select";

interface FieldsInterface {
    employee: EmployeeInterface
    onChange: (employeeKey: string, value: string | number | {amount: number, currency: string}) => void
}

export const Fields: React.FC<FieldsInterface> = ({ employee, onChange }) => {
    return (
        <>
            <Input value={employee.firstName} type={'string'} placeholder={'First name'} employeeKey={'firstName'} onChange={(value: string | number)=>onChange('firstName', value)}/>

            <Input value={employee.lastName} type={'string'} placeholder={'Last name'} employeeKey={'lastName'} onChange={(value: string | number)=>onChange('lastName', value)}/>

            <Input value={employee.birthday} type={'date'} placeholder={'Birthday'} employeeKey={'birthday'} onChange={(value: string | number)=>onChange('birthday', value)} />

            <GenderSelection value={employee.gender} onChange={(value: Gender)=>onChange('gender', value)}/>

            <Input value={employee?.salary?.amount} type={'number'} placeholder={'Salary amount'} employeeKey={'salaryAmount'} onChange={( value: string |number)=>onChange('salary', {...employee.salary, amount: Number(value)})}/>
            <Select value={employee?.salary?.currency} onChange={( value: Currency) => onChange('salary', {...employee.salary, currency: value})}/>
        </>
    )
}
