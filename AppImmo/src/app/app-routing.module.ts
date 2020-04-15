import { ProprietaireListComponent } from './proprietaire-list/proprietaire-list.component';

import { ImmobFormComponent } from './bienimmob/immob-form/immob-form.component';
import { TableauimmoComponent } from './bienimmob/tableauimmo/tableauimmo.component';
import { BienimmobComponent } from './bienimmob/bienimmob.component';
import { ClientListComponent } from './client/client-list/client-list.component';
import { ClientComponent } from './client/client.component';
import { ClientFormComponent } from './client/client-form/client-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProprietairesComponent } from './proprietaires/proprietaires.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ContratsComponent } from './contrats/contrats.component';
import { RdvComponent } from './rdv/rdv.component';


const routes: Routes = [
{path: 'client', component: ClientComponent,children: [
{path: 'form', component: ClientFormComponent},
{path: 'edit/:id', component:ClientFormComponent},
{path: 'list', component: ClientListComponent}



]
},

{path:'proprietaires', component:ProprietairesComponent},
{path:'edit/:id', component:ProprietairesComponent},
{path:'accueil', component:AccueilComponent},
{path:'contrats',component:ContratsComponent},
{path:'rdv', component:RdvComponent},
{path: 'bienimmob', component: BienimmobComponent, children: [
{path: 'tableauimmo', component: TableauimmoComponent},
{path: 'immoform', component: ImmobFormComponent}


]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
