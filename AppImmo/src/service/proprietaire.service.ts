// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { map } from 'rxjs/operators';


// @Injectable()
// export class ProprietaireService {

// proprietaires: any [] = [];
// editMode = false;
// URL ='http://localhost:8082/apiCandidat';
// constructor (private http: HttpClient){

// }

// add(proprietaire){

//     return this.http.post(this.URL+'/ajout', proprietaire, { observe: 'response'});
// }

// update (proprietaire){

//     return this.http.put(this.URL+'/update',proprietaire, { observe: 'response'});
// }

// findAll(){
// return this.http.get<any[]>(this.URL+'/candidats/').pipe(map(value => this.proprietaires = value))
// }

// delete (index){
//     return this.http.delete(this.URL+'/delete/'+ index);
// }

// getOne (index){
//     return this.http.get<any>(this.URL+'/candidat/'+ index);
// }




// }