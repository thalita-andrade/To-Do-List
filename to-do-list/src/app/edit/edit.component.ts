import { Component, OnInit } from '@angular/core';
import { TaskApiService } from '../services/task-api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id = this.actRout.snapshot.params['id'];
  taskUpdate: any = {}

  constructor(
    public taskApi: TaskApiService,
    public actRout: ActivatedRoute,
    public router: Router 
  ) { }

  ngOnInit() {
    this.taskApi.getTask(this.id).subscribe((data: {}) => {
      this.taskUpdate = data;
    })
  }

  updateTask() {
    if(window.confirm("Você deseja realmente editar?")){
      this.taskApi.updateTask(this.id, this.taskUpdate).subscribe(data => {
        this.router.navigate([''])
      })
    }
  }

}
