
import { Component, NgModule, OnInit } from '@angular/core';
import { Hero, Service } from './post.service';



@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers:[Service]
  
})

export class PostComponent implements OnInit{
 dataSource!:Hero[];



  constructor(private service:Service){
   
  }

  
  
 

    ngOnInit(){
      this.service.getHeroes().subscribe((data:any)=>{this.dataSource = data})
     
    }
  }
    
  
