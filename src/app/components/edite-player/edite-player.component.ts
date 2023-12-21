import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-edite-player',
  templateUrl: './edite-player.component.html',
  styleUrls: ['./edite-player.component.css']
})
export class EditePlayerComponent implements OnInit {
  editPlayerForm!: FormGroup
  player:any ={}
  players:any =[]
  id:any
  constructor(private activateRouter:ActivatedRoute, 
   private router:Router, private playerService:PlayerService ) { }

  ngOnInit(): void {
    // recuperer l'id
    this.id = this.activateRouter.snapshot.paramMap.get("id");
    this.playerService.getPlayerById(this.id).subscribe((response)=>{
      console.log("here response fromBE", response);
      this.player = response.player
    })
  }
 
  editPlayer(){
    console.log("here new player", this.player);
    this.playerService.editPlayer(this.player).subscribe((response)=>{
     console.log("here response fromBE",response.isUpdated);
     this.router.navigate(['/dashboard'])
     
    })
  }
}
