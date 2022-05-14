import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardModule } from 'primeng/card';
// import { LoginComponent } from './views/login/login.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import {TabMenuModule} from 'primeng/tabmenu';
import { PasswordModule } from "primeng/password";
import { ReactiveFormsModule } from '@angular/forms';


import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';


import { CargoComponent } from './views/cargo/cargo.component';
import { SetorComponent } from './views/setor/setor.component';
import { UsuarioComponent } from './views/usuario/usuario.component';
import { OrganogramaComponent } from './views/organograma/organograma.component';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { LoginComponent } from './views/login/login.component';
import { ColaboradorComponent } from './views/colaborador/colaborador.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,    
    CargoComponent,
    SetorComponent,
    ColaboradorComponent,
    OrganogramaComponent,
    UsuarioComponent,    
    // MenuComponent, HomeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    CardModule,
    InputTextModule,
    ButtonModule,
    TabMenuModule,
    PasswordModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,  
    OrganizationChartModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
