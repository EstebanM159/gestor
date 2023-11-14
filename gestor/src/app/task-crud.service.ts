import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { task } from './models/task';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TaskCRUDService {

  constructor(private http: HttpClient) { }

    getTasks(): Observable<task[]> {
    return this.http.get<task[]>('http://localhost:2222/task');
  }
  addTask(){

  }
  deleteTask(){

  }
  updateTask(){

  }
  addToFavorite(){
    
  }

}
