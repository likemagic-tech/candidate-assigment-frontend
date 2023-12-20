import { ChangeEvent, FormEvent, Fragment, useState } from 'react';
import { Gender } from '../../types/Gender';
import { Currency } from '../../types/Currency';
import { Person } from '../../types/Person';
import { PersonFormProps } from './PersonForm.types';
import './personForm.style.css';
import Input from '../input/Input';

const personInitialState = {
	name: '',
	birthdate: '',
	gender: null,
	salary: '',
};

const PersonForm = ({ addPerson }: PersonFormProps) => {
	const [person, setPerson] = useState<Person>(personInitialState);
	const [currency, setCurrency] = useState<Currency>(Currency.CHF);

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setPerson((prevPerson) => ({
			...prevPerson,
			[event.target.name]: event.target.value,
		}));
	};

	const handleCurrencyChange = (event: ChangeEvent<HTMLSelectElement>) => {
		setCurrency(event.target.value as Currency);
	};

	const handleOnSubmit = (event: FormEvent) => {
		event.preventDefault();
		const personToAdd = {
			...person,
			salary: `${person.salary} ${currency}`,
		};
		addPerson(personToAdd);
		setPerson(personInitialState);
	};

	return (
		<form onSubmit={handleOnSubmit}>
			<Input
				label='First Name'
				type='text'
				id='name'
				name='name'
				value={person.name}
				handleChange={handleChange}
				required
			/>
			<Input
				label='Birthday'
				type='date'
				id='birthdate'
				name='birthdate'
				value={person.birthdate}
				handleChange={handleChange}
				required
			/>
			<div>
				<label htmlFor='gender'>Gender:</label>
				{Object.values(Gender).map((gender) => (
					<Fragment key={gender}>
						<input
							type='radio'
							name='gender'
							id={gender}
							value={gender}
							checked={gender === person.gender}
							onChange={handleChange}
						/>
						<label>{gender}</label>
					</Fragment>
				))}
			</div>
			<div>
				<Input
					label='Expected Salary'
					type='number'
					name='salary'
					id='salary'
					value={person.salary}
					handleChange={handleChange}
					required
				/>
				<span>:</span>
				<select name='currency' onChange={handleCurrencyChange}>
					{Object.values(Currency).map((currency) => (
						<option key={currency} value={currency}>
							{currency}
						</option>
					))}
				</select>
			</div>
			<input type='submit' />
		</form>
	);
};

export default PersonForm;
