import { CurrencyEnum, GenderEnum, PersonType } from '../types'

export const TRANSLATIONS = {
	CURRENCY_CHF_LABEL: 'CHF',
	CURRENCY_EUR_LABEL: 'EUR',
	FORM_BIRTHDATE_INPUT_LABEL: 'Birthdate',
	FORM_GENDER_INPUT_LABEL: 'Gender',
	FORM_NAME_INPUT_LABEL: 'Name',
	FORM_SALARY_INPUT_LABEL: 'Expected salary',
	FORM_SUBMIT_BUTTON_LABEL: 'Submit',
	GENDER_FEMALE_LABEL: 'female',
	GENDER_MALE_LABEL: 'male',
	GENDER_UNISEX_LABEL: 'unisex',
	PERSON_FORM_VALIDATION_ERROR_MESSAGE: 'Please, fulfill the form completely.',
	PERSON_FORM_VALIDATION_NO_MESSAGE: '',
	TABLE_COLUMN_BIRTHDATE_LABEL: 'Birthdate',
	TABLE_COLUMN_DELETE_LABEL: '',
	TABLE_COLUMN_GENDER_LABEL: 'Gender',
	TABLE_COLUMN_NAME_LABEL: 'Name',
	TABLE_COLUMN_SALARY_LABEL: 'Expected salary',
	TABLE_PLACEHOLDER_TEXT: 'No users added yet.',
}

export const PERSON_DEFAULT_DATA: PersonType = {
	birthdate: '',
	gender: GenderEnum.MALE,
	id: '',
	name: '',
	salary: {
		amount: null,
		currency: CurrencyEnum.CHF,
	},
}

export const GENDER_SELECT_OPTIONS = [
	{
		label: TRANSLATIONS.GENDER_MALE_LABEL,
		value: GenderEnum.MALE,
	},
	{
		label: TRANSLATIONS.GENDER_FEMALE_LABEL,
		value: GenderEnum.FEMALE,
	},
	{
		label: TRANSLATIONS.GENDER_UNISEX_LABEL,
		value: GenderEnum.UNISEX,
	},
]

export const SALARY_CURRENCY_OPTIONS = [
	{
		label: TRANSLATIONS.CURRENCY_CHF_LABEL,
		value: CurrencyEnum.CHF,
	},
	{
		label: TRANSLATIONS.CURRENCY_EUR_LABEL,
		value: CurrencyEnum.EUR,
	},
]

export const BIRTHDATE_FORMAT = 'en-CA'

export const TABLE_COLUMNS = [
	{ label: TRANSLATIONS.TABLE_COLUMN_NAME_LABEL, value: 'name' },
	{ label: TRANSLATIONS.TABLE_COLUMN_BIRTHDATE_LABEL, value: 'birthdate' },
	{ label: TRANSLATIONS.TABLE_COLUMN_GENDER_LABEL, value: 'gender' },
	{ label: TRANSLATIONS.TABLE_COLUMN_SALARY_LABEL, value: 'salary' },
	{ label: TRANSLATIONS.TABLE_COLUMN_DELETE_LABEL, value: 'delete' },
]
