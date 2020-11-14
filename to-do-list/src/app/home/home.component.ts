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
  
  constructor( private taskApiService: TaskApiService) {  }

  // dataSource = new TaskDataSource(this.taskApiService);
  dataSource: Task[];

  async ngOnInit() { 
    this.dataSource = await this.taskApiService.getTasks().toPromise();
  }

  async deleteTask(id) {
    if (window.confirm("Você deseja excluir?")) {
      await this.taskApiService.deleteTask(id).toPromise();
      this.dataSource = await this.taskApiService.getTasks().toPromise();
      // this.taskApiService.deleteTask(id).subscribe(data => {
      //   this.dataSource = new TaskDataSource(this.taskApiService);
      // })
    }
  }

}

export class TaskDataSource extends DataSource<Task> {
  constructor(private taskApiService: TaskApiService) {
    super();
  }

  isEmpty = false;

  connect(): Observable<Task[]> {
    let observble = this.taskApiService.getTasks();
    observble.subscribe((data) => {
      this.isEmpty = data.length == 0;
    })
    return observble
  }

  disconnect() { }

}
