import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/comman/user';

import { UserServiceService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User(0, "", "", "", "", "", "")
  userdetails: any
  password: string
  uname: string
  searchuser: string

  users: User = JSON.parse(sessionStorage.getItem("user"))
  constructor(private userservices: UserServiceService, private route: Router, public activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }
  Getlogin(): void {

    this.userservices.getlogin(this.user).subscribe(data => {
      alert("Login Successfully"),
        console.log("login response" + data)

      sessionStorage.setItem("user", JSON.stringify(data))

      this.route.navigateByUrl("/welcome")

    },
      error => alert("Sorry Please Enter correct Username And Password"));

  }
  newregistration(){
    this.route.navigateByUrl("/register")
  }
  onSubmit() {
    this.route.navigateByUrl("/customers");

  }
}
