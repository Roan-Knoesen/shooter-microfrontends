import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UpdateShooterService } from '../update-shooter.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Shooter } from 'libs/shooter-form/src/shooter';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],
  selector: 'shooter-microfrontends-edit-shooter-entry',
  template: `
  <div class="container mt-5">
      <div class="card">
        <div class="card-header">
          <h5 class="card-title">Edit Shooter</h5>
        </div>
        <div class="card-body">
          <form #editForm="ngForm">
            <div class="form-group">
              <label for="name">Name</label>
              <input type="text" ngModel="Name" name="name" class="form-control" id="name" placeholder="Name">
            </div>
            <div class="form-group">
              <label for="surname">Surname</label>
              <input type="text" ngModel="Surname" name="surname" class="form-control" id="surname" placeholder="Surname">
            </div>
            <div class="form-group">
              <label for="code">Shooter Code</label>
              <input type="text" ngModel="Code" name="code" class="form-control" id="code" placeholder="Code">
            </div>
            <div class="form-group">
              <label for="id">Shooter ID</label>
              <input type="text" ngModel="ID" name="id" class="form-control" id="id" placeholder="ID">
            </div>
            <div class="form-group">
              <label for="caliber">Caliber</label>
              <input type="text" ngModel="Caliber" name="caliber" class="form-control" id="caliber" placeholder="Caliber">
            </div>
            <div class="form-group">
              <label for="number">Phone Number</label>
              <input type="text" ngModel="Phone Number" name="number" class="form-control" id="number" placeholder="Phone">
            </div>
            <div class="card-footer text-right">
              <button type="button" class="btn btn-secondary">Close</button>
              <button class="btn btn-primary">Save changes</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  `,
})
export class RemoteEntryComponent {
  public editShooter: Shooter | undefined;

  constructor(private shooterService: UpdateShooterService){}

  public onUpdateShooter(shooter: Shooter): void {
    this.shooterService.updateShooter(shooter).subscribe(
      (response: Shooter) => {
        console.log(response);
        //this.getShooters();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
