import { DataServiceService } from './data-service.service';
import { DemoMaterialModule } from './material-module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponentComponent } from './registration-component/registration-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponentComponent } from './home-component/home-component.component';
import { CustomTableComponentComponent } from './custom-table-component/custom-table-component.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponentComponent,
    LoginComponentComponent,
    HomeComponentComponent,
    CustomTableComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DemoMaterialModule
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
