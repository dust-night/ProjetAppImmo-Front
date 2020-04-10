import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-proprietaires',
  templateUrl: './proprietaires.component.html',
  styleUrls: ['./proprietaires.component.css']
})
export class ProprietairesComponent implements OnInit {
form: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
     
      nom: new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
      prenom: new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
      
      adresse: new FormControl(null, Validators.required),
      telpro: new FormControl(null, Validators.required),
      telperso: new FormControl(null, Validators.required),

      });



  }

}
