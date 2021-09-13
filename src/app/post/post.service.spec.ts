import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";
import { Service, User } from "./post.service";

         
describe('Service test', ()=>{
     let service: Service;
     let http:HttpClient;

     beforeEach(()=>service = new Service(http));


     it ('service vork?',()=>{
          expect(service).toBeTruthy()
     });

})