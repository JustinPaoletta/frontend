import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot,
    UrlTree,
} from '@angular/router';
import { Observable, of, switchMap } from 'rxjs';

import { FromUserState } from '../redux/auth.selectors';
import { User } from './auth.model';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    private store$ = inject(Store);
    private router = inject(Router);

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
    ): Observable<boolean | UrlTree> {
        return this.store$
            .select(FromUserState.user)
            .pipe(
                switchMap((user: User) =>
                    of(!!user.sub ? true : this.router.parseUrl('')),
                ),
            );
    }
}
