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
import { HttpClientModule,
HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxButtonModule,
    HttpClientModule,
    HttpClient,
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
