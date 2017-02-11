import { Component, Input, ViewChild } from "@angular/core";
// import { ModalComponent } from "components/modal/modal.component";

import { Task } from "components/task/task.model";
import { TaskServiceHandler } from "services/task.service.handler";
import { TaskInputModalComponent } from "components/task-input-modal/task-input-modal.component"

@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.component.html',
    styleUrls: ['./task-list.component.css'],
})

export class TaskListComponent {
    private tasks: Task[];
    @Input() private taskType: string;
    private taskServiceHandler: TaskServiceHandler;
    
    constructor(taskServiceHandler: TaskServiceHandler){
        this.taskServiceHandler = taskServiceHandler;
        //taskServiceHandler.addTask(new Task("test", 50))
    }

    @ViewChild(TaskInputModalComponent)
    taskInputModalComponent: TaskInputModalComponent;
    
    showModal() {
        this.taskInputModalComponent.modal.show();
    }

    serviceChange(taskType: string){
        this.taskType = taskType;
        this.tasks = this.taskServiceHandler.getTasks();
    }

}