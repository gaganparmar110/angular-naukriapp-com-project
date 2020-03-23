import { Component, OnInit } from '@angular/core';
import {JobLists} from '../JobListsModel';
import {Router} from '@angular/router';
@Component({
  selector: 'app-find-job',
  templateUrl: './find-job.component.html',
  styleUrls: ['./find-job.component.css']
})
export class FindJobComponent implements OnInit {
  list=JobLists;
  jobarray=[];
  constructor(private router:Router) { }

  ngOnInit() {
    for(var i=0;i<this.list.length;i++){
           this.jobarray[i]=this.list[i];   
           
    }
    console.log(this.jobarray);

  }
  check(){
    if(localStorage.getItem('token')!=null){
      alert("you successfully apply for that job!!")
    }
    else{
      this.router.navigate(['/login']);
    }
  }

}