import { ClientService } from 'src/service/client.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  clientsList: any[] = [];
  constructor(private ClientService: ClientService, private router: Router) { }

  ngOnInit() {
    this.findAll();
  }

findAll(){

  this.ClientService.findAll().subscribe((value:any[])=>
    this.clientsList = value
  
  );
}

delete(id, index){

  this.ClientService.delete(id).subscribe(response =>{

    this.ClientService.clients.splice(index, 1);


  })
}

edit(id){

  this.router.navigate(['/client/edit', id]);
  this.ClientService.editMode = true;
}





}
