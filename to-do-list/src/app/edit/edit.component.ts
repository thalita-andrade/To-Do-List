import { Component, OnInit } from '@angular/core';
import { TaskApiService } from '../services/task-api.service';
import { Router, ActivatedRoute } from '@angular/router';
import  Swal  from 'sweetalert2';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id = this.actRout.snapshot.params['id'];
  taskUpdate: any = {};

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
    Swal.fire({
      text: "Você deseja realmente editar?",
      confirmButtonText: "Sim",
      showCancelButton: true
    }).then((result) => {
      if (result.isConfirmed && this.taskUpdate.status === "concluida") {
        Swal.fire("Sua tarefa foi editada e concluida com sucesso!").then(() => this.update());
      } else {
        Swal.fire("Sua tarefa foi editada com sucesso!").then(() => this.update());
      }
    });
  }

  cancelEditTask() {
    Swal.fire({
      text: "Você deseja cancelar as alterações?",
      confirmButtonText: "Sim",
      showCancelButton: true
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Cancelado com sucesso!").then(() => this.router.navigate(['']));
      }
    });
  }

}
