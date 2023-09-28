import React from "react";

import './personList.css'

import { PersonTableProps } from "../../model/Person";

const PersonList = ({ persons, onDeletePerson }: PersonTableProps) => {
    return persons.length ? (
        <div className="persons-list">
            <h2>Persons List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Birthdate</th>
                        <th>Gender</th>
                        <th>Salary</th>
                    </tr>
                </thead>
                <tbody>
                    {persons.map((person, index) => (
                        <tr key={index}>
                            <td>{person.name}</td>
                            <td>{person.birthdate}</td>
                            <td>{person.gender}</td>
                            <td>{person.salary.amount}{' '}{person.salary.currency}</td>
                            <td>
                                <button onClick={() => onDeletePerson(index)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    ) : (
        <div className="persons-list">There is no person added. Please add new one through the form.</div>
    );
}

export default PersonList