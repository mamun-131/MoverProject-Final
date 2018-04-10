import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'; //import home components
import { CustomerEntryFormComponent } from './customer/customer-entry-form/customer-entry-form.component';
import { BillEntryFormComponent } from './customer/bill-entry-form/bill-entry-form.component';
import { OrderEntryFormComponent } from './customer/order-entry-form/order-entry-form.component';
import { CustomerViewComponent } from './customer/customer-view/customer-view.component';
import { PostsubmissionComponent } from './customer/postsubmission/postsubmission.component';
import { MapComponent } from './map/map.component';
import { AboutComponent } from './about/about.component';
const appRoutes: Routes = [
  { 
    path: 'home', 
    component: HomeComponent 
  },
  { 
    path: 'orderentry/:id', 
    component: OrderEntryFormComponent 
  },
  { 
    path: 'billentry/:id', 
    component: BillEntryFormComponent
  } ,
  { 
    path: 'customer', 
    component: CustomerEntryFormComponent
  },
  { 
    path: 'customerview', 
    component: CustomerViewComponent
  },
  { 
    path: 'postsubmission', 
    component: PostsubmissionComponent
  },
  { 
    path: 'map', 
    component: MapComponent
  },
  { 
    path: 'about', 
    component: AboutComponent
  },
  {
    path: '', 
    redirectTo: '/home', pathMatch: 'full'
  }
];

export const routing= RouterModule.forRoot(appRoutes);