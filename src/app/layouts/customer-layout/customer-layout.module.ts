import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerLayoutRoutingModule } from './customer-layout-routing.module';
import { CustomerComponent } from './customer/customer.component';
import { CustomerHeaderComponent } from 'app/shared/customer-header/customer-header.component';
import { CustomerFooterComponent } from 'app/shared/customer-footer/customer-footer.component';

@NgModule({
  declarations: [
    CustomerComponent,
    CustomerHeaderComponent,
    CustomerFooterComponent
  ],
  imports: [
    CommonModule,
    CustomerLayoutRoutingModule
  ]
})
export class CustomerLayoutModule { }
