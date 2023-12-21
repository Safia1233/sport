import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { matchesData } from 'src/app/data/data';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-edite-match',
  templateUrl: './edite-match.component.html',
  styleUrls: ['./edite-match.component.css']
})
export class EditeMatchComponent implements OnInit {
  editMatchForm!:FormGroup;
  match:any={};
  matches:any=[];
  id:any;
   errorMsg:string= "";
  constructor(private activatedRoute: ActivatedRoute, 
    private matchService:MatchService,
   private router:Router) { }

  ngOnInit(): void {
    
    this.id = this.activatedRoute.snapshot.paramMap.get("id")
    // responsable pour le remplissage de donnee 
    this.matchService.getMatchById(this.id).subscribe(
      (response)=>{
       this.match = response.match
    });
    // this.matches=matchesData;
    // for (let i = 0; i < this.matches.length; i++) {
    //   if (this.matches[i].id==this.id) {
    //     this.match=this.matches[i];
    //     break;
    //   }
      
    // }
  }
  editMatch(){
     console.log("here new match",this.match);
    this.matchService.editMatch(this.match).subscribe(
      (response)=>{
        console.log("here response fromBE", response.isUpdated);
      
        if (response.isUpdated) {
          this.router.navigate(['dashboard'])
        }
        else {
          this.errorMsg="Error in Editing"
        }
      })
     
    
  }
  }


