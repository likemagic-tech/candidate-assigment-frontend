import { Fragment, useState } from 'react';
import PersonForm from './form/PersonForm';
import PersonList from './table/PersonList';
import { Person } from '../types/Person';

const Persons = () => {
	const [persons, setPersons] = useState<Person[]>([]);

	const addPerson = (person: Person) => {
		setPersons([...persons, person]);
	};

	return (
		<Fragment>
			<PersonForm addPerson={addPerson} />
			<PersonList persons={persons} />
		</Fragment>
	);
};

export default Persons;
