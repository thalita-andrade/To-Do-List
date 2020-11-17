import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TaskApiService } from '../services/task-api.service';
import { FormControl, Validators } from '@angular/forms';
import  Swal  from 'sweetalert2';
import { ThemeService } from '../theme/theme.service';
import { Alert } from '../alert/alert';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {

  link: string;
  alert = new Alert;

  @Input() taskDetails = { name:'', email: '', title: '', description: '', status: '' };

  constructor(
    public taskApi: TaskApiService,
    public router: Router,
    private themeService: ThemeService
  ) { }

  ngOnInit(): void {
  }

  addTask() {
    if(this.themeService.isDarkTheme()) {
      Swal.fire(this.alert.cssAlertFirst(this.alert.objDarkTheme, this.alert.objTexts.createTaskDark))
      .then((result) => {
        if (result.isConfirmed) {
          Swal.fire(this.alert.cssAlertSecond(this.alert.objDarkTheme, this.alert.objTexts.createSuccessDark))
          .then(() => {
            this.taskApi.createTask(this.taskDetails).subscribe((data: {}) => {
              this.router.navigate(['']);
            });
          });
        }
      });
    } else {
      Swal.fire(this.alert.cssAlertFirst(this.alert.objLightTheme, this.alert.objTexts.createTaskLight))
      .then((result) => {
        if (result.isConfirmed) {
          Swal.fire(this.alert.cssAlertSecond(this.alert.objLightTheme, this.alert.objTexts.createSuccessLight))
          .then(() => {
            this.taskApi.createTask(this.taskDetails).subscribe((data: {}) => {
              this.router.navigate(['']);
            });
          });
        }
      });
    }
  }

  cancelAddTask() {
    if(this.themeService.isDarkTheme()) {
      Swal.fire(this.alert.cssAlertFirst(this.alert.objDarkTheme, this.alert.objTexts.cancelCreateDark))
      .then((result) => {
        if (result.isConfirmed) {
          Swal.fire(this.alert.cssAlertSecond(this.alert.objDarkTheme, this.alert.objTexts.cancelSuccessDark))
          .then(() => this.router.navigate(['']));
        }
      });
    } else {
      Swal.fire(this.alert.cssAlertFirst(this.alert.objLightTheme, this.alert.objTexts.cancelCreateLight))
      .then((result) => {
        if (result.isConfirmed) {
          Swal.fire(this.alert.cssAlertSecond(this.alert.objLightTheme, this.alert.objTexts.cancelSuccessLight))
          .then(() => this.router.navigate(['']));
        }
      });
    }
  }

  nameFormControl = new FormControl('', [
    Validators.required,
  ]);

  titleFormControl = new FormControl('', [
    Validators.required,
  ]);

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
}


