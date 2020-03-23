import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Router } from '@angular/router';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
userRegisterFormGroup:FormGroup;
  submitted = false;
  constructor(private formBuilder:FormBuilder,private router:Router) { }

  ngOnInit() {
    this.userRegisterFormGroup=this.formBuilder.group({
       name:['',Validators.compose([Validators.required,Validators.maxLength(20)])],
       email:['', Validators.compose([
		Validators.required,Validators.email])],
       password:['', Validators.compose([
		Validators.required,Validators.minLength(8)
    ])],
       mobile:['', Validators.compose([
		Validators.required,Validators.minLength(10),Validators.maxLength(12)])],
       location:['',Validators.required],
       resumeFile:['',Validators.required]
    });
  }
   get registerFormControl() {
    return this.userRegisterFormGroup.controls;
  }


   onSubmit(){
    this.submitted = true;
       if (this.userRegisterFormGroup.valid) {
          let data ={UserName:this.userRegisterFormGroup.controls.name.value,Password:this.userRegisterFormGroup.controls.password.value};
      localStorage.setItem('token',JSON.stringify(data));
      this.router.navigate(["/login"]);}
  //alert("Enter details properly!!")
      }

  }

