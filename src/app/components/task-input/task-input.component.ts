import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

import { TaskServiceHandler } from "services/task.service.handler";
import { Task } from "components/task/task.model";

@Component({
    selector: 'app-task-input',
    templateUrl: './task-input.component.html'
})
export class TaskInputComponent {
    constructor(private taskServiceHandler: TaskServiceHandler) {}

    onSubmit(form: NgForm) {
        const task = new Task(form.value.taskname, form.value.taskminutes);
        this.taskServiceHandler.addTask(task);
        form.resetForm();
    }
}