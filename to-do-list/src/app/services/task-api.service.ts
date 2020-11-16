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

  getTask(id): Observable<Task>{
    return this.http.get<Task>(`${this.apiUrl}/tasks/${id}`)
      .pipe(
        retry(1), 
        catchError(this.handleError)
      )
  }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.apiUrl}/tasks`)
      .pipe(
        retry(1), 
        catchError(this.handleError)
      )
  }
  createTask(task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl + '/tasks', JSON.stringify(task), this.httpHeaders)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  updateTask(id, task): Observable<Task> {
    return this.http.put<Task>(this.apiUrl + '/tasks/' + id, JSON.stringify(task), this.httpHeaders)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  deleteTask(id): Observable<Task> {
    return this.http.delete<Task>(this.apiUrl + '/tasks/' + id, this.httpHeaders)
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
