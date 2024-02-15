import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './feature/not-found/not-found.component';

const routes: Routes = [
    { path: 'superhero', loadChildren: () => import("../app/feature/superHero/super-hero.module").then(m => m.SuperHeroModule) },
    { path: '', component: NotFoundComponent },
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
