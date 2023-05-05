import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { User } from '../comman/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private loginurl = "http://localhost:8090/controll/login";
  private userUrl="http://localhost:8090/controll/list";
  private newuserurl = "http://localhost:8090/controll/saveuser";
  constructor(private httpClient: HttpClient) 
  {

   }
    getlogin(user: User): Observable<User> {
    console.log(user);
    return this.httpClient.post<User>(`${this.loginurl}`, user);
  }

  

  getuserbyid(uid: number):Observable<User>  {
    const uidUrl = this.userUrl + "/" + uid;
    return this.httpClient.get<User>(uidUrl);
  }


  
  
  updateUser(user: User): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'auth-token',
        'Access-Control-Allow-Origin': '*'
      })
    };
    return this.httpClient.put<User>(this.userUrl + `/${user.eluser_id}`, user, httpOptions);
  }

  
  ///user Maintainance

  saveUser(user: User): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'auth-token',
        'Access-Control-Allow-Origin': '*'
      })
    };
    return this.httpClient.post<User>(this.newuserurl, user, httpOptions);
  }

  
}
