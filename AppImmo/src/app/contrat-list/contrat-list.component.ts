// import { ContratService } from 'src/service/contrat.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContratService } from 'src/service/contrat.service';

@Component({
  selector: 'app-contrat-list',
  templateUrl: './contrat-list.component.html',
  styleUrls: ['./contrat-list.component.css']
})
export class ContratListComponent implements OnInit {
  contratsList: any [] = [];
  constructor( private ContratService: ContratService, private router: Router) { }

  

  ngOnInit(): void {
    this.findAll();
  }

  findAll (){
    this.ContratService.findAll().subscribe((value: any [])=>
    this.contratsList = value
    );
    
    
      }
    
    delete (index, id){
    this.ContratService.delete(id).subscribe(response =>{
    this.ContratService.contrats.splice(index, 1);
    });
    }
    
    edit(id){
    this.router.navigate(['/contrat/edit', id]);
    this.ContratService.editMode = true;
    }
    


}
