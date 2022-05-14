import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { CargoComponent } from '../cargo/cargo.component';
// import { ColaboradorComponent } from '../colaborador/colaborador.component';
// import { OrganogramaComponent } from '../organograma/organograma.component';
// import { SetorComponent } from '../setor/setor.component';
// import { UsuarioComponent } from '../usuario/usuario.component';
// import { DashboardComponent } from './dashboard.component';


const routes: Routes = [
  // { path: '', component: DashboardComponent },
  // { path: 'cargo', component: CargoComponent },
  // { path: 'organograma', component: OrganogramaComponent },
  // { path: 'setor', component: SetorComponent },
  // { path: 'colaborador', component: ColaboradorComponent },
  // { path: 'usuario', component: UsuarioComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
