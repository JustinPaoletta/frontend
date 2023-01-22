import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import jwt_decode from 'jwt-decode';
import { Observable, of, take } from 'rxjs';

import { AccessToken, LoginCredentials, User } from './auth.model';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    http$ = inject(HttpClient);

    login(login: LoginCredentials): Observable<AccessToken> {
        return this.http$
            .post<AccessToken>('http://localhost:3000/auth/login', login)
            .pipe(take(1));
    }

    getUserFromToken(token: AccessToken): Observable<User> {
        try {
            const jwt: User = jwt_decode(token.access_token);
            return of(jwt);
        } catch (e: any) {
            return of(e);
        }
    }
}
