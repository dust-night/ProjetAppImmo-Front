import { ClientFormComponent } from './client/client-form/client-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
{path: 'client', component: ClientFormComponent,children: [
{path: 'edit/:id', component:ClientFormComponent}



]
}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
