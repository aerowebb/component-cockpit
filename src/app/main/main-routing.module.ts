import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CanActivateGuard } from '../guards/can-activate-guard.service';
import { CanDeactivateGuard } from '../guards/can-deactivate-guard.service';

import { MainComponent } from './main.component';

const mainRoutes: Routes = [
  {
    path: ':object/:id',
    component: MainComponent,
    canActivate: [CanActivateGuard],
    canDeactivate: [CanDeactivateGuard]
  },
  { path: '', component: MainComponent, canDeactivate: [CanDeactivateGuard] }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(mainRoutes)],
  providers: [CanDeactivateGuard]
})
export class MainRoutingModule {}
