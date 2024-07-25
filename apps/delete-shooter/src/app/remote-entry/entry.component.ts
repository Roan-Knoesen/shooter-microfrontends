import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'shooter-microfrontends-delete-shooter-entry',
  template: `
   <div class="container mt-5">
      <div class="card">
        <div class="card-header">
          <h5 class="card-title">Delete Shooter</h5>
        </div>
        <div class="card-body">
          <p>Are you sure you want to delete shooter Name Surname?</p>
          <div class="card-footer text-right">
            <button type="button" class="btn btn-secondary">No</button>
            <button class="btn btn-danger">Yes</button>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class RemoteEntryComponent {}
