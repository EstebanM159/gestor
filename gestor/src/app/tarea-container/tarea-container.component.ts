import { Component, EventEmitter, Input, Output } from '@angular/core';
import { task } from '../models/task';
import { TaskCRUDService } from '../task-crud.service';

@Component({
  selector: 'app-tarea-container',
  templateUrl: './tarea-container.component.html',
  styleUrls: ['./tarea-container.component.css']
})
export class TareaContainerComponent {
  constructor(private taskService:TaskCRUDService){}
  tasks: task[] = [];
  @Input() data!:task;
  @Output() taskDeleted: EventEmitter<void> = new EventEmitter<void>();
  @Output() taskToUpdate: EventEmitter<any> = new EventEmitter();
  showId(){
    console.log(this.data.id);
  }
  
  deleteTask() {
    this.taskService.deleteTask(this.data.id).subscribe(()=>{
      this.taskDeleted.emit();
    });
  }
  updateTask(){
    this.taskToUpdate.emit(this.data.id);
    //emito el evento con la id y desde el padre ejecuto la llamada al servicio
  }

}

