import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/comman/user';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcomeuser.component.html',
  styleUrls: ['./welcomeuser.component.css']
})
export class WelcomeUserComponent implements OnInit {

  constructor(public activateroute:ActivatedRoute,private route:Router) { }
  user:User
  ngOnInit(): void 
  {
    this.activateroute.paramMap.subscribe(()=>this.user=JSON.parse(sessionStorage.getItem("user")))

  }
  logout() {
    if (sessionStorage.getItem("user")) {
      sessionStorage.clear()
      localStorage.clear()
      alert("Logout Successfully")
      this.route.navigateByUrl("/login")
    }
    else {
      alert("No user loged in")
    }
  }
}
