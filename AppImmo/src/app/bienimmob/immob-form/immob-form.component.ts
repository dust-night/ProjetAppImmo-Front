import { BienService } from './../../../service/bienimmo';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-immob-form',
  templateUrl: './immob-form.component.html',
  styleUrls: ['./immob-form.component.css']
})
export class ImmobFormComponent implements OnInit {
  form: FormGroup;
  id:any;
  mode: boolean;
  bien: any;
  
  constructor(private BienService: BienService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      typeBien: new FormControl(null),
      dateSoumission: new FormControl(null),
      statut: new FormControl(null),
      disponible: new FormControl(null),
      acheté: new FormControl(null),
      loué: new FormControl(null),
      modeOffre: new FormControl(null),
      localisation: new FormControl(null),
      àacheté: new FormControl(null),
      àloué: new FormControl(null),
      revenuCadastral: new FormControl(null),

    });
    this.activatedRoute.params.subscribe((param:Params)=> {
      this.id = param['id']
      if (this.id) {

        this.BienService.getOne(this.id).subscribe((response:any) =>
        this.form.setValue(response));
        
      }




    });



  }

  findIindexToUpdate(item){

    return item.id == this;
    
    
      }

      addBien(){

        this.BienService.ajout(this.form.value).subscribe(response => {
          this.BienService.biens.push(response.body);
          console.log(this.BienService.biens);
          this.form.reset();
      
        });
      }

      updateBien(){
        this.BienService.update(this.form.value).subscribe((response: any) => {
          this.bien = this.BienService.biens.find(this.findIindexToUpdate, response.body.id)
          const index = this.BienService.biens.indexOf(this.bien);
      
        this.BienService.biens.splice(index,1,response.body);
        this.router.navigate(['/bienimmob/immoform']);
        this.BienService.editMode = false;
        })
      
      }


}
