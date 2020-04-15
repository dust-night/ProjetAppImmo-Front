import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class BienService {
        biens: any[] = [];
        editMode = false;
        URL='http://localhost:8082/apiBienImmo';
        constructor(private http:HttpClient){

        }

ajout(bien){
        return this.http.post(this.URL +'/add', bien, { observe: 'response' });

    }

    update(bien){
        return this.http.put(this.URL + '/update', bien, { observe: 'response' });

    }

    findAll(){
        return this.http.get<any[]>(this.URL + '/biensimmos').pipe(map(value=>this.biens=value));

    }

    delete(id){
        return this.http.delete(this.URL + '/delete/' +id); 

    }

    getOne(id){
        return this.http.get<any>(this.URL + '/bienimmo/' +id);

    }




}