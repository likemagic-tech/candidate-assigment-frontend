import { ButtonHTMLAttributes, FC } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant: ButtonVariant
}
type ButtonVariant = 'green' | 'red'

export const Button: FC<ButtonProps> = ({
	children,
	type,
	variant,
	onClick,
}) => {
	return (
		<button
			className={`button border-${variant} color-${variant}`}
			type={type}
			onClick={onClick}
		>
			{children}
		</button>
	)
}
