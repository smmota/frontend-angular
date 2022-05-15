import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

import { NavComponent } from '../nav/nav.component';
import {OrganizationChartModule} from 'primeng/organizationchart';


@NgModule({
  declarations: [
    DashboardComponent,
    NavComponent,    
  ],
  imports: [    
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DashboardRoutingModule,
    OrganizationChartModule  
  ]
})
export class DashboardModule {   
}
