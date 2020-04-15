import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { ClientFormComponent } from './client/client-form/client-form.component';
import { ClientListComponent } from './client/client-list/client-list.component';
import { ProprietairesComponent } from './proprietaires/proprietaires.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ProprietaireListComponent } from './proprietaire-list/proprietaire-list.component';
import { AccueilComponent } from './accueil/accueil.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { FlatpickrModule } from 'angularx-flatpickr';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { ContratsComponent } from './contrats/contrats.component';
import { BienimmobComponent } from './bienimmob/bienimmob.component';
import { TableauimmoComponent } from './bienimmob/tableauimmo/tableauimmo.component';
import { ImmobFormComponent } from './bienimmob/immob-form/immob-form.component';
import { ContratListComponent } from './contrat-list/contrat-list.component';
import { RdvComponent } from './rdv/rdv.component';
import { RdvListComponent } from './rdv-list/rdv-list.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    ClientFormComponent,
    ClientListComponent,
    ProprietairesComponent,
    ProprietaireListComponent,
    AccueilComponent,
    ContratsComponent,
    BienimmobComponent,
    TableauimmoComponent,
    ImmobFormComponent,
    ContratListComponent,
    RdvComponent,
    RdvListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModalModule,
    FlatpickrModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory })
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
