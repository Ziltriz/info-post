
import { HttpClient } from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';


export class Hero {
	
	userId!: number;
	id!:number;
	title!:string;
	body!:string;
	
}



let _url = "https://jsonplaceholder.typicode.com/posts"; 


@Injectable()
export class Service {

	constructor(private http:HttpClient){}
    getHeroes() {
    
        return this.http.get<Hero[]>(_url);
    }
    
}


