import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { AddShooterService } from '../add-shooter.service';
import { Router } from '@angular/router';
import { ShooterFormComponent } from 'libs/shooter-form/src/lib/shooter-form/shooter-form.component';
import { Shooter } from 'libs/shooter-form/src/shooter';

@Component({
  standalone: true,
  imports: [CommonModule, ShooterFormComponent],
  selector: 'shooter-microfrontends-add-shooter-entry',
  templateUrl: './entry.component.html'
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

  constructor(private shooterService: AddShooterService, private router: Router) {}

  public onAddShooter(): void {
    //this.router.navigateByUrl('shooter-card')
    //document.getElementById('add-shooter-form')!.click();
    // this.shooterService.addShooter(shooterForm.value).subscribe(
    //   (response: Shooter) => {
    //     console.log(response);
    //     shooterForm.reset();
    //   },
    //   (error: HttpErrorResponse) => {
    //     alert(error.message);
    //     shooterForm.reset();
    //   }
    // );
  }
}
