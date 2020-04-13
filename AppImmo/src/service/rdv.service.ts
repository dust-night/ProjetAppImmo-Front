// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { map } from 'rxjs/operators';


// @Injectable()
// export class RdvService {

// rdvs: any [] = [];
// editMode = false;
// URL ='http://localhost:8082/apiCandidat';
// constructor (private http: HttpClient){

// }

// add(rdv){

//     return this.http.post(this.URL+'/ajout',rdv, { observe: 'response'});
// }

// update (rdv){

//     return this.http.put(this.URL+'/update',rdv, { observe: 'response'});
// }

// findAll(){
// return this.http.get<any[]>(this.URL+'/candidats/').pipe(map(value => this.rdvs = value))
// }

// delete (index){
//     return this.http.delete(this.URL+'/delete/'+ index);
// }

// getOne (index){
//     return this.http.get<any>(this.URL+'/candidat/'+ index);
// }




// }