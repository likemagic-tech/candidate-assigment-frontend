import { FC } from 'react'
import { NumericalInput } from '../NumericalInput'
import { SelectInput } from '../SelectInput'
import { CurrencyEnum, SalaryAmountType } from '../../types'

export interface SalaryProps {
	amount: SalaryAmountType
	className?: string
	currency: CurrencyEnum
	currencyOptions: CurrencyOption[]
	id: string
	label: string
	onAmountChange: (amount: number) => void
	onCurrencyChange: (currency: CurrencyEnum) => void
}

export interface CurrencyOption {
	label: string
	value: string
}

export const Salary: FC<SalaryProps> = ({
	amount,
	className = '',
	currency,
	currencyOptions,
	id,
	label,
	onAmountChange,
	onCurrencyChange,
}) => {
	return (
		<div className={`salary ${className}`}>
			<NumericalInput
				id={id}
				className={className}
				label={label}
				required
				value={amount}
				onChange={onAmountChange}
			/>
			<SelectInput
				options={currencyOptions}
				value={currency}
				onChange={(currency) => onCurrencyChange(currency as CurrencyEnum)}
			/>
		</div>
	)
}
