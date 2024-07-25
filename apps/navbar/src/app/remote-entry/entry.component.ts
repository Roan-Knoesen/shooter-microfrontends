import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  styles: [`
    @import 'https://cdn.jsdelivr.net/npm/bootstrap@4.1.1/dist/css/bootstrap.min.css';
  `],
  selector: 'shooter-microfrontends-navbar-entry',
  template:  `
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" style="color:white;">Shooter Manager</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarColor02">
       <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link">Add Shooter <span class="sr-only">(current)</span></a>
        </li>
       </ul>
       <form class="form-inline my-2 my-lg-0">
        <input type="search" ngModel
        name="key" id="searchName" class="form-control mr-sm-2" placeholder="Search employees..." required>
       </form>
    </div>
  </nav>
`
})
export class RemoteEntryComponent {}
