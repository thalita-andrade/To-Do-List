import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from '../models/task';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TaskApiService {

  apiUrl = "http://localhost:3000";

  constructor( private http: HttpClient) { }

  httpHeaders = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  }

  createTask(task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl + '/tasks', JSON.stringify(task), this.httpHeaders)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error code: ${error.status} \nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}