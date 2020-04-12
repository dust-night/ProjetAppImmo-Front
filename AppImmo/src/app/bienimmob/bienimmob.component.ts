import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-bienimmob',
  templateUrl: './bienimmob.component.html',
  styleUrls: ['./bienimmob.component.css']
})
export class BienimmobComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  redirect(){
    
    this.router.navigate(['bienimmob/tableauimmo'])

}

rediriger(){

  this.router.navigate(['bienimmob/immoform'])
}


}
