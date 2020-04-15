import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable()
export class RdvService {

rdvs: any [] = [];
editMode = false;
URL ='http://localhost:8082/apiVisite';
constructor (private http: HttpClient){

}

add(rdv){

    return this.http.post(this.URL+'/add',rdv, { observe: 'response'});
}

update (rdv){

    return this.http.put(this.URL+'/update',rdv, { observe: 'response'});
}

findAll(){
return this.http.get<any[]>(this.URL+'/visites').pipe(map(value => this.rdvs = value))
}

delete (id){
    return this.http.delete(this.URL+'/delete/'+ id);
}

getOne (id){
    return this.http.get<any>(this.URL+'/visite/'+ id);
}




}