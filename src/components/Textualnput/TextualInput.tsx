import { FC } from 'react'

export interface TextualInputProps {
	className?: string
	id: string
	label: string
	required: boolean
	value: string
	onChange: (value: string) => void
}

export const TextualInput: FC<TextualInputProps> = ({
	className = '',
	id,
	label,
	required,
	value,
	onChange,
}) => {
	return (
		<div className={`textual-input ${className}`}>
			<label htmlFor={id}>
				{label}: {required && <span className='text-warning'>*</span>}
			</label>
			<input
				id={id}
				type='text'
				value={value}
				onChange={(e) => onChange(e.target.value)}
			/>
		</div>
	)
}
