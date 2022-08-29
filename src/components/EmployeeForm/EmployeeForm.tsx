import React, { useState } from 'react';
import { Gender } from '../../common/enums/Gender';
import { EmployeeInterface } from '../../interfaces/EmployeeInterface';
import './EmployeeForm.css';
import { Fields } from './Field/Fields';

const defaultEmployeeValues: EmployeeInterface = {
  firstName: '',
  lastName: '',
  salary: {
    amount: 0,
    currency: 'EUR'
  },
  gender: Gender.female,
  birthday: ''
}

const EmployeeForm: React.FC = () => {
  const [employee, setEmployee] = useState(defaultEmployeeValues)
  const [error, setError] = useState(false);

  const { firstName, lastName, birthday, salary, gender } = employee;
  const isValid = () => {
    return firstName && lastName && birthday && salary.amount && salary.currency && gender
  }

  const submitEmployee = () => {
    if (isValid()) {
      const oldStorage = JSON.parse(localStorage.getItem('employees') || '[]');
      localStorage.setItem("employees", JSON.stringify([...oldStorage, employee]));
      setEmployee(defaultEmployeeValues);
      setError(false);
    } else {
      setError(true);
    }
  }

  return (
    <div className="form-container">
      <div className="register-form">
        <Fields
          employee={employee}
          onChange={(key: string, value: string | number | { amount: number, currency: string }) => setEmployee({ ...employee, [key]: value })}
        />
        {error && <span>Error! Please fill out fields.</span>}
        <button onClick={() => submitEmployee()} className="form-field">
          Create employee
        </button>
      </div>
    </div>
  );
};

export default EmployeeForm;