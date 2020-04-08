import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


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
  clients: any[];

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      id: new FormControl(null, Validators.required),
      nom: new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
      prenom: new FormControl(null, [Validators.required, Validators.minLength(2), Validators.maxLength(20)])
      
  });

}



addClient(){



}




}
