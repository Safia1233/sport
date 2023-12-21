import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import jwt_decode from 'jwt-decode';
import { Token } from '@angular/compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 // plyer c'est l'objet
 user:any={};
 errorMsg:string="";
 // id form
 loginForm!:FormGroup;
  constructor(private userService:UserService, private router:Router) { }

  ngOnInit(): void {
  }
  login(){
    console.log("here login", this.user);
     this.userService.login(this.user).subscribe((data)=>{
      console.log("here data after login", data.msg, data.token);

      // data.token si je suis connecter avec un email existe
      if (data.token) {
        // save token into session storage
        sessionStorage.setItem("token",data.token)
       
          let user:any = this.decodeToken(data.token)
          console.log("here user", user);
          console.log("here token",data.token);
          
          console.log("here decoded token", user); 
        if (user.role == "admin") {
          this.router.navigate(["dashboard"])
        } else {
          this.router.navigate([""])
        }
      } else {
        // Display Error
        this.errorMsg ="please check Email/pwd"
      }
      
     });
    }

    decodeToken(token: string) {
      return jwt_decode(token);
      }
}
