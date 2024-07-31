import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UpdateShooterService } from '../update-shooter.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Shooter } from 'libs/shooter-form/src/shooter';
import { ShooterFormComponent } from '@shooter-microfrontends/shooter-form';

@Component({
  standalone: true,
  imports: [CommonModule, ShooterFormComponent],
  selector: 'shooter-microfrontends-edit-shooter-entry',
  templateUrl: './entry.component.html',
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
