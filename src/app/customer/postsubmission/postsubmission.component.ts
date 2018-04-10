import { Component, OnInit, Input } from '@angular/core';
import { DataserviceService } from '../../dataservice.service';
import { BillEntryFormComponent } from '../bill-entry-form/bill-entry-form.component';
import {Http, Headers, Request, RequestMethod, Response, RequestOptions} from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-postsubmission',
  templateUrl: './postsubmission.component.html',
  styleUrls: ['./postsubmission.component.css']
})
export class PostsubmissionComponent implements OnInit {
customer: any;
order: any;
bill: any;
  constructor(private _dataService: DataserviceService,private _router: Router,
    private _route: ActivatedRoute,private http: Http, ) { 
      this._dataService.customerID=this._dataService.customerID;
      this._dataService.orderID=this._dataService.orderID;
      this._dataService.billID=this._dataService.billID;
    console.log(this._dataService.customerID);
    console.log(this._dataService.orderID);
    console.log(this._dataService.billID);
  }

  ngOnInit() {

      //get customer data
      this.http.get('http://localhost:8080/api/customer/'+this._dataService.customerID)
          .subscribe(response =>{
          this.customer = response.json();
          console.log( this.customer);
          });
        //get order data
        this.http.get('http://localhost:8080/api/order/'+this._dataService.orderID)
        .subscribe(response =>{
        this.order = response.json();
        console.log( this.order);
        });
          //get bill data
          this.http.get('http://localhost:8080/api/bill/'+this._dataService.billID)
          .subscribe(response =>{
          this.bill = response.json();
          });
  }

}
