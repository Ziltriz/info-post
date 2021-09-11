import { Component } from '@angular/core';
import "@angular/compiler";
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    helloWorld() {
        alert('Hello world!');
    }
    title="Info-posts"
}