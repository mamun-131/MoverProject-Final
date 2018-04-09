import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Http, Headers, Request, RequestMethod, Response, RequestOptions} from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-customer-entry-form',
  templateUrl: './customer-entry-form.component.html',
  styleUrls: ['./customer-entry-form.component.css'],

})
export class CustomerEntryFormComponent  {
  customertitle: string;
  customer: FormGroup;
  postStatus: any;
  errorMessage: String;

  constructor(private _router: Router,
    private _route: ActivatedRoute,private http: Http, 
    private _fb: FormBuilder){
    this.customertitle = "Enter the customer detail"
    this.customer = this._fb.group({
     //id: 10,

     firstName: ['', [Validators.required,
                  Validators.minLength(3),
                  Validators.maxLength(30)]],
     lastName: ['', [Validators.required,
                    Validators.minLength(3),
                    Validators.maxLength(30)]],
      phone: ['', [Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30)]],
      email: ['', [Validators.required]],
      address: ['', [Validators.required]],
      city: ['', [Validators.required]]
    })
  }

create(){
  //console.log(this.customer.value );
  let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
  this.http.post('http://localhost:8080/api/customer',JSON.stringify(this.customer.value),options)
  .subscribe(response =>{
    this._router.navigate(['/orderentry',response.json().id]);
    console.log(response.json().id);
  },
  error => this.errorMessage = error);
}
}
