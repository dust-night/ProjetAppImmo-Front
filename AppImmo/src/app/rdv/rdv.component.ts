import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-rdv',
  templateUrl: './rdv.component.html',
  styleUrls: ['./rdv.component.css']
  })
  export class RdvComponent implements OnInit  {
    form: FormGroup;
    constructor() { }
  ngOnInit(): void {
    this.form = new FormGroup({
      nom: new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
      numvisite: new FormControl(null, Validators.required),
      numbien: new FormControl(null, Validators.required),
      date: new FormControl(null, Validators.required),
      heure: new FormControl(null, Validators.required)

      });
  }
    


 
}