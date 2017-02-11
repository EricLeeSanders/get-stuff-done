import { Component, ViewChild  } from '@angular/core';
import { ModalComponent } from "components/modal/modal.component";
import { NgForm } from "@angular/forms";

import { TaskServiceHandler } from "services/task.service.handler";
import { Task } from "components/task/task.model";

@Component({
  selector: 'app-task-input-modal',
  templateUrl: './task-input-modal.component.html',
  styleUrls: ['./task-input-modal.component.css']
})
export class TaskInputModalComponent {

  
  constructor(private taskServiceHandler: TaskServiceHandler) {}
  
  @ViewChild(ModalComponent)
  public readonly modal: ModalComponent;

  onSubmit(form: NgForm) {
      const task = new Task(form.value.taskname, form.value.taskminutes);
      this.taskServiceHandler.addTask(task);
      this.modal.hide();
      form.resetForm();
  }
}
