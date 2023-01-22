import { createFeatureSelector, createSelector } from '@ngrx/store';

import { User } from '../auth/auth.model';

namespace UserState {
    export const state = createFeatureSelector<User>('user');
}

export namespace FromUserState {
    export const user = createSelector(UserState.state, (state) => state);
}
