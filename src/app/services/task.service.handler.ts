// Service classes are intermediate class between the front and back end
import { Task } from "components/task/task.model";
import { TaskService } from "services/task.service";
import { TodayTaskService } from "services/today-task.service";

export class TaskServiceHandler {
    
    private taskService : TaskService;

    setTaskService(taskService : TaskService){
        this.taskService = taskService;
    }
    
    addTask(task: Task){
        this.taskService.addTask(task);
    }

    removeTask(task: Task){
        this.taskService.removeTask(task);
    }
    
    getTasks(){
        return this.taskService.getTasks();
    }
}