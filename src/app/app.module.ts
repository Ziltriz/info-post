import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import  {  DxButtonModule,
   DxScrollViewModule, 
     DxSortableModule,
     DxDataGridModule,
        DxCheckBoxModule,
     }  from  'devextreme-angular' ; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxButtonModule,
    HttpClientModule,
    DxScrollViewModule,
    DxSortableModule,
    FormsModule,
    DxDataGridModule,
    DxCheckBoxModule
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
