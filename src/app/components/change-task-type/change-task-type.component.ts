import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { TodayTaskService } from "services/today-task.service";
import { WeekTaskService } from "services/week-task.service";
import { MonthTaskService } from "services/month-task.service";
import { TaskServiceHandler } from 'services/task.service.handler';

import $ from 'jquery';

@Component({
  selector: 'app-change-task-type',
  templateUrl: './change-task-type.component.html',
  styleUrls: ['./change-task-type.component.css']
})
export class ChangeTaskTypeComponent implements OnInit {

  constructor(private taskServiceHandler : TaskServiceHandler,
              private todayTaskService : TodayTaskService,
              private weekTaskService : WeekTaskService,
              private monthTaskService : MonthTaskService) {
                
  }
  ngOnInit() {
    
    this.taskServiceHandler.setTaskService(this.todayTaskService);   
    this.serviceChange.emit('Tasks Today');

    $('app-change-task-type .btn').on('click', function(){
          console.log("init");
      $('.btn').removeClass('active');
      $(this).addClass('active');
    });

  }
  
  @Output() serviceChange: EventEmitter<string> = new EventEmitter();

  switchTodayTaskService(){
    this.taskServiceHandler.setTaskService(this.todayTaskService);
    this.serviceChange.emit('Tasks Today');
  }
  
  switchWeekTaskService(){
    this.taskServiceHandler.setTaskService(this.weekTaskService);
    this.serviceChange.emit('Tasks this Week');
  }
  
  switchMonthTaskService(){
    this.taskServiceHandler.setTaskService(this.monthTaskService);
    this.serviceChange.emit('Tasks this Month');
  }

}
