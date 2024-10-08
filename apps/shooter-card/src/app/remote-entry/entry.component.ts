import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { Shooter } from 'libs/shooter-form/src/lib/entity/shooter';
import { GetShootersService } from '../shooter-card.service';
import { ShooterStateService } from '@shooter-microfrontends/shooter-form';
import { Subscription } from 'rxjs';

@Component({
  standalone: true,
  imports: [NgFor, CommonModule, RouterOutlet, RouterLink],
  selector: 'shooter-microfrontends-shooter-card-entry',
  templateUrl: './entry.component.html',
})
export class RemoteEntryComponent implements OnInit {
  constructor(
    private getShooterService: GetShootersService,
    private stateService: ShooterStateService,
    private router: Router
  ) {}

  public shooters: Shooter[] = [];
  public editShooter: Shooter | undefined;
  private subscriptions = new Subscription();
  
  ngOnInit() {
    this.getShooters();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  openEdit(code: string | undefined, shooter: Shooter) {
    this.stateService.initiateEditState(shooter);
    this.router.navigateByUrl(`edit-shooter/${code}`); //navigate via url to the edit microfrontend
  }

  deleteShooter(id: string) {
    this.getShooterService.deleteShooter(id).subscribe({
      next: () => {
        this.shooters.splice(
          this.shooters.findIndex((shooter) => shooter.id === id),
          1
        );
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }

  public getShooters(): void {
    const sub = this.getShooterService.getShooters().subscribe({
      next: (response: Shooter[]) => {
        if (this.shooters) {
          this.shooters = response;
        }
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
    this.subscriptions.add(sub);
  }
}
