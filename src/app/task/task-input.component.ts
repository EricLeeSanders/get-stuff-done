import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

import { TaskService } from "./task.service";
import { Task } from "./task.model";

@Component({
    selector: 'app-task-input',
    templateUrl: './task-input.component.html'
})
export class TaskInputComponent {
    constructor(private taskService: TaskService) {}

    onSubmit(form: NgForm) {
        const task = new Task(form.value.taskname, form.value.taskminutes);
        this.taskService.addTask(task);
        form.resetForm();
    }
}