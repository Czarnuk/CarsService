import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CarsService, CarsListComponent } from './cars/index';
import { CoreModule } from './core-module/core.module';
import { LoginModule } from './login/login.module';
import { AuthService } from './auth/auth.service';

import { LayoutService } from './shared-module/services/layout.service';
import { FormsModule } from '@angular/forms';
import { AuthCanLoadGuard } from './guard/auth-can-load.guard';
import { AuthGuard } from './guard/auth.guard';
import { FormCanDeactivateGuard } from './guard/form-can-deactivate.guard';
import { SharedModule } from './shared-module/shared.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CoreModule,
    LoginModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [CarsService, AuthService, AuthGuard, LayoutService, AuthCanLoadGuard, FormCanDeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
