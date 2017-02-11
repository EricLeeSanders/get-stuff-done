// Bring in code to create a new component
import { Component, Input } from "@angular/core";

import { Task } from "./task.model";
import { TaskServiceHandler } from "services/task.service.handler";

@Component({
    selector: 'app-task',
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.css']
})
export class TaskComponent {
    @Input() task: Task;
    
    constructor(private taskServiceHandler: TaskServiceHandler){
    }
    
}