import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StaduimService {
  staduimUrl:string = "http://localhost:3000/staduim"
  constructor( private httpClient:HttpClient) { }
 getAllStaduim(){
  return this.httpClient.get<{staduims:any}>(this.staduimUrl)
 };
 getStaduimById(id:any){
  return this.httpClient.get(`${this.staduimUrl}/${id}`)
 };
 addStaduim(obj:any){
  return this.httpClient.post<{msg:string}>(this.staduimUrl,obj)
 };
 editStaduim(obj:any){
  return this.httpClient.put(this.staduimUrl,obj)
 };
 deleteStaduim(id:any){
  return this.httpClient.delete(`${this.staduimUrl}/${id}`)
 }

}
