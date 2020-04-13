import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contrats',
  templateUrl: './contrats.component.html',
  styleUrls: ['./contrats.component.css']
})
export class ContratsComponent implements OnInit {
  form: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      ref: new FormControl(null, Validators.required),
      nom: new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
      prenom: new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
      adresse: new FormControl(null, Validators.required),
      contact: new FormControl(null, Validators.required),
      date: new FormControl(null, Validators.required),
      prix: new FormControl(null, Validators.required)

      });
  }

}
