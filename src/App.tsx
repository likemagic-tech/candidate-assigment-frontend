import { useReducer } from 'react';
import './App.css';
import { EmptyState } from './lib/components/empty-state';
import { UserForm } from './lib/components/user-form';
import { UsersTable } from './lib/components/users-table';
import { UsersContext, initialUsersState, usersReducer } from './lib/store';

function App() {
  const [users, dispatch] = useReducer(usersReducer, initialUsersState);

  return (
    <UsersContext.Provider value={{users, dispatch}}>
      <UserForm />
      {
        users.length ? <UsersTable /> : <EmptyState/>
      }
    </UsersContext.Provider>
  );
}

export default App;
