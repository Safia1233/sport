import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { matchesData } from 'src/app/data/data';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-matches-table',
  templateUrl: './matches-table.component.html',
  styleUrls: ['./matches-table.component.css']
})
export class MatchesTableComponent implements OnInit {
// match:any={};
matches:any=[];
  constructor(private router: Router, private matchService:MatchService ) { }

  ngOnInit(): void {

    this.getAll();
    // this.matchService.getAllMatches().subscribe(
    //   (response)=>{
    //     console.log("here response fromBE", response);
    //     this.matches = response.matches;
        

    // })
    
  }
  goToDisplay(id:number){
    this.router.navigate([`matchInfo/${id}`])
    // alert("here edit match" +id)
   
    }
    goToEdit(id:number){
      this.router.navigate([`editMatch/${id}`])
  //  alert("here edit match" +id)
   
}

delete(id:number){
  
this.matchService.deleteMatch(id).subscribe((data)=>{
  console.log("here response fromBE", data.msg);
  // if deleted is ok, send request to get all Matches
  if (data.msg) {
 this.getAll();
}
})

}
getAll(){
  this.matchService.getAllMatches().subscribe(
    (response)=>{
      console.log("here response fromBE", response.matches);
      this.matches = response.matches;
      
  });
}
}