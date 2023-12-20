import { PersonListProps } from './PersonList.types';
import EmptyPersonList from './EmptyPersonList';
import { Person } from '../../types/Person';

const PersonList = ({ persons, removePerson }: PersonListProps) => {
	const handleRemove = (person: Person) => {
		removePerson(person);
	};

	return (
		<div>
			{persons.length > 0 ? (
				<div>
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
							{persons.map((person, index) => (
								<tr key={`${person.name} ${index}`}>
									<td>{person.name}</td>
									<td>{person.gender}</td>
									<td>{person.birthdate}</td>
									<td>{person.salary}</td>
									<td>
										<button type='button' onClick={() => handleRemove(person)}>
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
