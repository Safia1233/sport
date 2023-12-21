import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { MatchesComponent } from './components/matches/matches.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { MatchInfoComponent } from './components/match-info/match-info.component';
import { EditeMatchComponent } from './components/edite-match/edite-match.component';
import { PlayersComponent } from './components/players/players.component';
import { EditePlayerComponent } from './components/edite-player/edite-player.component';
import { WeatherComponent } from './components/weather/weather.component';
import { EditeTeamComponent } from './components/edite-team/edite-team.component';
import { AddStadiumComponent } from './components/add-stadium/add-stadium.component';


const routes: Routes = [
  // http://localhost:4200: url de base 
{path:"",component:HomeComponent},
 // http://localhost:4200/login ==> login component va s'afficher  
 {path:"login",component:LoginComponent},
// http://localhost:4200/signup ==> signup component va s'afficher  
{path:"subscription",component:SignupComponent},
{path:"signupAdmin",component:SignupComponent},
// http://localhost:4200/matches ==> matches component va s'afficher  
{path:"matches",component:MatchesComponent},

// http://localhost:4200/dashboard ==> dashboard component va s'afficher  
{path:"dashboard",component:DashboardComponent},
// http://localhost:4200/addMatch ==> add match component va s'afficher  
{path:"addMatch",component:AddMatchComponent},
// http://localhost:4200/add team ==> add team component va s'afficher  
{path:"addTeam",component:AddTeamComponent},
// http://localhost:4200/add player ==> add players component va s'afficher  
{path:"addPlayer",component:AddPlayerComponent},
{path:"matchInfo/:id",component:MatchInfoComponent},
{path:"editMatch/:id",component:EditeMatchComponent},
{path:"players", component:PlayersComponent},
{path:"editPlayer/:id",component:EditePlayerComponent},
{path:"editTeam/:id",component:EditeTeamComponent},
{path:"weathers",component:WeatherComponent},
{path:"addStadium",component:AddStadiumComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
