import {
	FC,
	ReactNode,
	createContext,
	useCallback,
	useContext,
	useState,
} from 'react'
import { PersonType } from '../types'

type PersonsContextProps = {
	children: ReactNode
}

type PersonsContextValue = {
	persons: PersonType[]
	addPerson: (person: PersonType) => void
	deletePerson: (personId: string) => void
}

const PersonsContext = createContext<PersonsContextValue | null>(null)

export const usePersonsContext = (): PersonsContextValue => {
	const context = useContext(PersonsContext)
	if (!context) {
		throw new Error('usePersons must be used within a PersonProvider')
	}
	return context
}

export const PersonsProvider: FC<PersonsContextProps> = ({ children }) => {
	const [persons, setPersons] = useState<PersonType[]>([])

	const addPerson = useCallback((person: PersonType) => {
		setPersons((prevPersons) => [...prevPersons, person])
	}, [])

	const deletePerson = useCallback((personId: string) => {
		setPersons((prevPersons) =>
			prevPersons.filter((person) => person.id !== personId)
		)
	}, [])

	return (
		<PersonsContext.Provider value={{ persons, addPerson, deletePerson }}>
			{children}
		</PersonsContext.Provider>
	)
}
