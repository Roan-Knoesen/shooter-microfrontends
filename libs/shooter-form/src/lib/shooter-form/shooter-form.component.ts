import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { Shooter } from '../../shooter';
import { ShooterService } from '../../shooter.service';
import { HttpErrorResponse } from '@angular/common/http';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

// <div class="container mt-5">
//     <div class="card">
//       <div class="card-header">
//         <h5 class="card-title">Add Shooter</h5>
//       </div>
//       <div class="card-body">
//         <form #addForm="ngForm" (ngSubmit)="onAddShooter()">
//           <div class="form-group">
//             <label for="avatar">Select an avatar</label>
//             <div>
//               <label *ngFor="let avatar of avatars">
//                 <input type="radio" ngModel name="avatar" [value]="avatar.url" required>
//                 <img [src]="avatar.url" alt="" class="img-fluid rounded-circle w-60">
//               </label>
//             </div>
//           </div>
//           <div class="form-group">
//             <label for="name">Name</label>
//             <input type="text" ngModel name="name" class="form-control" id="name" placeholder="Name" required>
//           </div>
//           <div class="form-group">
//             <label for="surname">Surname</label>
//             <input type="text" ngModel name="surname" class="form-control" id="surname" placeholder="Surname" required>
//           </div>
//           <div class="form-group">
//             <label for="code">Shooter Code</label>
//             <input type="text" ngModel name="code" class="form-control" id="code" placeholder="Code" required>
//           </div>
//           <div class="form-group">
//             <label for="id">Shooter ID</label>
//             <input type="text" ngModel name="id" class="form-control" id="id" placeholder="ID" required>
//           </div>
//           <div class="form-group">
//             <label for="caliber">Rifle Caliber</label>
//             <input type="text" ngModel name="caliber" class="form-control" id="caliber" placeholder="Caliber" required>
//           </div>
//           <div class="form-group">
//             <label for="number">Phone Number</label>
//             <input type="text" ngModel name="number" class="form-control" id="number" placeholder="Phone" required>
//           </div>
//           <div class="card-footer text-right">
//             <button [disabled]="addForm.invalid" type="submit" class="btn btn-primary">Save changes</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   </div>

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

  constructor(private shooterService: ShooterService){

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
    
  }
  
}
