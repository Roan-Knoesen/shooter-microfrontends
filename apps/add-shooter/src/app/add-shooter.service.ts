import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Shooter } from 'libs/shooter-form/src/shooter';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddShooterService {
  private apiServerUrl = 'http://localhost:8080'

  constructor(private http: HttpClient){}

  public addShooter(shooter: Shooter): Observable<Shooter> {
    return this.http.post<Shooter>(`${this.apiServerUrl}/shooter/addShooter`, shooter)
}
}
