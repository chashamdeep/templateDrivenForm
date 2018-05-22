import { Component, OnInit, Input } from '@angular/core';
 

@Component({ 
  selector: 'app-generate-data',
  templateUrl: './generate-data.component.html',
  styleUrls: ['./generate-data.component.css'],
  inputs: ['parentData']
})
export class GenerateDataComponent implements OnInit {
  // public parentData: object; 

  constructor() { }

  ngOnInit() {
  } 

}
