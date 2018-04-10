import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Http, Headers, Request, RequestMethod, Response, RequestOptions} from '@angular/http';
import { DataserviceService } from '../../dataservice.service';
@Component({
  selector: 'app-bill-entry-form',
  templateUrl: './bill-entry-form.component.html',
  styleUrls: ['./bill-entry-form.component.css']
})
export class BillEntryFormComponent implements OnInit {
  billtitle: string;
  bills: FormGroup;
  postStatus: any;

  customer: any;
  orderid: number;
  errorMessage: string;
  orders: any;
  //@Input() custId: string;
  constructor(private _router: Router,
    private _route: ActivatedRoute,private http: Http, 
    private _fb: FormBuilder, private _dataService: DataserviceService) { 
      //Host the param value
      this._route.params.subscribe( params => {
        this.orderid=params.id;  
       // console.log(this.orderid);
       // this.custId="wwwww";

        });
  

//this.custId = "60000";
        // this._dataService.setUrlHistoryObj ("PPPPPP");
        // console.log(this._dataService.getUrlHistoryObj());

    }

  ngOnInit() {

      //get order data
      this.http.get('http://localhost:8080/api/order/'+this.orderid)
      .subscribe(response =>{
          this.orders = response.json();
          console.log(this.orders);

                  //get order data
      console.log(this.orders.customerid);
      this.http.get('http://localhost:8080/api/customer/'+this.orders.customerid)
      .subscribe(response =>{
          this.customer = response.json();
          //console.log(this.customer[0]);
      });
      });

                  //bind form group
                  this.bills = this._fb.group({
                    orderid:  this.orderid,
                    hourlyrate: [, [Validators.required]],
                    totalhours: [, [Validators.required]],
                    totalamount: [, [Validators.required]],
                    hst: [, [Validators.required]]
                   });
                 //  this.custId = this.customer[6];
                 // console.log("Mamun" + this.customer['id']);

                
  }
  create(){
    console.log(this.bills.value );
    let headers = new Headers({ 'Content-Type': 'application/json'});
      let options = new RequestOptions({ headers: headers });
    this.http.post('http://localhost:8080/api/bill',JSON.stringify(this.bills.value),options)
    .subscribe(response =>{
      this._router.navigate(['/postsubmission']);
      console.log(response.json());
     // console.log(response.json().id);
     this._dataService.billID = response.json().id;
     this._dataService.customerID=this._dataService.customerID;
     this._dataService.orderID = this._dataService.orderID;
    },
    error => this.errorMessage = error);
  }

}
