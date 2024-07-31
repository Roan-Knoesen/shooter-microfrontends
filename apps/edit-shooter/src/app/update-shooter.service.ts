import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Shooter } from '../../../../libs/shooter-form/src/shooter';

@Injectable({
  providedIn: 'root'
})
export class UpdateShooterService {
  private apiServerUrl = 'http://localhost:8080'

  constructor(private http: HttpClient){}

  public updateShooter(shooter: Shooter): Observable<Shooter> {
    return this.http.put<Shooter>(`${this.apiServerUrl}/shooter/updateShooter`, shooter)
  }
}
