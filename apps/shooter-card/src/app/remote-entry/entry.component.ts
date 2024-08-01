import { Component, Injector, OnInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Router, RouterOutlet } from '@angular/router';
import { Shooter } from 'libs/shooter-form/src/lib/entity/shooter';
import { GetShootersService } from '../get-shooters.service';

@Component({
  standalone: true,
  imports: [NgFor, CommonModule, RouterOutlet],
  selector: 'shooter-microfrontends-shooter-card-entry',
  templateUrl: './entry.component.html',
})
export class RemoteEntryComponent implements OnInit{
openEdit(shooter: Shooter) {
    this.router.navigateByUrl('edit-shooter') // I dont get the changes
}

  public shooters: Shooter[] = [];
  public editShooter: Shooter | undefined;

  constructor(private shooterService: GetShootersService, private router: Router) {}

  ngOnInit() {
    this.getShooters();
  }

  public getShooters(): void{
    this.shooterService.getShooters().subscribe(
        (response: Shooter[]) => {
          this.shooters = response;
        },
        (error: HttpErrorResponse) => {
          alert(error.message)
        }
    );
  }
}
