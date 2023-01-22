import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthReducer } from './login/redux/auth.reducer';
import { AuthEffects } from './login/redux/auth.effects';
import { LoginModule } from './login/login.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        StoreModule.forRoot({ user: AuthReducer.reducer }),
        StoreDevtoolsModule.instrument({ name: 'user' }),
        EffectsModule.forRoot([AuthEffects]),
        LoginModule
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
