import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule, CommonModule],
  selector: 'shooter-microfrontends-root',
  template: `
  <div class="dashboard-nav">Dashboard</div>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent implements OnInit{

  constructor(private router: Router) {}
  
  ngOnInit(){
    this.router.navigateByUrl('navbar');
  }
}
