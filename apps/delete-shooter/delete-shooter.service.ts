import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeleteShooterService {
  private apiServerUrl = 'http://localhost:8080'

  constructor(private http: HttpClient){}

  public deleteShooter(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/shooter/deleteShooter/${id}`)
}
}
