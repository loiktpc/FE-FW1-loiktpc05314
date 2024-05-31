import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iunit } from '../../interfaces/unit.interface';
import { Observable } from 'rxjs';
import { API_BASE_URL, API_ENDPOINT } from '../../config/api-endpoint.config';

@Injectable({
  providedIn: 'root',
})
export class UnitService {
  // nguồn : https://v17.angular.io/tutorial/tour-of-heroes/toh-pt6
  constructor(private _http: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  getUnit(): Observable<Iunit> {
    return this._http.get<Iunit>(API_BASE_URL + API_ENDPOINT.auth.unit);
  }
 
  addUnit(hero: Iunit): Observable<Iunit> {
    return this._http.post<Iunit>(API_BASE_URL + API_ENDPOINT.auth.unit, hero, this.httpOptions);
  }
  deleteUnit(id: string): Observable<Iunit> {
    return this._http.delete<Iunit>(API_BASE_URL + API_ENDPOINT.auth.unit+ '/' + id, this.httpOptions)
  }
  getUnitDetail(id: string): Observable<Iunit> {
    return this._http.get<Iunit>(API_BASE_URL + API_ENDPOINT.auth.unit+ '/' + id);
  }
  updateUnit(hero: Iunit , id : string): Observable<any> {
    return this._http.put(API_BASE_URL + API_ENDPOINT.auth.unit+ '/' + id, hero, this.httpOptions)
  }
  
}
