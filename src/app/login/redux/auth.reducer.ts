import { createReducer, on } from '@ngrx/store';

import { User } from '../auth/auth.model';
import { AuthActions } from './auth.actions';

export namespace AuthReducer {
    const initialState: User = {
        username: '',
        sub: null,
        permissions: null,
        iat: null,
        exp: null,
    };

    const setUser = (
        state: User,
        payload: AuthActions.User.Succeeded.Payload,
    ) => {
        return { ...state, ...payload };
    };

    export const reducer = createReducer(
        initialState,
        on(AuthActions.User.Succeeded.action, setUser),
    );
}
