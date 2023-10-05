import { useCallback, useState } from 'react'
import {
	CurrencyEnum,
	GenderEnum,
	InputOptionType,
	SalaryAmountType,
} from '../../types'
import {
	BIRTHDATE_FORMAT,
	GENDER_SELECT_OPTIONS,
	PERSON_DEFAULT_DATA,
	SALARY_CURRENCY_OPTIONS,
	TRANSLATIONS,
} from '../../constants'
import { usePersonsContext } from '../../context/PersonsContext'
import { generateId } from '../../util/generateId'

export const usePersonForm = () => {
	const { addPerson } = usePersonsContext()
	const [birthdate, setBirthdate] = useState<string>(
		PERSON_DEFAULT_DATA.birthdate
	)
	const [gender, setGender] = useState<GenderEnum>(PERSON_DEFAULT_DATA.gender)
	const [name, setName] = useState<string>(PERSON_DEFAULT_DATA.name)
	const genderSelectOptions: InputOptionType[] = GENDER_SELECT_OPTIONS
	const [salaryAmount, setSalaryAmount] = useState<SalaryAmountType>(
		PERSON_DEFAULT_DATA.salary.amount
	)
	const [salaryCurrency, setSalaryCurrency] = useState<CurrencyEnum>(
		PERSON_DEFAULT_DATA.salary.currency
	)
	const salaryCurrencyOptions = SALARY_CURRENCY_OPTIONS
	const today = new Intl.DateTimeFormat(BIRTHDATE_FORMAT).format(new Date())
	const [validationMessage, setValidationMessage] = useState<string>('')

	const isFormValid = useCallback(() => {
		return !name || !birthdate || !gender || !salaryAmount || !salaryCurrency
	}, [name, birthdate, gender, salaryAmount, salaryCurrency])

	const resetForm = () => {
		setBirthdate(PERSON_DEFAULT_DATA.birthdate)
		setGender(PERSON_DEFAULT_DATA.gender)
		setName(PERSON_DEFAULT_DATA.name)
		setSalaryAmount(PERSON_DEFAULT_DATA.salary.amount)
		setSalaryCurrency(PERSON_DEFAULT_DATA.salary.currency)
		setValidationMessage(TRANSLATIONS.PERSON_FORM_VALIDATION_NO_MESSAGE)
	}

	const onAddPerson = useCallback(() => {
		if (isFormValid()) {
			setValidationMessage(TRANSLATIONS.PERSON_FORM_VALIDATION_ERROR_MESSAGE)
			return
		}

		addPerson({
			id: generateId(),
			name,
			birthdate,
			gender,
			salary: { amount: salaryAmount, currency: salaryCurrency },
		})

		resetForm()
	}, [
		name,
		birthdate,
		gender,
		salaryAmount,
		salaryCurrency,
		addPerson,
		isFormValid,
	])

	return {
		name,
		birthdate,
		gender,
		genderSelectOptions,
		salaryAmount,
		salaryCurrency,
		salaryCurrencyOptions,
		today,
		validationMessage,
		onAddPerson,
		setName,
		setBirthdate,
		setGender,
		setSalaryAmount,
		setSalaryCurrency,
	}
}
