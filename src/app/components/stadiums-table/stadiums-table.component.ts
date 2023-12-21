import { Component, OnInit } from '@angular/core';
import { StaduimService } from 'src/app/services/staduim.service';

@Component({
  selector: 'app-stadiums-table',
  templateUrl: './stadiums-table.component.html',
  styleUrls: ['./stadiums-table.component.css']
})
export class StadiumsTableComponent implements OnInit {
staduims:any=[];
  constructor(private staduimService:StaduimService) { }

  ngOnInit(): void {
    this.staduimService.getAllStaduim().subscribe((data)=>{
      console.log("here data from BE", data);
      this.staduims=data.staduims
    })
  }

}
