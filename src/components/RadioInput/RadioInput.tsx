import { FC } from 'react'
import { GenderEnum, InputOptionType } from '../../types'

type RadioInputProps = {
	buttons: InputOptionType[]
	className?: string
	id: string
	label: string
	required?: boolean
	value: string
	onChange: (value: GenderEnum) => void
}

export const RadioInput: FC<RadioInputProps> = ({
	buttons,
	className = '',
	label,
	required,
	value,
	onChange,
}) => {
	return (
		<div className={`radio ${className}`}>
			{label}: {!!required && <span className='text-warning'>*</span>}
			{buttons.map((button, index) => (
				<div
					key={index}
					className='flex align-center'
				>
					<input
						id={button.value}
						checked={button.value === value}
						type='radio'
						value={button.value}
						onChange={(e) => onChange(e.target.value as GenderEnum)}
					/>
					<label htmlFor={button.value}>{button.label}</label>
				</div>
			))}
		</div>
	)
}
