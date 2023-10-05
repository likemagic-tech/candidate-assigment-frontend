export const isValidTwoDecimalNumber = (value: string) => {
	const regex = /^\d*\.?\d{0,2}$/
	return regex.test(value)
}
