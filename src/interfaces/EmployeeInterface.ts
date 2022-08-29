import { Gender } from "../common/enums/Gender"

export interface EmployeeInterface {
    firstName: string
    lastName: string
    salary: {
        amount: number
        currency: string
    }
    gender: Gender
    birthday: string
}