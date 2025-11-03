import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environments'; // <- yahan se baseUrl lenge

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = `${environment.apiBaseUrl}/api/contact`; // 👈 yaha fix

  constructor(private http: HttpClient) {}

  sendContactForm(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data, {
      headers: { 'Content-Type': 'application/json' }
    });
  }
}