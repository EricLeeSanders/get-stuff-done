// Service classes are intermediate class between the front and back end
import { Task } from "./task.model";

export class TaskService {
    private tasks: Task[] = [];
    
    addTask(task: Task){
        this.tasks.push(task);
        console.log(this.tasks);
        // Reach out to server and save the task
    }

    removeTask(task: Task){
        
    }
    
    getTasks(){
        return this.tasks;
    }
}