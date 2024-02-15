import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuperHeroComponent } from './components/super-hero/super-hero.component';

const routes: Routes = [{
  path: '',
  component: SuperHeroComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  
  exports: [RouterModule]
})
export class SuperHeroRoutingModule { }
