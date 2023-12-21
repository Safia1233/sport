import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weatherForm!:FormGroup
  weatherResult: any;
  constructor( private formBuilder:FormBuilder,
    private serviceWeather:WeatherService) { }

  ngOnInit(): void {

    this.weatherForm = this.formBuilder.group({
      city:["",[Validators.required,Validators.minLength(5)]],
    })
  }
  search(){
    this.serviceWeather.searchWeather(this.weatherForm.value).subscribe((data)=>{
      console.log("here to response from BE", data.result);
      this.weatherResult= data.result
    })
  }
  

}
