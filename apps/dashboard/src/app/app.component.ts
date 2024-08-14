import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule, CommonModule],
  selector: 'shooter-microfrontends-root',
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" style="color:white;">Shooter Manager</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor02"
        aria-controls="navbarColor02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarColor02">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <!-- When addshooter is clicked it must navigate to the add-shooter microfrontend via the url-->
            <a class="nav-link" routerLink="add-shooter"  
              >Add Shooter <span class="sr-only">(current)</span></a
            >
          </li>
        </ul>
      </div>
    </nav>
    <router-outlet> </router-outlet> <!--This router-outlet is used to display the shooter-card microfrontend conent on the dashboard-->
  `,
})
export class AppComponent {}
