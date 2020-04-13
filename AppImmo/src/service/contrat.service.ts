// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { map } from 'rxjs/operators';


// @Injectable()
// export class ContratService {

// contrats: any [] = [];
// editMode = false;
// URL ='http://localhost:8082/apiCandidat'; ///////// CHANGER  TOUS LES URL///////
// constructor (private http: HttpClient){

// }

// add(contrat){

//     return this.http.post(this.URL+'/ajout', contrat, { observe: 'response'});
// }

// update (contrat){

//     return this.http.put(this.URL+'/update',contrat, { observe: 'response'});
// }

// findAll(){
// return this.http.get<any[]>(this.URL+'/candidats/').pipe(map(value => this.contrats = value))
// }

// delete (index){
//     return this.http.delete(this.URL+'/delete/'+ index);
// }

// getOne (index){
//     return this.http.get<any>(this.URL+'/candidat/'+ index);
// }




// }