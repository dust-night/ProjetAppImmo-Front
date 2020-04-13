import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { ProprietaireService } from 'src/service/proprietaire.service';

@Component({
  selector: 'app-proprietaire-list',
  templateUrl: './proprietaire-list.component.html',
  styleUrls: ['./proprietaire-list.component.css']
})
export class ProprietaireListComponent implements OnInit {

// proprietairesList: any [] = [];
// constructor( private ProprietaireService: ProprietaireService, private router: Router) { }

ngOnInit(): void {
  // this.findAll();
}

 // findAll (){
//   this.ProprietaireService.findAll().subscribe((value: any [])=>
//   this.proprietaireList = value
//   );
  
  
//     }
  
//   delete (index){
//   this.ProprietaireService.delete(index).subscribe(response =>{
//   this.ProprietaireService.rdvs.splice(index, 1);
//   });
//   }
  
//   edit(index){
//   this.router.navigate(['/candidat/edit', id]);
//   this.ProprietaireService.editMode = true;
//   }

}
