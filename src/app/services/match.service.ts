import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  // backend address
  // http client c'est un livreur
matchUrl: string ="http://localhost:3000/matches";
  constructor(private httpClient: HttpClient) { }
// pour recuperer
  getAllMatches(){
  return this.httpClient.get<{matches : any}>(this.matchUrl);
}

// pour recuperer
// <{}>: c'est la declaration de type de retoure du serveur backend au frontend
getMatchById(id:any){
  return this.httpClient.get<{match:any}>(`${this.matchUrl}/${id}`);
}
// pour envoyer creer
addMatch(obj:any){
  return this.httpClient.post<{msg:string}>(this.matchUrl,obj);
}
// pour modifier 
editMatch(obj:any){
return this.httpClient.put<{isUpdated:boolean}>(this.matchUrl,obj)

}
// pour supprimer
deleteMatch(id:any){
  return this.httpClient.delete<{msg:boolean}>(`${this.matchUrl}/${id}`)
}
}
