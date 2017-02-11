// ES - Defines what we use in the application
//    - this is sort of the master component

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TaskComponent } from 'components/task/task.component'
import { TaskListComponent } from 'components/task-list/task-list.component'
import { TaskInputComponent } from 'components/task-input/task-input.component';
import { ChangeTaskTypeComponent } from 'components/change-task-type/change-task-type.component';
import { TaskInputModalComponent } from './components/task-input-modal/task-input-modal.component';
import { ModalComponent } from './components/modal/modal.component';

// ES - Decorator - Angular uses these to configure your app
@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskInputComponent,
    TaskComponent,
    ChangeTaskTypeComponent,
    TaskInputModalComponent,
    ModalComponent
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
