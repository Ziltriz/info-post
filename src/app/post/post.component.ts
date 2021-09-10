import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Hero } from './post.service';



@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [HttpService]
})

export class PostComponent implements OnInit{
 
  heroes:Hero[] =[]
  constructor(private HttpService: HttpService){}
      
    ngOnInit(){

    this.HttpService.getData().subscribe((data: any) => this.heroes=data["heroes"]);
    
    }

    
}
  
