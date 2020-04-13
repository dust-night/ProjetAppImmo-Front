import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { RdvService } from 'src/service/rdv.service';

@Component({
  selector: 'app-rdv-list',
  templateUrl: './rdv-list.component.html',
  styleUrls: ['./rdv-list.component.css']
})
export class RdvListComponent implements OnInit {
// rdvsList: any [] = [];
// constructor( private RdvService: RdvService, private router: Router) { }

  ngOnInit(): void {
    // this.findAll();
  }

   // findAll (){
  //   this.RdvService.findAll().subscribe((value: any [])=>
  //   this.rdvsList = value
  //   );
    
    
  //     }
    
  //   delete (index){
  //   this.RdvService.delete(index).subscribe(response =>{
  //   this.RdvService.rdvs.splice(index, 1);
  //   });
  //   }
    
  //   edit(index){
  //   this.router.navigate(['/candidat/edit', id]);
  //   this.RdvService.editMode = true;
  //   }
}
