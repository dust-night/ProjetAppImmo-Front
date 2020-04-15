import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class ClientService {
        clients: any[] = [];
        editMode = false;
        URL='http://localhost:8082/apiClient';
        constructor(private http:HttpClient){

        }

ajout(client){
        return this.http.post(this.URL +'/add', client, { observe: 'response' });

    }

    update(client){
        return this.http.put(this.URL + '/update', client, { observe: 'response' });

    }

    findAll(){
        return this.http.get<any[]>(this.URL + '/clients').pipe(map(value=>this.clients=value));

    }

    delete(id){
        return this.http.delete(this.URL + '/delete/' +id); 

    }

    getOne(id){
        return this.http.get<any>(this.URL + '/client/' +id);

    }




}