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

@NgModule({
  declarations: [
    SuperHeroComponent,
    ModalCreateEditSuperHeroComponent
  ],
  imports: [
    CommonModule,
    SuperHeroRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    NgxPaginationModule
  ]
})
export class SuperHeroModule { }
