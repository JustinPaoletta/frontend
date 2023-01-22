import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { ErrorModule } from '../error/error.module';

@NgModule({
    declarations: [HomeComponent],
    imports: [CommonModule, ErrorModule],
})
export class HomeModule {}
