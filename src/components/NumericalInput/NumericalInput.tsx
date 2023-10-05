import { FC, useEffect, useState } from 'react'
import { isValidTwoDecimalNumber } from '../../util/isValidTwoDecimalNumber'

export interface NumericalInputProps {
	className?: string
	id: string
	label: string
	required: boolean
	step?: number
	value: number | null
	onChange: (value: number) => void
}

export const NumericalInput: FC<NumericalInputProps> = ({
	className = '',
	step = 0.01,
	id,
	label,
	required,
	value,
	onChange,
}) => {
	const [stringValue, setValue] = useState<string>(value ? `${value}` : '')

	useEffect(() => {
		setValue(value ? `${value}` : '')
	}, [value])

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = event.target.value

		if (newValue === '' || isValidTwoDecimalNumber(newValue)) {
			setValue(newValue)
			const numValue = Number(newValue)
			if (!isNaN(numValue)) {
				onChange(numValue)
			}
		}
	}

	return (
		<div className={`numerical-input ${className}`}>
			<label htmlFor={id}>
				{label}: {required && <span className='text-warning'>*</span>}
			</label>
			<input
				id={id}
				type='number'
				step={step}
				value={stringValue}
				onChange={handleChange}
				placeholder='0.00'
			/>
		</div>
	)
}
