import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable()
export class ContratService {

contrats: any [] = [];
editMode = false;
URL ='http://localhost:8082/apiContrat'; 
constructor (private http: HttpClient){

}

add(contrat){

    return this.http.post(this.URL+'/add', contrat, { observe: 'response'});
}

update (contrat){

    return this.http.put(this.URL+'/update',contrat, { observe: 'response'});
}

findAll(){
return this.http.get<any[]>(this.URL+'/contrats/').pipe(map(value => this.contrats = value))
}

delete (id){
    return this.http.delete(this.URL+'/delete/'+ id);
}

getOne (id){
    return this.http.get<any>(this.URL+'/contrat/'+ id);
}




}