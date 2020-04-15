import { BienService } from './../../../service/bienimmo';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tableauimmo',
  templateUrl: './tableauimmo.component.html',
  styleUrls: ['./tableauimmo.component.css']
})
export class TableauimmoComponent implements OnInit {

  BienList: any[] = [];

  constructor(private BienService: BienService, private router: Router) { }

  ngOnInit() {

    this.findAll();
  }

  findAll(){

    this.BienService.findAll().subscribe((value:any[])=>
      this.BienList = value
    
    );
  }

  delete(id, index){

    this.BienService.delete(id).subscribe(response =>{
  
      this.BienService.biens.splice(index, 1);
  
  
    })
  }
  
  edit(id){
  
    this.router.navigate(['/bienimmob/edit', id]);
    this.BienService.editMode = true;
  }

}
