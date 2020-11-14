import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task';
import { TaskApiService } from '../services/task-api.service';
import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  displayedColumns: string[] = ["name", "title", "description", "status", "edit", "delete"];
  
  constructor( private taskApiService: TaskApiService) { }

  dataSource = new TaskDataSource(this.taskApiService);

  ngOnInit(): void { }

  deleteTask(id) {
    if (window.confirm("Você deseja excluir?")) {
      this.taskApiService.deleteTask(id).subscribe(data => {
        this.dataSource = new TaskDataSource(this.taskApiService);
      })
    }
  }

}

export class TaskDataSource extends DataSource<Task> {
  constructor(private taskApiService: TaskApiService) {
    super();
  }

  connect(): Observable<Task[]> {
    return this.taskApiService.getTasks();
  }

  disconnect() { }

}
