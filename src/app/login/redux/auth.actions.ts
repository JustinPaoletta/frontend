import { createAction, props } from '@ngrx/store';
import { AccessToken, LoginCredentials, User } from '../auth/auth.model';

export interface RequestLoginPayload extends LoginCredentials {}
export interface LoginSucceededPayload extends AccessToken {}
export interface UserSucceededPayload extends User {}

export namespace AuthActions {
    export namespace Login {
        export namespace Requested {
            export const type = 'Login Requested';
            export interface Payload extends RequestLoginPayload {}
            export const action = createAction(type, props<Payload>());
        }

        export namespace Succeeded {
            export const type = 'Login Succeeded';
            export interface Payload extends LoginSucceededPayload {}
            export const action = createAction(type, props<Payload>());
        }

        export namespace Failed {
            export const type = 'Login Failed';
            export const action = createAction(type);
        }
    }

    export namespace User {
        export namespace Succeeded {
            export const type = 'User Succeeded';
            export interface Payload extends UserSucceededPayload {}
            export const action = createAction(type, props<Payload>());
        }

        export namespace Failed {
            export const type = 'User Failed';
            export const action = createAction(type);
        }
    }
}
