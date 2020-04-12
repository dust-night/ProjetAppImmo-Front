import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProprietairesComponent } from './proprietaires/proprietaires.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ContratsComponent } from './contrats/contrats.component';


const routes: Routes = [
{path:'proprietaires', component:ProprietairesComponent},
{path:'accueil', component:AccueilComponent},
{path:'contrats',component:ContratsComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
