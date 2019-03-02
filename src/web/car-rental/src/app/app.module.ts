import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AppMaterialModule } from './shared/modules/app-material/app-material.module';
import  { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FleetLayoutComponent } from './shared/components/fleet-layout/fleet-layout.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { LoginComponent } from "./modules/auth/pages/login/login.component";
import { RegisterComponent} from "./modules/auth/pages/register/register.component";
 





@NgModule({
  declarations: [
    AppComponent,
    FleetLayoutComponent,
    NavbarComponent,
    LoginComponent ,
    RegisterComponent

  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    AppMaterialModule
     
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
