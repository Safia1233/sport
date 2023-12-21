import { Component, OnInit } from '@angular/core';
import { playerData } from 'src/app/data/data';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
players:any=[];

  constructor(private playerService:PlayerService) { }

  ngOnInit(): void {
  this.playerService.getAllPlayers().subscribe((data)=>{
  console.log("here response from BE", data);
   this.players=data.players
  })

  }

}
