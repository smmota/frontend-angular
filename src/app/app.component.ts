import { Component, OnInit } from '@angular/core';
// import { PrimeNGConfig } from 'primeng/api';
// import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
// import {MenuItem} from 'primeng/api';   

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'frontend-angular';

  // constructor(private primengConfig: PrimeNGConfig) {}

  construtor() {}

  ngOnInit(){
    // this.primengConfig.ripple = true;
  }
}
