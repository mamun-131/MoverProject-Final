import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Http, Headers, Request, RequestMethod, Response, RequestOptions} from '@angular/http';
@Component({
  selector: 'app-bill-entry-form',
  templateUrl: './bill-entry-form.component.html',
  styleUrls: ['./bill-entry-form.component.css']
})
export class BillEntryFormComponent implements OnInit {
  billtitle: String;
  bills: FormGroup;
  postStatus: any;
  orderid: number;
  errorMessage: String;
  orders: any;
  constructor(private _router: Router,
    private _route: ActivatedRoute,private http: Http, 
    private _fb: FormBuilder) { 
      this._route.params.subscribe( params => {
     
        this.orderid=params.id;
    
        console.log(this.orderid);
        });

      this.http.get('http://localhost:8080/api/order/'+this.orderid)
      .subscribe(response =>{
          this.orders = response.json();
          console.log(this.orders);
      });


    }

  ngOnInit() {

  }

}
