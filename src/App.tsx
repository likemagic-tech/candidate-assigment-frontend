import React, { useState } from 'react';

import './App.css';

import { Person } from './model/Person';

import PersonForm from './components/PersonForm/PersonForm';
import PersonList from './components/PersonList/PersonList';

const App = () => {
  const [persons, setPersons] = useState<Person[]>([]);

  const handleAddPerson = (person: Person) => {
    setPersons([...persons, { ...person }]);
  };

  const handleDeletePerson = (index: number) => {
    const updatedPersons = [...persons];

    updatedPersons.splice(index, 1);

    setPersons(updatedPersons);
  };

  return (
    <div className='container'>
      <PersonForm onAddPerson={handleAddPerson} />
      <PersonList persons={persons} onDeletePerson={handleDeletePerson} />
    </div>
  );
};

export default App;
