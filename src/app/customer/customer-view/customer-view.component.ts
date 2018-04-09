import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions,Headers } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.css']
})
export class CustomerViewComponent implements OnInit {
  customers: any;
  errorMessage: String;
  constructor(private _router: Router,
    private _route: ActivatedRoute,private http: Http) { 

  }

  ngOnInit() {
    this.http.get('http://localhost:8080/api/customers')
    .subscribe(response =>{
        this.customers = response.json();
    });
  }

  delete(customer){
    console.log("Yesssss");

    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
    this.http.delete('http://localhost:8080/api/customer/' + customer.id,options)
    .subscribe(response => this._router.navigate(['/customerview']),
    error => this.errorMessage = error);

   // this._router.navigate(['/customerview'])
    window.location.reload();
  }

  
}

