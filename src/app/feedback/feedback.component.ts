import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
feedbackFormGroup:FormGroup;
  constructor(private formbuilder:FormBuilder,private router:Router) { }

  ngOnInit() {
    this.feedbackFormGroup=this.formbuilder.group({
      myName:[''],
      myEmail:[''],
      myNumber:[''],
      myMessage:['']
    })
  }
display(){
  let dataFeedback={UserName:this.feedbackFormGroup.controls.myName.value,UserEmail:this.feedbackFormGroup.controls.myEmail.value,Mobile:this.feedbackFormGroup.controls.myNumber.value,Message:this.feedbackFormGroup.controls.myMessage.value,}
  console.log(dataFeedback);
  localStorage.setItem('userdata',JSON.stringify(dataFeedback));
           this.router.navigate(['/findjobs']);  
}
}