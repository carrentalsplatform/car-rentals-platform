import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCarComponent } from './pages/add-car/add-car.component';

const routes: Routes = [{ path: 'addcar', component: AddCarComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FleetManagementRoutingModule { }
