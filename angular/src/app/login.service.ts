import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private readonly http: HttpClient) { }

  login(username: string, password: string): Observable<string> {
    console.log('login');
    return this.http.post('/auth', { username, password }).pipe(
      map(() => username),
      catchError(err => throwError(() => new Error(err)))
    )
  }
}
