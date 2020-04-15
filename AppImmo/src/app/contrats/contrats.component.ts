import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ContratService } from 'src/service/contrat.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-contrats',
  templateUrl: './contrats.component.html',
  styleUrls: ['./contrats.component.css']
})
export class ContratsComponent implements OnInit {
  form: FormGroup;
  id: any;
mode: boolean;
contrat: any;
  constructor(private ContratService: ContratService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.mode=this.ContratService.editMode;
    this.form = new FormGroup({
      modeOffre: new FormControl(null),
      referenceContrat: new FormControl(null, Validators.required),
      nom: new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
      prenom: new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
      adresse: new FormControl(null, Validators.required),
      numeroTelephonePersonnel: new FormControl(null, Validators.required),
      dateAchat: new FormControl(null, Validators.required),
      prixAchat: new FormControl(null, Validators.required)

      });
      this.activatedRoute.params.subscribe((param: Params)=>{
        this.id = param['id'];
        if(this.id){
          this.ContratService.getOne(this.id).subscribe((response: any)=>
          this.form.setValue(response));
  }
});
  }
  addContrat (){
    this.ContratService.add(this.form.value).subscribe(response =>{
    this.ContratService.contrats.push(response.body);
    console.log(this.ContratService.contrats);
  
  });
  }
  findIndexToUpdate(item){
  return item.id===this;
  
  
  }
  updateContrat(){
  this.ContratService.update(this.form.value).subscribe((response:any) =>{
  this.contrat =this.ContratService.contrats.find(this.findIndexToUpdate, response.body.id);
  const index =this.ContratService.contrats.indexOf(this.contrat)
  this.ContratService.contrats.splice(index, 1,response.body);
  this.router.navigate(['/contrat']);
  this.ContratService.editMode = false;
  });
  
  }


}
