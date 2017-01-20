// ES - Defines what we use in the application
//    - this is sort of the master component

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component'
import { TaskListComponent } from './task/task-list.component'
import { TaskInputComponent } from './task/task-input.component'

// ES - Decorator - Angular uses these to configure your app
@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskInputComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
