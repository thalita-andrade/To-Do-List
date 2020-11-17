import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task';
import { TaskApiService } from '../services/task-api.service';
import  Swal  from 'sweetalert2';
import { ThemeService } from '../theme/theme.service';
import { Alert } from '../alert/alert';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  displayedColumns: string[] = ["name", "title", "description", "status", "edit", "delete"];
  
  constructor( private taskApiService: TaskApiService, private themeService: ThemeService) {  }

  dataSource: Task[];
  dataSourceFiltered: Task[];
  alert = new Alert;

  ngOnInit() { 
    this.loadTasks();
  }

  loadTasks() {
    return this.taskApiService.getTasks().subscribe(data => {
      this.dataSource = data;
      this.dataSourceFiltered = this.dataSource;
    });
  }

  filterTasks(status) {
    return this.dataSourceFiltered?.filter(item => item.status == status);
  }

  deleteTask(id) {
    if(this.themeService.isDarkTheme()) {
      Swal.fire(this.alert.cssAlertFirst(this.alert.objDarkTheme, this.alert.objTexts.deleteTaskDark))
      .then((result) => {
        if (result.isConfirmed) {
          Swal.fire(this.alert.cssAlertSecond(this.alert.objDarkTheme, this.alert.objTexts.deleteSuccessDark))
          .then(() => {
            this.taskApiService.deleteTask(id).subscribe(data => {
              this.loadTasks();
            });
          });
        }
      });
    } else {
      Swal.fire(this.alert.cssAlertFirst(this.alert.objLightTheme, this.alert.objTexts.deleteTaskLight))
      .then((result) => {
        if (result.isConfirmed) {
          Swal.fire(this.alert.cssAlertSecond(this.alert.objLightTheme, this.alert.objTexts.deleteSuccessLight))
          .then(() => {
            this.taskApiService.deleteTask(id).subscribe(data => {
              this.loadTasks();
            });
          });
        }
      });
    }
  }

  dataSourceIsEmpty() {
    return this.dataSource?.length == 0;
  }

  doFilter = (event: Event) => {
    const filterValue = (event.target as HTMLInputElement).value.toLowerCase();

    this.dataSourceFiltered = this.dataSource.filter(item => {
      return item.description.toLowerCase().indexOf(filterValue) >= 0 
      || item.title.toLowerCase().indexOf(filterValue) >= 0
      || item.name.toLowerCase().indexOf(filterValue) >= 0
    });
  }

}

