import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
playerUrl= "http://localhost:3000/players"
team: any={}
  constructor(private httpClient:HttpClient) { }
  getAllPlayers(){
   return this.httpClient.get<{players:any}>(this.playerUrl)
  };
  getPlayerById(id:any){
    return this.httpClient.get<{player:any}>(`${this.playerUrl}/${id}`)
  };
  addPlayer(obj:any, img:File){
    let formData = new FormData();
    formData.append("namePlayer", obj.namePlayer);
    formData.append("number", obj.number);
    formData.append("age", obj.age);
    formData.append("position", obj.position);
    formData.append("idTeam", obj.idTeam);
    formData.append("img",img);
    return this.httpClient.post<{msg:string}>(this.playerUrl,formData)
  };
  editPlayer(obj:any){
    return this.httpClient.put<{isUpdated:any}>(this.playerUrl,obj)
  };
  deletePlayer(id:any){
    return this.httpClient.delete<{msg:any}>(`${this.playerUrl}/${id}`)
  };
}
