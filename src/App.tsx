import React, { useState } from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import EmployeeList from './components/EmployeeList/EmployeeList';
import EmployeeForm from './components/EmployeeForm/EmployeeForm';
import { Content } from './common/enums/Content';

const App = () => {
  const [content, setContent] = useState(Content.add);

  const changeContent = (button: Content) => {
    setContent(button);
  }

  const isAddingEmployee = content === Content.add;
  const isListingEmployees = content === Content.list;
  
  return (
    <div className="App">
      <Header redirect={changeContent}/>
      {isAddingEmployee && <EmployeeForm/>}
      {isListingEmployees && <EmployeeList/>}
    </div>
  );
}

export default App