import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})

export class PlayerComponent implements OnInit {
@Input() playerInput:any;
imagePreview:any
  constructor(private playerService:PlayerService,
    private router:Router) { }

  ngOnInit(): void {

  }
 

}
