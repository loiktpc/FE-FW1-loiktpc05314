import { Ilogin } from '../../interfaces/login.interface';
import {
  HttpClient,
  HttpClientModule,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, retry, tap } from 'rxjs';
import { API_BASE_URL, API_ENDPOINT } from '../../config/api-endpoint.config';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _http: HttpClient) {}
  // cách 1
  Login(data: Ilogin): Observable<any> {
    return this._http.post(API_BASE_URL + API_ENDPOINT.auth.login, {
      email: data.email,
      password: data.psw,
    });
  }

  // cách 2
  //  nguồn : https://dev.to/leolanese/handling-angular-api-request-using-signals-1i70
  Login2(data: Ilogin) {
    console.log('trigger fetchProfile');
    this._http
      .post<Ilogin>(API_BASE_URL + API_ENDPOINT.auth.login, {
        email: data.email,
        password: data.psw,
      })
      .pipe(
        retry(3), // thử lại yêu cầu tối đa 3 lần
        catchError((error) => {
          console.error('Error fetching profile:', error);
          return of(1); // thông báo lỗi là 1
        })
      )
      .subscribe((profile) => {
        console.log('check result 2:', profile);
      });
  }
  // cách 3
  // nguồn https://v17.angular.io/tutorial/tour-of-heroes/toh-pt6
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  login3(data: Ilogin): Observable<Ilogin> {
    return this._http
      .post<Ilogin>(
        API_BASE_URL + API_ENDPOINT.auth.login,
        {
          email: data.email,
          password: data.psw,
        },
        this.httpOptions
      )
      .pipe(
        tap((res: Ilogin) => this.log(res)),
        catchError(this.handleError<Ilogin>('addHero'))
      );
  }
  private log(message: Ilogin) {
    // method thao tác ghi log user 
    this.add(message);
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); 

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  // cách 4 // giả sử đây là service khác 
  add(message: Ilogin) {
    console.log('check result 4', message);
  }
}
