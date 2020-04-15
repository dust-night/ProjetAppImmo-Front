import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable()
export class ProprietaireService {

proprietaires: any [] = [];
editMode = false;
URL ='http://localhost:8082/apiProprietaire';
constructor (private http: HttpClient){

}

add(proprietaire){

    return this.http.post(this.URL+'/add', proprietaire, { observe: 'response'});
}

update(proprietaire){

    return this.http.put(this.URL+'/update',proprietaire, { observe: 'response'});
}

findAll(){
return this.http.get<any[]>(this.URL+'/proprietaires/').pipe(map(value => this.proprietaires = value))
}

delete (id){
    return this.http.delete(this.URL+'/delete/'+ id);
}

getOne (id){
    return this.http.get<any>(this.URL+'/proprietaire/'+ id);
}




}