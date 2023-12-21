import { PersonListProps } from './PersonList.types';
import EmptyPersonList from './EmptyPersonList';
import { Person } from '../../types/Person';

const PersonList = ({ persons, removePerson }: PersonListProps) => {
	const handleRemove = (person: Person) => {
		removePerson(person);
	};

	const formatDate = (date: string) => {
		const newDate = new Date(date);
		const options: Intl.DateTimeFormatOptions = {
			weekday: 'short',
			month: 'short',
			day: 'numeric',
			year: 'numeric',
		};

		return newDate.toLocaleDateString('en-US', options).replaceAll(',', '');
	};

	return (
		<div className='person-list'>
			{persons.length > 0 ? (
				<div className='row'>
					<h3>User</h3>
					<table>
						<thead>
							<tr>
								<th>Name</th>
								<th>Gender</th>
								<th>Birthdate</th>
								<th>Salary</th>
							</tr>
						</thead>
						<tbody>
							{persons.map((person) => (
								<tr key={`${person.name}`}>
									<td>{person.name}</td>
									<td>{person.gender}</td>
									<td>{formatDate(person.birthdate)}</td>
									<td>{person.salary}</td>
									<td>
										<button
											className='remove-btn'
											type='button'
											onClick={() => handleRemove(person)}
										>
											Delete
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			) : (
				<EmptyPersonList />
			)}
		</div>
	);
};

export default PersonList;
