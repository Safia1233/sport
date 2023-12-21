import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';
// import { Router } from 'express';

@Component({
  selector: 'app-teams-table',
  templateUrl: './teams-table.component.html',
  styleUrls: ['./teams-table.component.css']
})
export class TeamsTableComponent implements OnInit {
 teams:any=[]
  team: any={}
  constructor(private router: Router,
    private teamService:TeamService) { }

  ngOnInit(): void {
    this.teamService.getAllTeams().subscribe((response)=>{
       console.log("here response from BE",response);
       this.teams= response.teams
    })
  }
  goToDisplay(id:number){
    this.router.navigate([`teamDisplay/${id}`]);

  }

  goToEdit(id:number){
this.router.navigate([`editTeam/${id}`])
    // alert("here edit team" +id)
  }
  delete(id:number){
    // alert(`here object number ${id} deleted`);
 this.teamService.deleteTeam(id).subscribe((response)=>{
  console.log("here reponse from BE", response.msg);
  if (response.msg) {
    this.teamService.getAllTeams().subscribe((response)=>{
      console.log("here response from BE",response);
      this.teams=response.teams;
    })
   }
 });
  }
}
