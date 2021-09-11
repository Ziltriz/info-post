
import { Injectable } from '@angular/core';
import users from './posts.json';
export class Hero {
	
	userId!: number;
	id!:number;
	title!:string;
	body!:string;
	
}



let heroes:Hero[] = users; 


@Injectable()
export class Service {
    getHeroes() {
        return heroes;
    }
    
}


