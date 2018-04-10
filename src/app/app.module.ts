import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CustomerEntryFormComponent } from './customer/customer-entry-form/customer-entry-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { HomeComponent } from './home/home.component';
import { BillEntryFormComponent } from './customer/bill-entry-form/bill-entry-form.component';
import { OrderEntryFormComponent } from './customer/order-entry-form/order-entry-form.component';
import { routing }  from './routing';
import { CustomerViewComponent } from './customer/customer-view/customer-view.component';
import { HttpModule } from '@angular/http';
import { PostsubmissionComponent } from './customer/postsubmission/postsubmission.component';
import { DataserviceService } from './dataservice.service';
import { AgmCoreModule } from '@agm/core';
import { MapComponent } from './map/map.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerEntryFormComponent,
    TopMenuComponent,
    HomeComponent,
    BillEntryFormComponent,
    OrderEntryFormComponent,
    CustomerViewComponent,
    PostsubmissionComponent,
    MapComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    HttpModule,
    AgmCoreModule.forRoot({
      // please get your own API key here:
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
      apiKey: 'AIzaSyD03BuTFrir2dCNkn4U-_k8C8pr7QJxvUc'
    })
  ],
  providers: [DataserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
