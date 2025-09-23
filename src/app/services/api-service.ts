import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:8080/';

  constructor(private http: HttpClient) {}

  creerUtilisateur(): Observable<any> {
    return this.http.post(`${this.apiUrl}login`, {
      username : "djonmaila",
      password : "1234"
    });
  }
}
