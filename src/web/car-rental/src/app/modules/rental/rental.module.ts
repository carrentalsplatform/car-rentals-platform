import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RentalRoutingModule } from './rental-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { AppMaterialModule } from 'src/app/shared/modules/app-material/app-material.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RentalRoutingModule
  ]
})
export class RentalModule { }
