import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'node_modules/primeng/api';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/resources/services/auth.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(
      private router: Router, 
      public authService: AuthService) { }

  ngOnInit(): void {    
  }

  doLogout() {
    debugger
    this.authService.clear();
    this.router.navigate(['']);      
  }
}
