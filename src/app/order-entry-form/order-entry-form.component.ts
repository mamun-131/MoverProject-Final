import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Http, Headers, Request, RequestMethod, Response, RequestOptions} from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-entry-form',
  templateUrl: './order-entry-form.component.html',
  styleUrls: ['./order-entry-form.component.css']
})
export class OrderEntryFormComponent implements OnInit {
  ordertitle: String;
  order: FormGroup;
  postStatus: any;
  custid: number;
  errorMessage: String;
  customer: any;
  constructor(private _router: Router,
    private _route: ActivatedRoute,private http: Http, 
    private _fb: FormBuilder) {
    this.ordertitle = "Insert Orders";
    this._route.params.subscribe( params => {
     
    this.custid=params.id;

    console.log(this.custid);
    });
    this.order = this._fb.group({
      //id: 10,
 
      customerid:  this.custid,
      movedate: ['', [Validators.required]],
      cityout: ['', [Validators.required]],
      addressout: ['', [Validators.required]],
      cityin: ['', [Validators.required]],
      addressin: ['', [Validators.required]],
      offers: ['', [Validators.required]],
      extras: ['', [Validators.required]]
     });


   }
  ngOnInit() {
    this.http.get('http://localhost:8080/api/customer/'+this.custid)
    .subscribe(response =>{
        this.customer = response.json();
        console.log(this.customer);
    });

  }
  create(){
    console.log(this.order.value );
    let headers = new Headers({ 'Content-Type': 'application/json'});
      let options = new RequestOptions({ headers: headers });
    this.http.post('http://localhost:8080/api/order',JSON.stringify(this.order.value),options)
    .subscribe(response =>{
      this._router.navigate(['/billentry',response.json().id]);
      console.log(response.json());
      console.log(response.json().id);
    },
    error => this.errorMessage = error);
  }
}
