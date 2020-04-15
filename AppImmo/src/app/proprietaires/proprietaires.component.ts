import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProprietaireService } from 'src/service/proprietaire.service';
import { ActivatedRoute, Router, Params } from '@angular/router';


@Component({
  selector: 'app-proprietaires',
  templateUrl: './proprietaires.component.html',
  styleUrls: ['./proprietaires.component.css']
})
export class ProprietairesComponent implements OnInit {
form: FormGroup;
id: any;
mode: boolean;
proprietaire: any;
  constructor(private ProprietaireService: ProprietaireService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.mode=this.ProprietaireService.editMode;
    this.form = new FormGroup({
     
      nom: new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
      prenom: new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
      adresse: new FormControl(null, Validators.required),
      telephonePro: new FormControl(null, Validators.required),
      numeroTelephonePersonnel: new FormControl(null, Validators.required),

      });
      this.activatedRoute.params.subscribe((param: Params)=>{
        this.id = param['id'];
        if(this.id){
          this.ProprietaireService.getOne(this.id).subscribe((response: any)=>
          this.form.setValue(response));

        }

      });
  }
  addProprietaire (){
    this.ProprietaireService.add(this.form.value).subscribe(response =>{
    this.ProprietaireService.proprietaires.push(response.body);
    console.log(this.ProprietaireService.proprietaires);
    this.form.reset();
  
  });
  }
  findIndexToUpdate(item){
  return item.id===this;
  
  
  }
  updateProprietaire(){
  this.ProprietaireService.update(this.form.value).subscribe((response:any) =>{
  this.proprietaire =this.ProprietaireService.proprietaires.find(this.findIndexToUpdate, response.body.id);
  const index =this.ProprietaireService.proprietaires.indexOf(this.proprietaire)
  this.ProprietaireService.proprietaires.splice(index, 1,response.body);
  this.router.navigate(['/proprietaires']);
  this.ProprietaireService.editMode = false;
  });
  
  }
  
  
}
