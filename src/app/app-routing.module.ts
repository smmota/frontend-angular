import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './resources/services/auth-guard.service';
import { CargoComponent } from './views/cargo/cargo.component';
import { ColaboradorComponent } from './views/colaborador/colaborador.component';
import { OrganogramaComponent } from './views/organograma/organograma.component';
import { SetorComponent } from './views/setor/setor.component';
import { UsuarioComponent } from './views/usuario/usuario.component';
// import { DashboardComponent } from './views/dashboard/dashboard.component';
// import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';

const routes: Routes = [
  // { path: '', component: LoginComponent },
  // { path: '', component: DashboardComponent },
  // { path: 'home', component: HomeComponent },
  { path: 'setor', component: SetorComponent },
  { path: 'cargo', component: CargoComponent },
  { path: 'colaborador', component: ColaboradorComponent },
  { path: 'organograma', component: OrganogramaComponent },
  { path: 'usuario', component: UsuarioComponent },
  // { path: 'dashboard',
  // canActivate: [AuthGuardService],
  //   loadChildren: ()=> 
  //     import('./views/dashboard/dashboard.module').then(
  //       (m) => m.DashboardModule
  //     ),
  // },
  // { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes
    // , { useHash: true }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
