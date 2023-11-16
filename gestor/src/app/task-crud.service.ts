import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { task } from './models/task';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TaskCRUDService {
  
  constructor(private http: HttpClient) { }
  httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};
    getTasks(): Observable<task[]> {
    return this.http.get<task[]>('http://localhost:2222/task');
  }
  addTask(data: any):Observable <any>{
    const jsonData = JSON.stringify(data);
    console.log(jsonData)
    
    return this.http.post('http://localhost:2222/task', jsonData, this.httpOptions);
  }
  deleteTask(id:number){
    return this.http.delete(`http://localhost:2222/task/${id}`, this.httpOptions);
  }
  updateTask(){

  }
  addToFavorite(){
    
  }

}
