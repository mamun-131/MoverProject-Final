import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CustomerEntryFormComponent } from './customer/customer-entry-form/customer-entry-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { HomeComponent } from './home/home.component';
import { BillEntryFormComponent } from './bill-entry-form/bill-entry-form.component';
import { OrderEntryFormComponent } from './order-entry-form/order-entry-form.component';
import { routing }  from './routing';
import { CustomerViewComponent } from './customer/customer-view/customer-view.component';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    CustomerEntryFormComponent,
    TopMenuComponent,
    HomeComponent,
    BillEntryFormComponent,
    OrderEntryFormComponent,
    CustomerViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    HttpModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
