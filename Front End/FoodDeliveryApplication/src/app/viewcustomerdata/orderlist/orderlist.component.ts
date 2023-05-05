import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerserviceService } from 'src/app/service/customerservice.service';
@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.css']
})
export class OrderlistComponent {
  customer:any
 
  constructor(public router:Router,private customerService:CustomerserviceService,private activateRoute:ActivatedRoute) { }

  ngOnInit(): void 
  {
    this.activateRoute.paramMap.subscribe(()=>this.getAllCustomer());
      }
  getAllCustomer()
  {
    this.customerService.getAllCustomer().subscribe(data=>{
      console.log(data);
      this.customer=data;
    });
  }
  addCustomer():void{
    this.router.navigateByUrl("/orderform");
  }
  deleteOrder(id:number):void
  {
    console.log(id);
    if(confirm("Do you want to delete ?")){
      this.customerService.deleteOrder(id).subscribe(data=>{
        console.log(data);
        this.getAllCustomer();
      })
    };
  }
  updateOrder(id:number)
  {
    this.router.navigateByUrl("/updateOrder/"+id);
  }
}