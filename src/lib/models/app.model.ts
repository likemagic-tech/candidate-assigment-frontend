import { Dispatch } from "react";
import { User } from "./user.model";

export const Action = {
    CREATE: 'CREATE',
    UPDATE: 'UPDATE',
    DELETE: 'DELETE',
    RESET: 'RESET'
} as const;

export type ActionType = (typeof Action)[keyof typeof Action];

export interface Action<T = unknown> {
    type: ActionType;
    payload?: T
}

export type ReducerType = { users: User[], dispatch: Dispatch<Action<User>> }
