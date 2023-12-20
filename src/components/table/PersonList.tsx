import { PersonListProps } from './PersonList.types';

const PersonList = ({ persons }: PersonListProps) => {
	return (
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
					<tr>
						<td>Lorem Name</td>
						<td>Lorem Gender</td>
						<td>Lorem Birthdate</td>
						<td>Lorem Salary</td>
						<td>
							<button>Delete</button>
						</td>
					</tr>
					<tr>
						<td>Lorem Name</td>
						<td>Lorem Gender</td>
						<td>Lorem Birthdate</td>
						<td>Lorem Salary</td>
						<td>
							<button>Delete</button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default PersonList;
