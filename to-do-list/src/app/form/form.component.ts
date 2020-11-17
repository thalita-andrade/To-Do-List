import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TaskApiService } from '../services/task-api.service';
import { FormControl, Validators } from '@angular/forms';
import  Swal  from 'sweetalert2';
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
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  addTask() {
    Swal.fire(this.alert.cssAlertFirst("Você deseja realmente criar essa tarefa?"))
    .then((result) => {
      if (result.isConfirmed) {
        Swal.fire(this.alert.cssAlertSecond("Sua tarefa foi criada com sucesso!"))
        .then(() => {
          this.taskApi.createTask(this.taskDetails).subscribe((data: {}) => {
            this.router.navigate(['']);
          });
        });
      }
    });
  }

  cancelAddTask() {
    Swal.fire(this.alert.cssAlertFirst("Você deseja cancelar essa tarefa?"))
    .then((result) => {
      if (result.isConfirmed) {
        Swal.fire(this.alert.cssAlertSecond("Cancelado com sucesso!"))
        .then(() => this.router.navigate(['']));
      }
    });
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


