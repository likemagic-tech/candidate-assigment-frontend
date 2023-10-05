export type PersonType = {
	birthdate: string
	gender: GenderEnum
	id: string
	name: string
	salary: SalaryType
}

export type SalaryType = {
	amount: SalaryAmountType
	currency: CurrencyEnum
}

export type SalaryAmountType = number | null

export type InputOptionType = {
	label: string
	value: string
}

export enum CurrencyEnum {
	CHF = 'CHF',
	EUR = 'EUR',
}

export enum GenderEnum {
	FEMALE = 'female',
	MALE = 'male',
	UNISEX = 'unisex',
}

export type ColumnType = {
	label: string
	value: string
}
