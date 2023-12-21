import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { StaduimService } from 'src/app/services/staduim.service';

@Component({
  selector: 'app-add-stadium',
  templateUrl: './add-stadium.component.html',
  styleUrls: ['./add-stadium.component.css']
})
export class AddStadiumComponent implements OnInit {
      staduim:any ={}
      addStaduimForm!:FormGroup
  constructor(private staduimService: StaduimService) { }

  ngOnInit(): void {
  }
  addStaduim(){
    console.log("here add staduim", this.staduim);
    this.staduimService.addStaduim(this.staduim).subscribe((data)=>{
    console.log("here data from BE",data.msg);
  })
  }
}
