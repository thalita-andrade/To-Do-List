import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TaskApiService } from '../services/task-api.service';
import { FormControl, Validators } from '@angular/forms';
import  Swal  from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {

  link: string;

  @Input() taskDetails = { name:'', email: '', title: '', description: '', status: '' };

  constructor(
    public taskApi: TaskApiService,
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  addTask() {
    Swal.fire({
      text: "Você deseja realmente criar essa tarefa?",
      confirmButtonText: "Sim",
      showCancelButton: true
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Sua tarefa foi criada com sucesso!")
        .then(() => {
          this.taskApi.createTask(this.taskDetails).subscribe((data: {}) => {
            this.router.navigate(['']);
          });
        });
      }
    });
  }

  cancelAddTask() {
    Swal.fire({
      text: "Você deseja cancelar essa tarefa?",
      confirmButtonText: "Sim",
      showCancelButton: true
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Cancelado com sucesso!").then(() => this.router.navigate(['']));
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


