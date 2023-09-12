import { FunctionComponent, useContext } from "react";
import { UsersContext } from "../../store";
import { UserTableRow } from "./user-row";
import './users-table.css';

export const UsersTable: FunctionComponent = () => {
    const { users } = useContext(UsersContext);

    return <table>
        <caption>Users</caption>
        <thead>
            <tr>
                <th className="table-header-user-name">Name</th>
                <th className="table-header-user-gender">Gender</th>
                <th className="table-header-user-birthdate">Birthdate</th>
                <th className="table-header-user-salary">Salary</th>
                <th className="table-header-user-actions">Actions</th>
            </tr>
        </thead>
        <tbody>
            {
                users.map(user => <UserTableRow user={user} key={user.id}/>)
            }
        </tbody>
    </table>
}
