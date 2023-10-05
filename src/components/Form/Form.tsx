import { FC, ReactNode } from 'react'
import { Button } from '../Button'
import { TRANSLATIONS } from '../../constants'

export type FormProps = {
	className?: string
	children: ReactNode
	message?: string
	onSubmit: () => void
}

export const Form: FC<FormProps> = ({
	className = '',
	children,
	message,
	onSubmit,
}) => {
	const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		onSubmit()
	}

	return (
		<form
			className={`form ${className}`}
			onSubmit={onSubmitHandler}
			noValidate
		>
			{children}
			<div className='flex horizontal-gap-10'>
				<Button
					type='submit'
					variant='green'
				>
					{TRANSLATIONS.FORM_SUBMIT_BUTTON_LABEL}
				</Button>
				<span className='color-red'>{message}</span>
			</div>
		</form>
	)
}
