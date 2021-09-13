
import { HttpClient } from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';


export class User {
	
	userId!: number;
	id!:number;
	title!:string;
	body!:string;
	
}




@Injectable()
export class Service {

	constructor(private http:HttpClient){}
    getUsers(_url:string) {
    
        return this.http.get<User[]>(_url)
	   
    }

}

