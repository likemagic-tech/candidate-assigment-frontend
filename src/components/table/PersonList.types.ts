import { Person } from '../../types/Person';

export interface PersonListProps {
	persons: Person[];
	removePerson: (person: Person) => void;
}
