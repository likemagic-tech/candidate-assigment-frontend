import React, { useEffect, useState } from 'react';
import { EmployeeInterface } from '../../interfaces/EmployeeInterface';
import './EmployeeList.css'

const EmployeeList = () => {

  const [employees, setEmployees] = useState<EmployeeInterface[]>([])
  const [refresh, setRefresh] = useState<boolean>(true)

  useEffect(() => {
    if(refresh) {
      setEmployees(JSON.parse(localStorage.getItem('employees') || '[]'));
      setRefresh(false)
    }
  }, [refresh])

  const deleteEmployee = (indexToRemove: number) => {
    const oldStorage = JSON.parse(localStorage.getItem('employees') || '[]');
    const newStorage = [...oldStorage.slice(0, indexToRemove), ...oldStorage.slice(indexToRemove + 1)];
    localStorage.setItem("employees", JSON.stringify(newStorage))
    setRefresh(true);
  }

  return (
    <div className={'list-container'}>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Birthdate</th>
            <th>Salary</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {employees.map(({firstName, lastName, gender, birthday, salary}, index) => {
            return (
              <tr key={`${firstName}${lastName}`}>
                <td>{`${firstName} ${lastName}`}</td>
                <td>{gender}</td>
                <td>{birthday}</td>
                <td>{`${salary.currency} ${salary.amount}`}</td>
                <td><button onClick={()=>deleteEmployee(index)} className="form-field danger">Delete</button></td>
              </tr>)
          })}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;