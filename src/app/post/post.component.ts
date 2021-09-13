
import { Component, OnInit } from '@angular/core';
import {  Service, User } from './post.service';



@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers:[Service]
  
})

export class PostComponent implements OnInit{
 dataSource!:User[];
  _url = "https://jsonplaceholder.typicode.com/posts"; 

  constructor(private service:Service){
   
  }
  ngOnInit(){
      this.service.getUsers(this._url).subscribe((data:any)=>{this.dataSource = data})
    }
  }
    
  
