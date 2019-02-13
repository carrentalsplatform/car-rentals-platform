import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FleetManagementRoutingModule } from './fleet-management-routing.module';
import { AddCarComponent } from './pages/add-car/add-car.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from 'src/app/shared/modules/app-material/app-material.module';

@NgModule({
  declarations: [AddCarComponent],
  imports: [
    CommonModule,
    FleetManagementRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AppMaterialModule
  ]
})
export class FleetManagementModule { }
