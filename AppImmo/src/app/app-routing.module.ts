import { ClientListComponent } from './client/client-list/client-list.component';
import { ClientComponent } from './client/client.component';
import { ClientFormComponent } from './client/client-form/client-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProprietairesComponent } from './proprietaires/proprietaires.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ContratsComponent } from './contrats/contrats.component';


const routes: Routes = [
{path: 'client', component: ClientComponent,children: [
{path: 'form', component: ClientFormComponent},
{path: 'edit/:id', component:ClientFormComponent},
{path: 'list', component: ClientListComponent}



]
},

{path:'proprietaires', component:ProprietairesComponent},
{path:'accueil', component:AccueilComponent},
{path:'contrats',component:ContratsComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
