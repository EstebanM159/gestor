import { Component, Input } from '@angular/core';
import { task } from '../models/task';
import { TaskCRUDService } from '../task-crud.service';

@Component({
  selector: 'app-tarea-container',
  templateUrl: './tarea-container.component.html',
  styleUrls: ['./tarea-container.component.css']
})
export class TareaContainerComponent {
  constructor(private taskservice:TaskCRUDService){}
  tasks: task[] = [];
  @Input() data!:task;
  showId(){
    console.log(this.data.id);
  }
  getTasks(){
    this.taskservice.getTasks().subscribe(data=>{
      this.tasks = data;
    });
  }
  deleteTask(){
    this.taskservice.deleteTask(this.data.id).subscribe(response => {
      console.log('Respuesta de la API:', response)});
  }
}
