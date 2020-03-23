import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Routes} from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {
loginUserFormGroup:FormGroup;
result:any;
  constructor(private formBuilder:FormBuilder,private router:Router) { }

  ngOnInit() {
    this.loginUserFormGroup=this.formBuilder.group({
userName:[''],
password:['']
    })
  
  }
  login(){
    let userName=this.loginUserFormGroup.controls.userName.value;
    let password=this.loginUserFormGroup.controls.password.value;
    this.result=JSON.parse(localStorage.getItem('token'));
    console.log(this.result);
       
          if(userName == this.result.UserName && password == this.result.Password){
         alert("you successfully login to naukri.com!!")
            
           this.router.navigate(["/findjobs"]);
           
          }
          else{
            alert("invalid username and password!!!");
            console.log("error");
          }
        }   
  }

