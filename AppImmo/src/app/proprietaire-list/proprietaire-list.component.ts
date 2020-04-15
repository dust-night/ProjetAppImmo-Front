import { ProprietaireService } from 'src/service/proprietaire.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-proprietaire-list',
  templateUrl: './proprietaire-list.component.html',
  styleUrls: ['./proprietaire-list.component.css']
})
export class ProprietaireListComponent implements OnInit {

proprietairesList: any [] = [];
constructor( private ProprietaireService: ProprietaireService, private router: Router) { }

ngOnInit(): void {
  this.findAll();
}

 findAll (){
  this.ProprietaireService.findAll().subscribe((value: any [])=>
  this.proprietairesList = value
  );
  
  
    }
  
  delete (id, index){
  this.ProprietaireService.delete(id).subscribe(response =>{
  this.ProprietaireService.proprietaires.splice(index, 1);
  });
  }
  
  edit(id){
  this.router.navigate(['/proprietaires/edit', id]);
  this.ProprietaireService.editMode = true;
  }

}
