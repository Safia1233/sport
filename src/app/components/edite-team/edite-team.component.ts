import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-edite-team',
  templateUrl: './edite-team.component.html',
  styleUrls: ['./edite-team.component.css']
})
export class EditeTeamComponent implements OnInit {
  editTeamForm!:FormGroup;
  team: any={};
  teams: any=[];
  id:any;
  errorMsg:any;
  constructor(private teamService:TeamService,
  private activateRouter:ActivatedRoute, private router:Router ) { }

  ngOnInit(): void {
  this.id = this.activateRouter.snapshot.paramMap.get("id")
    this.teamService.getTeamsById(this.id).subscribe((response)=>{
      console.log("here response from BE",response);
      this.team=response.team
    })
  }
  editTeam(){
   this.teamService.editeTeam(this.team).subscribe((data)=>{
    console.log("here response from BE",data.isUpdated);
     
    if (data.isUpdated) {
      this.router.navigate(['dashboard'])
    } else {
      this.errorMsg="Error in Editing"
    }
    
   })
  }
}
