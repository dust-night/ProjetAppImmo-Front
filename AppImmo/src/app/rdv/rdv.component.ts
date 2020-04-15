import { RdvService } from 'src/service/rdv.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';


@Component({
  selector: 'app-rdv',
  templateUrl: './rdv.component.html',
  styleUrls: ['./rdv.component.css']
  })
  export class RdvComponent implements OnInit  {
    form: FormGroup;
    id: any;
mode: boolean;
rdv: any;
    constructor(private RdvService: RdvService, private activatedRoute: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
    this.mode=this.RdvService.editMode;
    this.form = new FormGroup({
      nom: new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
      numvisite: new FormControl(null, Validators.required),
      numbien: new FormControl(null, Validators.required),
      date: new FormControl(null, Validators.required),
      heure: new FormControl(null, Validators.required)

      });
      this.activatedRoute.params.subscribe((param: Params)=>{
        this.id = param['id'];
        if(this.id){
          this.RdvService.getOne(this.id).subscribe((response: any)=>
          this.form.setValue(response));

        }

      });
  }
  addRdv (){
    this.RdvService.add(this.form.value).subscribe(response =>{
    this.RdvService.rdvs.push(response.body);
    console.log(this.RdvService.rdvs);
  
  });
  }
  findIndexToUpdate(item){
  return item.id===this;
  
  
  }
  updateRdv(){
  this.RdvService.update(this.form.value).subscribe((response:any) =>{
  this.rdv =this.RdvService.rdvs.find(this.findIndexToUpdate, response.body.id);
  const index =this.RdvService.rdvs.indexOf(this.rdv)
  this.RdvService.rdvs.splice(index, 1,response.body);
  this.router.navigate(['/rdv']);
  this.RdvService.editMode = false;
  });
  
  }


 
}