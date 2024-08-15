import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShooterService } from '../services/shooter.service';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Subscription } from 'rxjs';
import { Shooter } from '../entity/shooter';
import { ShooterStateService } from '../services/shooter-state.service';
import { Helpers } from '../utils/helpers';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-shooter-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './shooter-form.component.html',
  styleUrl: './shooter-form.component.css',
})
export class ShooterFormComponent implements OnDestroy, OnInit {
  avatars = [
    { url: 'https://bootdey.com/img/Content/avatar/avatar6.png' },
    { url: 'https://bootdey.com/img/Content/avatar/avatar5.png' },
    { url: 'https://bootdey.com/img/Content/avatar/avatar4.png' },
    { url: 'https://bootdey.com/img/Content/avatar/avatar3.png' },
    { url: 'https://bootdey.com/img/Content/avatar/avatar2.png' },
    { url: 'https://bootdey.com/img/Content/avatar/avatar1.png' },
  ];

  shooterForm!: FormGroup;
  private isEdit = false;
  private subscriptions = new Subscription();
  private shooter!: Shooter | null;

  constructor(
    private shooterService: ShooterService,
    private shooterStateService: ShooterStateService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  ngOnInit(): void {
    this.shooterStateService.shooter$.subscribe({
      next: (res) => {
        this.shooter = res;
        this.initForm();
        this.isEdit = true;
      },
    });
  }

  private initForm() {
    this.shooterForm = this.formBuilder.group({
      code: [this.shooter?.code || '', Validators.required],
      id: [this.shooter?.id || '', Validators.required],
      name: [this.shooter?.name || '', Validators.required],
      surname: [this.shooter?.surname || '', Validators.required],
      caliber: [this.shooter?.caliber || '', Validators.required],
      number: [this.shooter?.number || '', Validators.required],
      imageurl: [this.shooter?.imageurl || '', Validators.required],
    });
  }

  onSubmit() {
    console.log('Form values:', this.shooterForm.value);
    const shooter: Shooter = Helpers.clone(this.shooterForm.value);  //Create deep-copy of the form object and then sends back a shooter object

    if (this.isEdit) {
      this.dispatchMethod(shooter, 'updateShooter');
      this.router.navigateByUrl('shooter-card');
    } else {
      this.dispatchMethod(shooter, 'addShooter');
      this.router.navigateByUrl('shooter-card');
    }
  }

  private dispatchMethod(
    shooter: Shooter,
    operation: 'updateShooter' | 'addShooter'
  ) {
    if (this.shooter?.index) {
      shooter.index = this.shooter?.index;
    }
    const sub = this.shooterService[operation](shooter).subscribe({
      next: (response) => {
        this.shooterStateService.clearState();
        if (response) {
          console.log(response);
          this.shooterForm.reset();
        }
      },
      error: (error) => {
        alert(error.message);
      },
    });
    this.subscriptions.add(sub);
  }
}
