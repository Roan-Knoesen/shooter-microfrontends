import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Shooter } from '../../../../libs/shooter-form/src/lib/entity/shooter';

@Injectable({
  providedIn: 'root',
})
export class GetShootersService {
  private apiServerUrl = 'http://localhost:8080/shooter';

  constructor(private http: HttpClient) {}

  public getShooters(): Observable<Shooter[]> {
    return this.http.get<Shooter[]>(`${this.apiServerUrl}/findall`);
  }

  public deleteShooter(id: string): Observable<Shooter[]> {
    return this.http.delete<Shooter[]>(
      `${this.apiServerUrl}/deleteShooter/${id}`
    );
  }
}
