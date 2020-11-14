import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task';
import { TaskApiService } from '../services/task-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  displayedColumns: string[] = ["name", "title", "description", "status", "edit", "delete"];
  
  constructor( public taskApiService: TaskApiService) {  }

  dataSource: Task[];

  ngOnInit() { 
    this.loadTasks()
  }

  loadTasks() {
    return this.taskApiService.getTasks().subscribe(data => {
      this.dataSource = data;
    })
  }

  deleteTask(id) {
    if (window.confirm("Você deseja excluir?")) {
      this.taskApiService.deleteTask(id).subscribe(data => {
        this.loadTasks();
      })
    }
  }

}

