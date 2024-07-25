import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],
  selector: 'shooter-microfrontends-add-shooter-entry',
  template: `
    <div class="container mt-5">
      <div class="card">
        <div class="card-header">
          <h5 class="card-title">Add Shooter</h5>
        </div>
        <div class="card-body">
          <form #addForm="ngForm">
            <div class="form-group">
              <label for="avatar">Select an avatar</label>
              <div>
                <label *ngFor="let avatar of avatars">
                  <input type="radio" ngModel name="avatar" [value]="avatar.url" required>
                  <img [src]="avatar.url" alt="" class="img-fluid rounded-circle w-60">
                </label>
              </div>
            </div>
            <div class="form-group">
              <label for="name">Name</label>
              <input type="text" ngModel name="name" class="form-control" id="name" placeholder="Name" required>
            </div>
            <div class="form-group">
              <label for="surname">Surname</label>
              <input type="text" ngModel name="surname" class="form-control" id="surname" placeholder="Surname" required>
            </div>
            <div class="form-group">
              <label for="code">Shooter Code</label>
              <input type="text" ngModel name="code" class="form-control" id="code" placeholder="Code" required>
            </div>
            <div class="form-group">
              <label for="id">Shooter ID</label>
              <input type="text" ngModel name="id" class="form-control" id="id" placeholder="ID" required>
            </div>
            <div class="form-group">
              <label for="caliber">Rifle Caliber</label>
              <input type="text" ngModel name="caliber" class="form-control" id="caliber" placeholder="Caliber" required>
            </div>
            <div class="form-group">
              <label for="number">Phone Number</label>
              <input type="text" ngModel name="number" class="form-control" id="number" placeholder="Phone" required>
            </div>
            <div class="card-footer text-right">
              <button [disabled]="addForm.invalid" type="submit" class="btn btn-primary">Save changes</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  `,
})
export class RemoteEntryComponent {
  avatars = [
    { url: 'https://bootdey.com/img/Content/avatar/avatar6.png' },
    { url: 'https://bootdey.com/img/Content/avatar/avatar5.png' },
    { url: 'https://bootdey.com/img/Content/avatar/avatar4.png' },
    { url: 'https://bootdey.com/img/Content/avatar/avatar3.png' },
    { url: 'https://bootdey.com/img/Content/avatar/avatar2.png' },
    { url: 'https://bootdey.com/img/Content/avatar/avatar1.png' },
  ];
}
