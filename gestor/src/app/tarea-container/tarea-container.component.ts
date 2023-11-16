import { Component, EventEmitter, Input, Output } from '@angular/core';
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
   @Output() taskDeleted: EventEmitter<void> = new EventEmitter<void>();
  showId(){
    console.log(this.data.id);
  }
  
  deleteTask() {
    let borrado = this.taskservice.deleteTask(this.data.id).subscribe();
    if(borrado){
      this.taskDeleted.emit();
    }else{
      // Deberia poder manejarse de otra manera el error?
      console.log('No se puedo borrar la tarea');
    }
  }


}

