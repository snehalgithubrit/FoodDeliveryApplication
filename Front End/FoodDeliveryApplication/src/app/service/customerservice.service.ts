import { Injectable } from '@angular/core';
import { Customer } from '../comman/customer';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerserviceService {

 
  private custURL="http://localhost:8090/customer/showorderlist";
   private custsave="http://localhost:8090/customer/createneworder";
   private custdel="http://localhost:8090/customer/deletemyorder";
   private custupdate="http://localhost:8090/customer/updateOrder";
   private custfind="http://localhost:8090/customer/findmyorder";


   constructor(private http:HttpClient) 
   { 
 
   }
  getAllCustomer():Observable<any>
  {
   return this.http.get(this.custURL);
  }
  SaveCustomer(customer:Customer):Observable<any>
  {
    const httpOptions = {
      headers : new HttpHeaders({
          'Content-Type' : 'application/json',
          'Authorization' : 'auth-token',
          'Access-Control-Allow-Origin' : '*'
      })
    };
    return  this.http.post<Customer>(this.custsave,customer,httpOptions);
  }
  deleteOrder(id: Number) {
   
    const httpOptions = {
      headers : new HttpHeaders({
          'Content-Type' : 'application/json',
          'Authorization' : 'auth-token',
          'Access-Control-Allow-Origin' : '*'
      })
    };
    return  this.http.delete<Customer>(this.custdel+`/${id}`,httpOptions);
  }
  getCustomerByID(custID:number):Observable<Customer>
{
  const custIDURl=this.custfind+"/"+custID;
  return  this.http.get<Customer>(custIDURl);
}
  updateOrder(customer:Customer):Observable<Customer>{
    const httpOptions = {
      headers : new HttpHeaders({
          'Content-Type' : 'application/json',
          'Authorization' : 'auth-token',
          'Access-Control-Allow-Origin' : '*'
      })
    };
    return  this.http.put<Customer>(this.custupdate+`/${customer.id}`,Customer,httpOptions);
  }
}