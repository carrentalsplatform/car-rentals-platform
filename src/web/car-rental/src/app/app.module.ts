import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AppMaterialModule } from './shared/modules/app-material/app-material.module';
import  { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatInputModule, MatFormFieldModule, MatError } from '@angular/material';
import { ReactiveFormsModule} from '@angular/forms'
import {MatIconModule} from '@angular/material/icon';
import { FleetLayoutComponent } from './shared/components/fleet-layout/fleet-layout.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';



@NgModule({
  declarations: [
    AppComponent,
    FleetLayoutComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
