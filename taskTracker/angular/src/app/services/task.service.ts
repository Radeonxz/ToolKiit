import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Task } from 'src/app/Task';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUri = 'http://localhost:5000/tasks';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    // const tasks = of(Tasks);
    // return tasks;
    // http client returns an observable
    return this.http.get<Task[]>(this.apiUri);
  }

  deleteTask(task: Task): Observable<Task> {
    const deleteUri = `${this.apiUri}/${task.id}`;
    return this.http.delete<Task>(deleteUri);
  }

  updateTaskReminder(task: Task): Observable<Task> {
    const putUri = `${this.apiUri}/${task.id}`;
    return this.http.put<Task>(putUri, task, httpOptions);
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUri, task, httpOptions);
  }
}
