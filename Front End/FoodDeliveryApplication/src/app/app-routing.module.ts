import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { OrderformComponent } from './addcustmer/orderform/orderform.component';
import { RegisterformComponent } from './usermodule/registerform/registerform.component';
import { LoginComponent } from './usermodule/login/login.component';
import { WelcomeUserComponent } from './usermodule/welcomeuser/welcomeuser.component';
import { OrderlistComponent } from './viewcustomerdata/orderlist/orderlist.component';
const routes: Routes = [{path:'',component:WelcomeComponent},{path:'orderlist',component:OrderlistComponent},{path:'orderform',component:OrderformComponent},{path:'updateOrder/:id',component:OrderformComponent},{path:'register',component:RegisterformComponent},{path:'login',component:LoginComponent},{path:'welcome',component:WelcomeUserComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
