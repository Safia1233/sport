import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';
// import { Router } from 'express';

@Component({
  selector: 'app-players-table',
  templateUrl: './players-table.component.html',
  styleUrls: ['./players-table.component.css']
})
export class PlayersTableComponent implements OnInit {
players: any =[];
player: any ={}
  constructor(private router:Router,
    private playerService:PlayerService) { }

  ngOnInit(): void {
   this.playerService.getAllPlayers().subscribe(
    (response)=>{
      console.log("here to get all", response);
      this.players=response.players;
   })
  }


  goToDisplay(id:number){
    this.router.navigate([`playerDisplay/${id}`])
    alert("here go display player" +id)
  };
  goToEdit(id:number){
    this.router.navigate([`editPlayer/${id}`])
    // alert("here edit player" +id)
  }
  delete(id:number){
    // alert(`here object number ${id} deleted`);
    this.playerService.deletePlayer(id).subscribe((response)=>{
      console.log("here to response fromBE",response.msg);
      this.playerService.getAllPlayers().subscribe(
        (response)=>{
          console.log("here to get all", response);
          this.players=response.players;
       })
      
    })
  }
}
