import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { Shooter } from '../../shooter';
import { ShooterService } from '../../shooter.service';
import { HttpErrorResponse } from '@angular/common/http';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-shooter-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './shooter-form.component.html',
  styleUrl: './shooter-form.component.css',
})
export class ShooterFormComponent {
  avatars = [
    { url: 'https://bootdey.com/img/Content/avatar/avatar6.png' },
    { url: 'https://bootdey.com/img/Content/avatar/avatar5.png' },
    { url: 'https://bootdey.com/img/Content/avatar/avatar4.png' },
    { url: 'https://bootdey.com/img/Content/avatar/avatar3.png' },
    { url: 'https://bootdey.com/img/Content/avatar/avatar2.png' },
    { url: 'https://bootdey.com/img/Content/avatar/avatar1.png' },
  ];
  
  shooterForm = new FormGroup({
    code: new FormControl(''),
    id: new FormControl(''),
    name: new FormControl(''),
    surname: new FormControl(''),
    caliber: new FormControl(''),
    number: new FormControl(''),
    imageurl: new FormControl(''),
  })

  constructor(private shooterService: ShooterService, private router: Router){

  }
  
  private formToObject(formValue: any): Shooter {
    return {
      code: formValue.code,
      name: formValue.name,
      id: formValue.id,
      surname: formValue.surname,
      caliber: formValue.caliber,
      number: formValue.number,
      imageurl: formValue.imageurl
    };
  }

  onSubmit() {
    console.log('Form values:', this.shooterForm.value);
    //if (page is add){
    const shooter: Shooter = this.formToObject(this.shooterForm.value);
    this.shooterService.addShooter(shooter).subscribe(
      (response: Shooter) => {
        console.log(response);
        this.shooterForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        this.shooterForm.reset();
      }
    );
  // } else{
  //   this.shooterService.updateShooter(shooter).subscribe(
  //     (response: Shooter) => {
  //       console.log(response);
  //       //this.getShooters();
  //     },
  //     (error: HttpErrorResponse) => {
  //       alert(error.message);
  //     }
  //   );
  // } 
    this.router.navigateByUrl('shooter-card');
  }
}
