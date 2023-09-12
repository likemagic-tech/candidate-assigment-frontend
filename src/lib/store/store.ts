import { createContext } from 'react';
import { Action, Currency, ReducerType, User } from '../models';

/**
 * For the purpose of this assignment everything is in one file.
 * In real-world app, there should be a folder for each feature
 * containing: actions, reducers, effects, selectors and facade.
 *
 * store/
    ├── users/
    │   ├── user.actions.ts
    │   ├── user.effects.ts
    │   ├── user.facade.ts
    │   ├── user.reducer.ts
    │   ├── user.selectors.ts
    │   └── index.ts
    ├── feature-1/
    │   ├── feature-1.actions.ts
    │   ├── feature-1.effects.ts
    │   ├── feature-1.facade.ts
    │   ├── feature-1.reducer.ts
    │   ├── feature-1.selectors.ts
    │   └── index.ts
    ├── app.store.ts
    └── index.ts
 */


export const usersReducer: (state: User[], {type, payload}: Action<User>) => any =
    (state, {type, payload}) => {
        switch(type) {
            case Action.CREATE:
                return [...state, payload];
            case Action.DELETE:
                return state.filter(user => user.id !== payload?.id);
            default:
                return state;
            // TODO: TICKET-XXX - Add missing actions.
        }
    }

export const initialUsersState: User[] = [];

export const initialUserState: User = {
    id: '',
    name: '',
    gender: undefined,
    birthdate: null,
    salary: 0,
    currency: Currency.EUR
}

export const UsersContext = createContext({} as ReducerType);
