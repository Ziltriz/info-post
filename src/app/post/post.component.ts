
import { Component, NgModule, OnInit } from '@angular/core';
import { Hero, Service } from './post.service';



@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers:[Service]
  
})

export class PostComponent implements OnInit{
 dataSource:Hero[];



  constructor(service:Service){
    this.dataSource= service.getHeroes()
  }

    editorPreparing(e:any) {
      if(e.dataField === "Head_ID" && e.row.data.ID === 1) {
          e.editorOptions.disabled = true;
          e.editorOptions.value = null;
      }
    
  }
  initNewRow(e:any) {
    e.data.Head_ID = 1;
   }
  
  
 

    ngOnInit(){
      
     
    }
  }
    
  
