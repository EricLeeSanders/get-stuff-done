import { Task } from "components/task/task.model";

export abstract class TaskService {

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