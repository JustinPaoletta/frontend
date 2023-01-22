import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Actions, ofType } from '@ngrx/effects';
import { take } from 'rxjs';

import { LoginCredentials, LoginForm, User } from './auth/auth.model';
import { AuthService } from './auth/auth.service';
import { AuthActions } from './redux/auth.actions';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup<LoginForm>;

    authService = inject(AuthService);
    store$ = inject(Store);
    actions$ = inject(Actions);
    router = inject(Router);

    ngOnInit(): void {
        this.createForm();
    }

    createForm(): void {
        this.loginForm = new FormGroup<LoginForm>({
            username: new FormControl('', {
                nonNullable: true,
                validators: [Validators.minLength(2)],
            }),
            password: new FormControl('', {
                nonNullable: true,
                validators: [Validators.minLength(2)],
            }),
        });
    }

    login(): void {
        const login: LoginCredentials = this.loginForm.getRawValue();
        this.store$.dispatch(AuthActions.Login.Requested.action(login));

        this.actions$
            .pipe(ofType(AuthActions.User.Succeeded.action), take(1))
            .subscribe((user: User) => this.router.navigateByUrl('home'));
    }
}
