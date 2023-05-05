import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/comman/user';

import { UserServiceService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.css']
})
export class RegisterformComponent implements OnInit {
  user:User =new User(0,"firstname","lastname","username","password","add1","add2")
  isEditable: boolean;
  constructor(public userservices:UserServiceService,public route:Router,public activateRoute: ActivatedRoute) { }

  ngOnInit(): void
   {
    this.activateRoute.paramMap.subscribe(()=>this.getuserbyuid())
  }
  getuserbyuid(): void {
    const uid  = parseFloat(this.activateRoute.snapshot.paramMap.get("uid"));
    console.log(uid)
    if(uid>0)
    {
      this.isEditable=true;
      this.userservices.getuserbyid(uid).subscribe(data=>{
        this.user=data;
        console.log(this.user);
      });
    }
  }

  SaveUsers(){
    if(this.isEditable){
      this.userservices.updateUser(this.user).subscribe(data=>{
        alert("Successfully updated "+this.user.user_name)
        sessionStorage.clear()
        localStorage.clear()
        this.route.navigateByUrl("")});
    }
    else{
      
    this.userservices.saveUser(this.user).subscribe(data =>{
      alert("Successfully Register ")
      this.route.navigateByUrl("/login")
    },
    error => alert("enter the user data ")
      );
      
  }
}
}
