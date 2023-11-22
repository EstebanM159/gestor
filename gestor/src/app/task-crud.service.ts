import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
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
  getTaskById(id:number):Observable<task>{
    return this.http.get<task>(`http://localhost:2222/task/${id}`);
  }
  addTask(data: any):Observable <any>{
    const jsonData = JSON.stringify(data);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post('http://localhost:2222/task', jsonData, {headers});
  }
  deleteTask(id:number){
    return this.http.delete(`http://localhost:2222/task/${id}`);
  }
  updateTask(id:number,data:any){
    const jsonData = JSON.stringify(data);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.patch(`http://localhost:2222/task/${id}`, jsonData, {headers});
  }
  addToFavorite(){
    
  }

}
