import { FC } from 'react'

export interface DateInputProps {
	className?: string
	id: string
	label: string
	max: string
	required: boolean
	value: string
	onChange: (value: string) => void
}

export const DateInput: FC<DateInputProps> = ({
	className = '',
	id,
	label,
	max,
	required,
	value,
	onChange,
}) => {
	return (
		<div className={`date ${className}`}>
			<label htmlFor={id}>
				{label}: {!!required && <span className='text-warning'>*</span>}
			</label>
			<input
				id={id}
				max={max}
				required={required}
				type='date'
				value={value}
				onChange={(e) => onChange(e.target.value)}
			/>
		</div>
	)
}
