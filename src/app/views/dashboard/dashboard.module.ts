import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DashboardRoutingModule } from './dashboard-routing.module';
// import { DashboardComponent } from './dashboard.component';

// import { NavComponent } from '../nav/nav.component';
// import { OrganogramaComponent } from '../organograma/organograma.component';
// import { CargoComponent } from '../cargo/cargo.component';
import {OrganizationChartModule} from 'primeng/organizationchart';



// import { LayoutModule } from '@angular/cdk/layout';
// import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatButtonModule } from '@angular/material/button';
// import { MatSidenavModule } from '@angular/material/sidenav';
// import { MatIconModule } from '@angular/material/icon';
// import { MatListModule } from '@angular/material/list';
// import { MatGridListModule } from '@angular/material/grid-list';
// import { MatCard } from '@angular/material/card';
// import { MatCardModule } from '@angular/material/card';
// import { MatCardContent } from '@angular/material/card';
// import { MatMenuModule } from '@angular/material/menu';
// import { MatMenuTrigger } from '@angular/material/menu';
// import { MatCardTitle } from '@angular/material/card';
// import { MatCardHeader } from '@angular/material/card';
// import { MatGridTile } from '@angular/material/grid-list';
// import { MatGridTi }

// import { MenuComponent } from '../menu/menu.component';
// import { HomeComponent } from '../home/home.component';





@NgModule({
  declarations: [
    // DashboardComponent,
    // NavComponent,
    // OrganogramaComponent,
    // CargoComponent,
    // MenuComponent, HomeComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DashboardRoutingModule,
    OrganizationChartModule,    
    // MatGridListModule,    
    // MatIconModule,
    // MatListModule,
    // MatSidenavModule,
    // MatToolbarModule,
    // LayoutModule,
    // MatButtonModule,
    // MatCardModule,
    // MatMenuModule,
    // MatMenuTrigger,
    // MatCard,
    // MatCardContent,
    // MatCardTitle,
    // MatCardHeader,
    // MatGridTile
  ]
})
export class DashboardModule { 

  
}
