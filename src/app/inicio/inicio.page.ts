import { Component, OnInit } from '@angular/core';
import { TaskService } from '../service/task.service';
import {Task} from '../interfaces/task';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  
  tasks: Task[]=[];

  
  constructor(private taskService: TaskService) { }


  ngOnInit() {
    this.taskService.getAllTasks()
    .subscribe(tasks=>{
    console.log(tasks);
    this.tasks=tasks;
    });
    }

}
