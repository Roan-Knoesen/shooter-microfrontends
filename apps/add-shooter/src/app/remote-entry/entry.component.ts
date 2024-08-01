import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShooterFormComponent } from 'libs/shooter-form/src/lib/shooter-form/shooter-form.component';

@Component({
  standalone: true,
  imports: [CommonModule, ShooterFormComponent],
  selector: 'shooter-microfrontends-add-shooter-entry',
  templateUrl: './entry.component.html'
})

export class RemoteEntryComponent {
}
