import { Component } from '@angular/core';
import { GenerateDataComponent } from './generate-data/generate-data.component';
 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  title = 'Forms'; 

  // values: object;

  userData(value){
    // this.values = value;
    console.log(value);

    // console.log(value.controls['name'].value);   
  }
} 