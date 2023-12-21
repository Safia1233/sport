import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';
@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {
  // object
match:any={};
// id form 
// ! cad le formulaire not null
addMatchForm!:FormGroup;
  constructor(private matchService:MatchService,
    private router:Router) { }

  ngOnInit(): void {
  }
  // function will be excuted when button is chicked
  addMatch(){
  console.log("here add match", this.match);
  this.matchService.addMatch(this.match).subscribe(
    (response)=>{
      console.log("here response fromBE", response.msg);
      this.router.navigate(['dashboard'])
  
  });

  }
}
