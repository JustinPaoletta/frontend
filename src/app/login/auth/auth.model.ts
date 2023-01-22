import { FormControl } from '@angular/forms';

// TODO Evaluate models separate API from frontend add adapter to connect them

export interface LoginCredentials {
    username: string;
    password: string;
}

export interface AccessToken {
    access_token: string;
}

export interface LoginForm {
    username: FormControl<string>;
    password: FormControl<string>;
}

export interface User {
    username: string;
    sub: number;
    permissions: UserPermissions;
    iat: number;
    exp: number;
}

export interface UserPermissions {
    isAdmin: boolean;
    canEditOrder: boolean;
}
