import React, { FormEvent, useState } from "react";

import './personForm.css';

import InputField from "../inputField/inputField";
import { Person, PersonFormProps, SalaryProps } from "../../model/Person";

const PersonForm = ({ onAddPerson }: PersonFormProps) => {
    const [person, setPerson] = useState<Person>({
        name: '',
        birthdate: '',
        gender: '',
        salary: {
            amount: '',
            currency: 'USD',
        },
    });

    const handleInputChange = (value: string, name: string) => {
        const updatedPerson: Person = { ...person };

        if (name.includes('.')) {
            const [parentName, nestedName] = name.split('.');
            const parentLowerCase = parentName.toLowerCase();
            const nestedNameLowerCase = nestedName.toLowerCase();

            if (parentLowerCase in updatedPerson) {
                const parentKey = parentLowerCase as keyof Person;
                const nestedKey = nestedNameLowerCase as keyof SalaryProps;


                (updatedPerson[parentKey] as any)[nestedKey] = value;
            }
        } else {
            // Handle non-nested properties
            (updatedPerson[name.toLowerCase() as keyof Person] as any) = value;
        }

        setPerson(updatedPerson);
    };

    const handleAddPerson = (e: FormEvent) => {
        e.preventDefault()
        onAddPerson({ ...person });
        setPerson({
            name: '',
            birthdate: '',
            gender: '',
            salary: {
                amount: '',
                currency: 'USD',
            },
        });
    };

    return (
        <div className="person-form">
            <form onSubmit={handleAddPerson}>
                <InputField
                    label="Name"
                    type="text"
                    required={true}
                    value={person.name}
                    onChange={(value, name) => handleInputChange(value, name)}
                />
                <InputField
                    label="Birthdate"
                    type="date"
                    required
                    value={person.birthdate}
                    onChange={(value, name) => handleInputChange(value, name)}
                />
                <InputField
                    label="Gender"
                    type="radio"
                    value={person.gender}
                    onChange={(value, name) => handleInputChange(value, name)}
                />
                {/* This can be a separate component */}
                <div className="salary">
                    <InputField
                        label="Salary"
                        type="number"
                        required
                        value={person.salary.amount}
                        onChange={(value) => handleInputChange(value, 'salary.amount')}
                    />
                    <div className="salary-spacing">:</div>
                    <select
                        value={person.salary.currency}
                        onChange={(e) =>
                            handleInputChange(e.target.value, 'salary.currency')
                        }
                    >
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        <option value="GBP">GBP</option>
                    </select>
                </div>
                <button>Add Person</button>
            </form>
        </div>
    );
}

export default PersonForm