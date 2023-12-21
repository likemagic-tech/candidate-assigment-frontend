import { ChangeEvent } from 'react';
import Input from '../input/Input';
import { SalaryInputProps } from './SalaryInput.types';
import { Currency } from '../../types/Currency';
import './salaryInput.style.css';

const SalaryInput = ({
	value,
	handleChange,
	defaultCurrency,
	label,
	name,
}: SalaryInputProps) => {
	const handleChangeAmount = (event: ChangeEvent<HTMLInputElement>) => {
		const newValue = `${event.target.value} ${
			value.split(' ')[1] || defaultCurrency
		}`;

		handleChange({
			...event,
			target: {
				...event.target,
				value: newValue,
				name: name,
			},
		});
	};

	const handleCurrencyChange = (event: ChangeEvent<HTMLSelectElement>) => {
		const newValue = `${value.split(' ')[0]} ${
			event.target.value || defaultCurrency
		}`;

		handleChange({
			...event,
			target: {
				...event.target,
				value: newValue,
				name: name,
			},
		});
	};

	return (
		<div className='salary'>
			<Input
				label={label}
				type='number'
				name='salary'
				id='salary'
				value={value.split(' ')[0]}
				handleChange={handleChangeAmount}
				required
			/>
			<span>:</span>
			<select
				name='currency'
				onChange={handleCurrencyChange}
				value={value.split(' ')[1] || defaultCurrency}
			>
				{Object.values(Currency).map((currency) => (
					<option key={currency} value={currency}>
						{currency}
					</option>
				))}
			</select>
		</div>
	);
};

export default SalaryInput;
