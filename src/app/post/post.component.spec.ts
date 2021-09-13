import { TestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpTestingController } from '@angular/common/http/testing';
import { Service, User} from "./post.service";
import { Observable } from "rxjs";
import { PostComponent } from "./post.component";



describe('Post service', ()=>{
     let service:Service;
     let httpMock:HttpTestingController;
     let post:PostComponent;
beforeEach(() => {
     

     TestBed.configureTestingModule({
       imports: [HttpClientTestingModule],
       providers: [Service]
     }).compileComponents();
      service = TestBed.inject(Service);
      httpMock = TestBed.get(HttpTestingController);
   });

   it('should component compile', ()=>{
     const service: Service = TestBed.get(Service);
     expect(service).toBeTruthy();
   })


   it('getUsers retunred data', () => {
     const _url ="https://jsonplaceholder.typicode.com/posts"
     
     service.getUsers(_url).subscribe((data)=>{
          expect(data[0].userId).toBe(1);
     })


})
})