import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import  {  DxButtonModule, DxDateBoxModule, DxFormModule, DxSelectBoxModule, DxTextAreaModule  }  from  'devextreme-angular' ; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { FormComponent } from './form/form.component';
import { DxScrollViewModule, DxSortableModule } from 'devextreme-angular';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxButtonModule,
    HttpClientModule,
    DxScrollViewModule,
    DxSortableModule,
    FormsModule,
    DxSelectBoxModule,
	DxTextAreaModule,
	DxDateBoxModule,
	DxFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
