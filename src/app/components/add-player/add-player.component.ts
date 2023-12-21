import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';
import { TeamService } from 'src/app/services/team.service';
@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  // plyer c'est l'objet
  player: any = {};
  teams: any = [];
  teamId: any;
  imagePreview: any;
  path: string = ""
  img: any;

  // id form
  addPlayerForm!: FormGroup;
  constructor(private router: Router, private playerService: PlayerService,
    private teamService: TeamService) { }

  ngOnInit(): void {
    // this.path = this.router.url;
    // console.log("here path", this.path);
    this.teamService.getAllTeams().subscribe((response) => {
      console.log("here response from Be", response);
      this.teams = response.teams;

    })
  }
  addPlayer() {
    console.log("here add player", this.player, this.img);
    this.player.idTeam = this.teamId
    this.playerService.addPlayer(this.player, this.img).subscribe((response) => {
      console.log("here response fromBE", response);
      this.router.navigate(['/dashboard'])

    })
  }
  selectTeam(evt: any) {
    console.log("here event", evt.target.value);
    this.teamId = evt.target.value
  }
  onImageSelected(event: Event) {
    const fileInput = (event.target as HTMLInputElement);
    // const file = (fileInput.files as FileList)[0];
    const files = fileInput.files;

    if (files && files.length > 0) {
      const file = files[0];
      this.img = file;

      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result as string
      };
      reader.readAsDataURL(file);
    }
  }
}
