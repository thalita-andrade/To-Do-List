import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TaskApiService } from '../services/task-api.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {

  @Input() taskDetails = { name:'', email: '', title: '', description: '', status: '' }

  constructor(
    public taskApi: TaskApiService,
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  addTask() {
    this.taskApi.createTask(this.taskDetails).subscribe((data: {}) => {
      this.router.navigate([''])
    })
  }

}
