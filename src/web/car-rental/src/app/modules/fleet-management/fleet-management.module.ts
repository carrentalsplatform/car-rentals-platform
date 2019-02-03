import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FleetManagementRoutingModule } from './fleet-management-routing.module';
import { AddCarComponent } from './pages/add-car/add-car.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatInputModule } from '@angular/material';

@NgModule({
  declarations: [AddCarComponent],
  imports: [
    CommonModule,
    FleetManagementRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule
  ]
})
export class FleetManagementModule { }
