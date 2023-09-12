import { FunctionComponent, useContext } from "react";
import { Action, User, UserProp } from "../../models";
import { UsersContext } from "../../store";

export const UserTableRow: FunctionComponent<UserProp> = ({user}) => {

    const { dispatch } = useContext(UsersContext);

    const handleRemove = (user: User) => {
        dispatch({
            type: Action.DELETE,
            payload: user
        })
    }

    return <tr>
        <td className="table-cell-user-name">{ user.name }</td>
        <td className="table-cell-user-gender">{ user.gender }</td>
        {/*
            TODO: Birthdate should be handled in store selector where localisation
            should be used from the user location (geoIP, user lang preference...)
            TICKET-XXX
        */}
        <td className="table-cell-user-birthdate">{
            user.birthdate ? user.birthdate.toLocaleDateString('en-US', {
                weekday: 'short',
                day: '2-digit',
                month: 'short',
                year: 'numeric'
            }) : null
        }</td>
        <td className="table-cell-user-salary">{ user.salary } {user.currency}</td>
        <td className="table-cell-user-actions">
            <button onClick={() => handleRemove(user)} type="button">Delete</button>
        </td>
    </tr>
}
