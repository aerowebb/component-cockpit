import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CanActivateGuard } from './guards/can-activate-guard.service';
import { PageNotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [
  {
    path: 'main',
    canActivate: [CanActivateGuard],
    loadChildren: './main/main.module#MainModule'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(appRoutes)],
  providers: [CanActivateGuard]
})
export class AppRoutingModule {}
