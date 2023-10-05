import { FC } from 'react'
import { PersonForm } from '../../components/PersonForm'
import { PersonsProvider } from '../../context/PersonsContext'
import { PersonsTable } from '../../components/PersonsTable'

export const Persons: FC = () => {
	return (
		<div className='inline-block padding-20'>
			<PersonsProvider>
				<div className='flex flex-column vertical-gap-20'>
					<PersonForm />
					<PersonsTable />
				</div>
			</PersonsProvider>
		</div>
	)
}
