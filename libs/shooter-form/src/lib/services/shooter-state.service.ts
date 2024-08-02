import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Shooter } from '../entity/shooter';

@Injectable({
  providedIn: 'root',
})
export class ShooterStateService {
  shooter = new BehaviorSubject<Shooter | null>(null);
  shooter$ = this.shooter.asObservable();

  initiateEditState(shooter: Shooter) {
    this.shooter.next(shooter);
  }

  clearState() {
    this.shooter.next(null);
  }
}
