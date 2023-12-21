import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { StatsComponent } from './components/stats/stats.component';
import { CupEventComponent } from './components/cup-event/cup-event.component';
import { ScoreComponent } from './components/score/score.component';
import { NewsComponent } from './components/news/news.component';
import { VideosComponent } from './components/videos/videos.component';
import { BlogComponent } from './components/blog/blog.component';
import { MatchesComponent } from './components/matches/matches.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatchesTableComponent } from './components/matches-table/matches-table.component';
import { PlayersTableComponent } from './components/players-table/players-table.component';
import { TeamsTableComponent } from './components/teams-table/teams-table.component';
import { MatchInfoComponent } from './components/match-info/match-info.component';
import { EditeMatchComponent } from './components/edite-match/edite-match.component';
import { PipesPipe } from './pipes/reverse';
import { AsterixPipe } from './pipes/asterix.pipe';
import { PlayerComponent } from './components/player/player.component';
import { PlayersComponent } from './components/players/players.component';
import {  HttpClientModule} from "@angular/common/http";
import { EditePlayerComponent } from './components/edite-player/edite-player.component';
import { WeatherComponent } from './components/weather/weather.component';
import { EditeTeamComponent } from './components/edite-team/edite-team.component';
import { AddStadiumComponent } from './components/add-stadium/add-stadium.component';
import { StadiumsTableComponent } from './components/stadiums-table/stadiums-table.component';
// import { StadiumComponent } from './components/stadium/stadium.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    StatsComponent,
    CupEventComponent,
    ScoreComponent,
    NewsComponent,
    VideosComponent,
    BlogComponent,
    MatchesComponent,
    SignupComponent,
    HomeComponent,
    DashboardComponent,
    AddMatchComponent,
    AddPlayerComponent,
    AddTeamComponent,
    ArticlesComponent,
    MatchesTableComponent,
    PlayersTableComponent,
    TeamsTableComponent,
    MatchInfoComponent,
    EditeMatchComponent,
    PipesPipe,
    AsterixPipe,
    PlayerComponent,
    PlayersComponent,
    EditePlayerComponent,
    WeatherComponent,
    EditeTeamComponent,
    AddStadiumComponent,
    StadiumsTableComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
