import { FC } from 'react'
import { InputOptionType } from '../../types'

type SelectInputProps = {
	className?: string
	options: InputOptionType[]
	value: string
	onChange: (value: string) => void
}

export const SelectInput: FC<SelectInputProps> = ({
	className = '',
	options,
	value,
	onChange,
}) => {
	return (
		<select
			className={`select ${className}`}
			value={value}
			onChange={(e) => onChange(e.target.value)}
		>
			{options.map((item, index) => (
				<option
					key={index}
					value={item.value}
				>
					{item.label}
				</option>
			))}
		</select>
	)
}
