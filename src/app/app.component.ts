import { Component, ViewChild, OnInit } from '@angular/core';

import { TodayTaskService } from 'services/today-task.service';
import { WeekTaskService } from 'services/week-task.service';
import { MonthTaskService } from 'services/month-task.service';
import { TaskServiceHandler } from 'services/task.service.handler';
import { TaskService } from 'services/task.service';
import { TaskListComponent } from 'components/task-list/task-list.component'

// ES - called a decorator
@Component({
  // ES - selector - used in the index.html to reference here
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers provide the instance to all child components.
  // Child components are the components referenced in the 
  // .html file
  providers: [TaskServiceHandler, TodayTaskService, WeekTaskService, MonthTaskService]
})
// ES - Connects to the .html with data binding
export class AppComponent implements OnInit{
  
  @ViewChild(TaskListComponent)
  taskListComponent: TaskListComponent;
  
  serviceChange(evt) {
      this.taskListComponent.serviceChange(evt);
  }
    
  ngOnInit(){
    
  }
}
