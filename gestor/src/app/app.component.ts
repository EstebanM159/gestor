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
  singleTask:task={
    titulo: '',
    descripcion: '',
    prioridad: 0,
    estado: '',
    id: 0
  };
   formModel = {
    titulo: '',
    descripcion: '',
    prioridad: 0,
    estado: '',
   
  };
  title = 'gestor';
  status: boolean = false;
  statusUpdate :boolean=false;
 ngOnInit(): void {
    this.getTasks();
  }
  getTasks(){
    
    this.taskService.getTasks().subscribe(data=>{
      this.tasks = data;
    });
  }
  onTaskDeleted(){
    console.log("Borrado")
    setTimeout(() => {
      this.getTasks();
      console.log("Actualizado")
    }, 300);
  }
  // Traigo los datos para colocarlos en los inputs
  onTaskToUpdate(e:number){
    this.taskService.getTaskById(e).subscribe((info:any)=>{
      this.singleTask =info[0]
      if(this.singleTask){
        this.toggleStatusUpdate(true)
      }
    })
    return this.singleTask
  }
  onSubmitxUpdate(e:Event){
    // console.log(this.singleTask.id)
    this.taskService.updateTask(this.singleTask.id,this.singleTask).subscribe(result=>console.log(result)) 
  }
  onSubmit(e:Event) {
    this.taskService.addTask(this.formModel).subscribe(response => {
    });
    this.formModel = this.formModel = {
      titulo: '',
      descripcion: '',
      prioridad: 0,
      estado: '',};
    this.toggleStatus(false);
  }
  toggleStatus(valor:boolean){
    this.status= valor;
    this.getTasks();
  }
  toggleStatusUpdate(valor:boolean){
    this.statusUpdate= valor;
    this.getTasks();
  }
  
}
