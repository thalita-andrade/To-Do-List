import { Component, OnInit } from '@angular/core';
import { TaskApiService } from '../services/task-api.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tasks: any = [];

  constructor( private taskApiService: TaskApiService) { }

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks() {
    this.taskApiService.getTasks().subscribe((data: {}) => {
      this.tasks = data;
    })
  }

}
