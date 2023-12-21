import { ChangeEvent, FormEvent, useState } from 'react';
import { Currency } from '../../types/Currency';
import { Person } from '../../types/Person';
import { PersonFormProps } from './PersonForm.types';
import './personForm.style.css';
import Input from '../input/Input';
import SalaryInput from '../salaryInput/SalaryInput';
import GenderInput from '../genderInput/GenderInput';

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
		<form onSubmit={handleOnSubmit} id='form'>
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
			<GenderInput personGender={person.gender} handleChange={handleChange} />
			<SalaryInput
				label='Expected Salary'
				defaultCurrency={Currency.CHF}
				name='salary'
				value={person.salary}
				handleChange={handleChange}
			/>
			<input type='submit' className='submit-btn' />
		</form>
	);
};

export default PersonForm;
