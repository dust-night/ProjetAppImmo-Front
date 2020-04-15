import { ClientService } from 'src/service/client.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})



export class ClientFormComponent implements OnInit {
  form: FormGroup;
  id:any;
  mode: boolean;
  client: any;
  

  constructor(private ClientService: ClientService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      id: new FormControl(null, Validators.required),
      nom: new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
      prenom: new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
      adresse: new FormControl(null, Validators.required),
      numeroTelephonePersonnel: new FormControl(null, Validators.required),
      contrat: new FormControl(null),
      visites: new FormControl(null),
      classeStandard: new FormControl(null)


  });

    this.activatedRoute.params.subscribe((param:Params)=> {
      this.id = param['id']
      if (this.id) {

        this.ClientService.getOne(this.id).subscribe((response:any) =>
        this.form.setValue(response));
        
      }




    });

}

findIindexToUpdate(item){

  return item.id == this;
  
  
    }

addClient(){

  this.ClientService.ajout(this.form.value).subscribe(response => {
    this.ClientService.clients.push(response.body);
    console.log(this.ClientService.clients);
    this.form.reset();

  });
}


updateClient(){
  this.ClientService.update(this.form.value).subscribe((response: any) => {
    this.client = this.ClientService.clients.find(this.findIindexToUpdate, response.body.id)
    const index = this.ClientService.clients.indexOf(this.client);

  this.ClientService.clients.splice(index,1,response.body);
  this.router.navigate(['/client/form']);
  this.ClientService.editMode = false;
  })

}








}
