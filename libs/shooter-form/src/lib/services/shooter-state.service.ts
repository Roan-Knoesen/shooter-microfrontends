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
//Purpose: The ShooterStateService manages the state of a Shooter object within the application, allowing components to share and react to changes in this state.
//State Management: It uses a BehaviorSubject to store the current Shooter object or null and provides methods to update or clear this state.
//Reactivity: Other parts of the application can subscribe to the shooter$ observable to be notified whenever the Shooter state changes, making it easier to build reactive and synchronized components.
