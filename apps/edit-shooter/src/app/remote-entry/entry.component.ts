import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShooterFormComponent } from '@shooter-microfrontends/shooter-form';

@Component({
  standalone: true,
  imports: [CommonModule, ShooterFormComponent],
  selector: 'shooter-microfrontends-edit-shooter-entry',
  templateUrl: './entry.component.html',
})
export class RemoteEntryComponent {
  
}
