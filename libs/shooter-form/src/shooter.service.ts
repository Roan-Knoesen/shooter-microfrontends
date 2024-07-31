import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Shooter } from './shooter';

@Injectable({
  providedIn: 'root'
})
export class ShooterService {

  private apiServerUrl = 'http://localhost:8080/shooter'

  constructor(private http: HttpClient){}

  public updateShooter(shooter: Shooter): Observable<Shooter> {
    return this.http.put<Shooter>(`${this.apiServerUrl}/updateShooter`, shooter)
  }

  public addShooter(shooter: Shooter): Observable<Shooter> {
    return this.http.post<Shooter>(`${this.apiServerUrl}/addShooter`, shooter)
  }
}
