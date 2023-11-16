import { Component, OnInit } from '@angular/core';
import { TaskCRUDService } from './task-crud.service';
import { task } from './models/task';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor (private taskService : TaskCRUDService){}
  favorito:number=0;
  tasks: task[] = [];
   formModel = {
    titulo: '',
    descripcion: '',
    prioridad: 0,
    estado: '',
    favorito: 0
  };
  title = 'gestor';
  status: boolean = false
 ngOnInit(): void {
    this.getTasks();
  }
  getTasks(){
    this.taskService.getTasks().subscribe(data=>{
      this.tasks = data;
    });
  }
  onTaskDeleted(){
    console.log('borrado');
  }
  onSubmit(e:Event) {
    if(this.formModel.favorito){
      this.formModel.favorito=1
    }else{
      this.formModel.favorito=0
    }
    this.taskService.addTask(this.formModel).subscribe(response => {
      console.log('Respuesta de la API:', response);
    });
    
  }
  toggleStatus(valor:boolean){
    this.status= valor
    this.getTasks()
  }
  
}
