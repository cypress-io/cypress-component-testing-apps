import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';

@Injectable()
export class LoginService {
  constructor(private readonly http: HttpClient) { }

  login(username: string, password: string): Observable<string> {
    return this.http.post<string>('/auth', { username, password }).pipe(map(() => username))
  }
}
