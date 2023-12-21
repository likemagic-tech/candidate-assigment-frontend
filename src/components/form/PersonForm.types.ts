import { Person } from '../../types/Person';

export interface PersonFormProps {
	addPerson: (person: Person) => void;
}
