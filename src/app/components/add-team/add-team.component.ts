import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {  Router } from '@angular/router';
import { StaduimService } from 'src/app/services/staduim.service';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {
  team:any={};
  addTeamForm!:FormGroup;
  staduims:any=[]
  
  staduimId:any
  constructor(private teamService:TeamService,
     private router:Router, 
     private staduimService:StaduimService) { }

  ngOnInit(): void {
    this.staduimService.getAllStaduim().subscribe((response)=>{
      console.log("here response from Be", response);
      this.staduims=response.staduims
    })
  }

  addTeam(){
    console.log("here add team", this.team);
    this.team.sId=this.staduimId
    this.teamService.addTeam(this.team).subscribe((data)=>{
     console.log("here response from BE",data);
    //  this.team=data.msg
     this.router.navigate(['dashboard'])
    })
    }
    selectStadium(evt: any) {
      console.log("here event", evt.target.value);
     this.staduimId = evt.target.value
    }
  
    }
   


