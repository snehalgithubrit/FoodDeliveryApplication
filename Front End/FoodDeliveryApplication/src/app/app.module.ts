import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderformComponent } from './addcustmer/orderform/orderform.component';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { OrderlistComponent } from './viewcustomerdata/orderlist/orderlist.component';
import{HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RegisterformComponent } from './usermodule/registerform/registerform.component';
import { LoginComponent } from './usermodule/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderformComponent,
    WelcomeComponent,
    OrderlistComponent,
    RegisterformComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
