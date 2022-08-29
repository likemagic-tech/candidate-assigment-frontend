import React from 'react';
import { Content } from '../../common/enums/Content';
import './Header.css'

interface HeaderInterface {
  redirect: (button: Content) => void
}

export const Header: React.FC<HeaderInterface> = ({redirect}) => {
  return (
    <header>
      <h1>HR - company salary information</h1>
      <div>
        <button onClick={()=>redirect(Content.list)}>List</button>
        <button onClick={()=>redirect(Content.add)}>Add employee</button>
      </div>
    </header>
  );
};