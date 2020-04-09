import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProprietairesComponent } from './proprietaires/proprietaires.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ProprietaireListComponent } from './proprietaire-list/proprietaire-list.component';
import { AccueilComponent } from './accueil/accueil.component';

@NgModule({
  declarations: [
    AppComponent,
    ProprietairesComponent,
    ProprietaireListComponent,
    AccueilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
   
    FormsModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
