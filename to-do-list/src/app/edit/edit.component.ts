import { Component, OnInit } from '@angular/core';
import { TaskApiService } from '../services/task-api.service';
import { Router, ActivatedRoute } from '@angular/router';
import  Swal  from 'sweetalert2';
import { ThemeService } from '../theme/theme.service';
import { Alert } from '../alert/alert';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id = this.actRout.snapshot.params['id'];
  taskUpdate: any = {};
  alert = new Alert;

  constructor(
    public taskApi: TaskApiService,
    public actRout: ActivatedRoute,
    public router: Router,
    private themeService: ThemeService
  ) { }

  ngOnInit() {
    this.taskApi.getTask(this.id).subscribe((data: {}) => {
      this.taskUpdate = data;
    });
  }

  update() {
    return this.taskApi.updateTask(this.id, this.taskUpdate).subscribe(data => {
      this.router.navigate(['']);
    });
  }

  updateTask() {
    if(this.themeService.isDarkTheme()) {
      Swal.fire(this.alert.cssAlertFirst(this.alert.objDarkTheme, this.alert.objTexts.editTaskDark))
      .then((result) => {
        if (result.isConfirmed && this.taskUpdate.status === "concluida") {
          Swal.fire(this.alert.cssAlertSecond(this.alert.objDarkTheme, this.alert.objTexts.editConcludeDark))
          .then(() => this.update());
        } else {
          Swal.fire(this.alert.cssAlertSecond(this.alert.objDarkTheme, this.alert.objTexts.editSuccessDark))
          .then(() => this.update());
        }
      });
    } else {
      Swal.fire(this.alert.cssAlertFirst(this.alert.objLightTheme, this.alert.objTexts.editTaskLight))
      .then((result) => {
        if (result.isConfirmed && this.taskUpdate.status === "concluida") {
          Swal.fire(this.alert.cssAlertSecond(this.alert.objLightTheme, this.alert.objTexts.editConcludeLight))
          .then(() => this.update());
        } else {
          Swal.fire(this.alert.cssAlertSecond(this.alert.objLightTheme, this.alert.objTexts.editSuccessLight))
          .then(() => this.update());
        }
      });
    }
  }

  cancelEditTask() {
    if(this.themeService.isDarkTheme()) {
      Swal.fire(this.alert.cssAlertFirst(this.alert.objDarkTheme, this.alert.objTexts.cancelEditDark))
      .then((result) => {
        if (result.isConfirmed) {
          Swal.fire(this.alert.cssAlertSecond(this.alert.objDarkTheme, this.alert.objTexts.cancelSuccessDark))
          .then(() => this.router.navigate(['']));
        }
      });
    } else {
      Swal.fire(this.alert.cssAlertFirst(this.alert.objLightTheme, this.alert.objTexts.cancelEditLight))
      .then((result) => {
        if (result.isConfirmed) {
          Swal.fire(this.alert.cssAlertSecond(this.alert.objLightTheme, this.alert.objTexts.cancelSuccessLight))
          .then(() => this.router.navigate(['']));
        }
      });
    }
  }
}
