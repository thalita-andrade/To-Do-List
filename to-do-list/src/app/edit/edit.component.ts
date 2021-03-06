import { Component, OnInit } from '@angular/core';
import { TaskApiService } from '../services/task-api.service';
import { Router, ActivatedRoute } from '@angular/router';
import  Swal  from 'sweetalert2';
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
    public router: Router
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
    Swal.fire(this.alert.cssAlertFirst("Você deseja realmente editar?"))
    .then((result) => {
      if (result.isConfirmed && this.taskUpdate.status === "concluida") {
        Swal.fire(this.alert.cssAlertSecond("Sua tarefa foi editada e concluida com sucesso!"))
        .then(() => this.update());
      } else {
        Swal.fire(this.alert.cssAlertSecond("Sua tarefa foi editada com sucesso!"))
        .then(() => this.update());
      }
    });
  }

  cancelEditTask() {
    Swal.fire(this.alert.cssAlertFirst("Você deseja cancelar as alterações?"))
    .then((result) => {
      if (result.isConfirmed) {
        Swal.fire(this.alert.cssAlertSecond("Cancelado com sucesso!"))
        .then(() => this.router.navigate(['']));
      }
    });
  }
}
