import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperHeroRoutingModule } from './super-hero-routing.module';
import { SuperHeroComponent } from './components/super-hero/super-hero.component';
import { ModalCreateEditSuperHeroComponent } from './components/modal-create-edit-super-hero/modal-create-edit-super-hero.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { UpperCaseDirective } from '../../../shared/directives/upper-case.directive';

@NgModule({
  declarations: [
    SuperHeroComponent,
    ModalCreateEditSuperHeroComponent,
    UpperCaseDirective
  ],
  imports: [
    CommonModule,
    SuperHeroRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    NgxPaginationModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule 
  ]
})
export class SuperHeroModule { }
