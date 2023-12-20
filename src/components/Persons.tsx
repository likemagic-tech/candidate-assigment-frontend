import { useState } from 'react';
import PersonForm from './form/PersonForm';
import PersonList from './table/PersonList';
import { Person } from '../types/Person';

const Persons = () => {
	const [persons, setPersons] = useState<Person[]>([]);

	const addPerson = (person: Person) => {
		setPersons([...persons, person]);
	};

	const removePerson = (personToRemove: Person) => {
		setPersons([...persons.filter((person) => person !== personToRemove)]);
	};

	return (
		<>
			<PersonForm addPerson={addPerson} />
			<PersonList persons={persons} removePerson={removePerson} />
		</>
	);
};

export default Persons;
