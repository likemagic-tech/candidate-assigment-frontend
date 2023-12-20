import { ChangeEvent, ChangeEventHandler } from 'react';
import { Currency } from '../../types/Currency';

export interface SalaryInputProps {
	value: string;
	handleChange: (
		event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
	) => void;
	defaultCurrency: Currency;
	label: string;
	name: string;
}
