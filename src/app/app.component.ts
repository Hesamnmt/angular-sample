import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  homeComponent = HomeComponent;
  
  
  title = 'project';
  name = new FormControl('');

}
