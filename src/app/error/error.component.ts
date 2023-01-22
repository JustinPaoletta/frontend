import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-error',
    templateUrl: './error.component.html',
    styleUrls: ['./error.component.scss'],
})
export class ErrorComponent {
    private router = inject(Router);

    backToLogin(): void {
        this.router.navigateByUrl('login');
    }
}
