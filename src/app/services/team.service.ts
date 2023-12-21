import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
   teamUrl= "http://localhost:3000/teams"
  constructor(private httpClient:HttpClient) { }
 getAllTeams(){
  return this.httpClient.get<{teams:any}>(this.teamUrl)
 };
 getTeamsById(id:any){
  return this.httpClient.get<{team:any}>(`${this.teamUrl}/${id}`)
 };
 addTeam(obj:any){
 return this.httpClient.post<{msg:string}>(this.teamUrl,obj)
 }
 editeTeam(obj:any){
  return this.httpClient.put<{isUpdated:boolean}>(this.teamUrl,obj)
 }
 deleteTeam(id:any){
  return this.httpClient.delete<{msg:any}>(`${this.teamUrl}/${id}`)
 }
}
