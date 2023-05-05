import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/comman/customer';
import { CustomerserviceService } from 'src/app/service/customerservice.service';

@Component({
  selector: 'app-orderform',
  templateUrl: './orderform.component.html',
  styleUrls: ['./orderform.component.css']
})
export class OrderformComponent  implements OnInit{
  customer : Customer = new Customer(0,"","","","",0);
  isEditable: boolean;
  constructor(private customerService:CustomerserviceService,private router:Router,private activateRoute:ActivatedRoute) { }

  ngOnInit(): void
   {
    this.activateRoute.paramMap.subscribe(()=>this.customer);
    this.activateRoute.paramMap.subscribe(()=>this.getCustomerById());
  }
  getCustomerById(){
    const custID  = parseFloat(this.activateRoute.snapshot.paramMap.get("id"));
    
  console.log(custID);
  if(custID> 0)
  {
    this.isEditable = true;
    this.customerService.getCustomerByID(custID).subscribe(data=>{
      this.customer = data;
      console.log(this.customer)
    });
  }

  }
  onSubmit(){
    console.log(this.customer);
    if(this.isEditable){
      this.customerService.updateOrder(this.customer).subscribe(data=>
        this.router.navigateByUrl("/orderlist"));

    }
    else{
    this.customerService.SaveCustomer( this.customer).subscribe(data =>
      console.log(data));
      this.router.navigateByUrl("/orderlist");
  }
}
}