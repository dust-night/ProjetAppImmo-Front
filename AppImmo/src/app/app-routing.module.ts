import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProprietairesComponent } from './proprietaires/proprietaires.component';


const routes: Routes = [
{path:'proprietaires', component:ProprietairesComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
