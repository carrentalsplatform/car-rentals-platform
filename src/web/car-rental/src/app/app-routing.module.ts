import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FleetLayoutComponent } from './shared/components/fleet-layout/fleet-layout.component';

const routes: Routes = [{
  component: FleetLayoutComponent,
  path: 'fleet',
  loadChildren: './modules/fleet-management/fleet-management.module#FleetManagementModule'
},
{
  component: FleetLayoutComponent,
  path: '',
  loadChildren: './modules/rental/rental.module#RentalModule'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
