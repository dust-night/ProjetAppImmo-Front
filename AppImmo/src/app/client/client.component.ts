import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  form: FormGroup;
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  redirect(){
    
      this.router.navigate(['/client/form'])

  }

  rediriger(){

    this.router.navigate(['/client/list'])
  }

}
