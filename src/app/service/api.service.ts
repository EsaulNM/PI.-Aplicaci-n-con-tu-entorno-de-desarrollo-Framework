import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; // importamos el Observable


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'https://rickandmortyapi.com/api';

  constructor(private http: HttpClient) { }

  public getData(): Observable<any> {
    const url = `${this.baseUrl}/character`;
    return this.http.get<any>(url);
  }

  public getEpisodes(): Observable<any> {
    const url = `${this.baseUrl}/episode`;
    return this.http.get<any>(url);
  }

  public getLocations(): Observable<any> {
    const url = `${this.baseUrl}/location`;
    return this.http.get<any>(url);
  }

}
