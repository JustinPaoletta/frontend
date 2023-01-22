import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from 'rxjs';

import {
    AuthActions,
    LoginSucceededPayload,
    RequestLoginPayload,
} from './auth.actions';
import { AuthService } from '../auth/auth.service';
import { AccessToken, User } from '../auth/auth.model';

@Injectable()
export class AuthEffects {
    constructor(private actions$: Actions, private authService: AuthService) {}

    loginRequested$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AuthActions.Login.Requested.action),
            exhaustMap((payload: RequestLoginPayload) =>
                this.authService.login(payload).pipe(
                    map((accessToken: AccessToken) =>
                        AuthActions.Login.Succeeded.action(accessToken),
                    ),
                    catchError(() => of(AuthActions.Login.Failed.action())),
                ),
            ),
        ),
    );

    userRequested$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AuthActions.Login.Succeeded.action),
            exhaustMap((payload: LoginSucceededPayload) =>
                this.authService.getUserFromToken(payload).pipe(
                    map((user: User) =>
                        AuthActions.User.Succeeded.action(user),
                    ),
                    catchError(() => of(AuthActions.User.Failed.action())),
                ),
            ),
        ),
    );
}
