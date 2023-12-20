import { ChangeEvent, FormEvent, useState } from 'react';
import { Gender } from '../../types/Gender';
import { Currency } from '../../types/Currency';
import { Person } from '../../types/Person';
import { PersonFormProps } from './PersonForm.types';
import './personForm.style.css';
import Input from '../input/Input';
import SalaryInput from '../salaryInput/SalaryInput';

const personInitialState = {
	name: '',
	birthdate: '',
	gender: null,
	salary: '',
};

const PersonForm = ({ addPerson }: PersonFormProps) => {
	const [person, setPerson] = useState<Person>(personInitialState);

	const handleChange = (
		event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
	) => {
		setPerson((prevPerson) => ({
			...prevPerson,
			[event.target.name]: event.target.value,
		}));
	};

	const handleOnSubmit = (event: FormEvent) => {
		event.preventDefault();
		addPerson(person);
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
					<div key={gender}>
						<input
							type='radio'
							name='gender'
							id={gender}
							value={gender}
							checked={gender === person.gender}
							onChange={handleChange}
						/>
						<label>{gender}</label>
					</div>
				))}
			</div>
			<div>
				<SalaryInput
					label='Expected Salary'
					defaultCurrency={Currency.CHF}
					name='salary'
					value={person.salary}
					handleChange={handleChange}
				/>
			</div>
			<input type='submit' />
		</form>
	);
};

export default PersonForm;
