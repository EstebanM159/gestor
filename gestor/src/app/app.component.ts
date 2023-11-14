import { Component, OnInit } from '@angular/core';
import { TaskCRUDService } from './task-crud.service';
import { task } from './models/task';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  tasks: task[] = [];
  constructor (private taskService : TaskCRUDService){}
  title = 'gestor';
  status: boolean = false
  // FALTA agregar cors al server
 ngOnInit(): void {
    this.taskService.getTasks().subscribe(
      (data: task[]) => {
        this.tasks = data;
      },
      (error) => {
        console.error('Error al obtener tareas:', error);
      }
    );
  }
  toggleStatus(valor:boolean){
    this.status= valor
  }
  
}
