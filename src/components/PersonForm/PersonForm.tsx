import { FC } from 'react'
import { DateInput } from '../DateInput'
import { Form } from '../Form'
import { RadioInput } from '../RadioInput'
import { Salary } from '../Salary'
import { TextualInput } from '../Textualnput'
import { usePersonForm } from './usePersonForm'
import { TRANSLATIONS } from '../../constants'

export const PersonForm: FC = () => {
	const {
		birthdate,
		gender,
		genderSelectOptions,
		name,
		salaryAmount,
		salaryCurrency,
		salaryCurrencyOptions,
		today,
		validationMessage,
		onAddPerson,
		setBirthdate,
		setGender,
		setName,
		setSalaryAmount,
		setSalaryCurrency,
	} = usePersonForm()

	return (
		<Form
			className='flex flex-column vertical-gap-20'
			onSubmit={onAddPerson}
			message={validationMessage}
		>
			<TextualInput
				id='name'
				className='flex horizontal-gap-10'
				label={TRANSLATIONS.FORM_NAME_INPUT_LABEL}
				required
				value={name}
				onChange={setName}
			/>
			<DateInput
				id='birthdate'
				className='flex horizontal-gap-10'
				label={TRANSLATIONS.FORM_BIRTHDATE_INPUT_LABEL}
				max={today}
				required
				value={birthdate}
				onChange={setBirthdate}
			/>
			<RadioInput
				id='gender'
				className='flex horizontal-gap-10'
				buttons={genderSelectOptions}
				label={TRANSLATIONS.FORM_GENDER_INPUT_LABEL}
				value={gender}
				onChange={setGender}
			/>
			<Salary
				id='expectedSalary'
				className='flex horizontal-gap-10'
				amount={salaryAmount}
				currency={salaryCurrency}
				currencyOptions={salaryCurrencyOptions}
				label={TRANSLATIONS.FORM_SALARY_INPUT_LABEL}
				onAmountChange={setSalaryAmount}
				onCurrencyChange={setSalaryCurrency}
			/>
		</Form>
	)
}
