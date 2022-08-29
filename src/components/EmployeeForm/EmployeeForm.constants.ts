import { EmployeeInterface } from "../../interfaces/EmployeeInterface"

interface employeeInputConfigurationInterface{
    type: string
    key: keyof EmployeeInterface
    placeholder: string
}

export const employeeInputConfiguration: employeeInputConfigurationInterface[] = [
    {
        type: 'string',
        key: 'firstName',
        placeholder: 'First name',
    },
    {
        type: 'string',
        key: 'lastName',
        placeholder: 'Last name',
    },
    {
        type: 'salary',
        key: 'salary',
        placeholder: 'Salary',
    },
    {
        type: 'date',
        key: 'birthday',
        placeholder: 'Date',
    },
    {
        type: 'radio',
        key: 'gender',
        placeholder: 'Gender',
    },
]