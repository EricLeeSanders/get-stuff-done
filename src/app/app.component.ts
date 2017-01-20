import { Component } from '@angular/core';
import { TaskService } from './task/task.service';

// ES - called a decorator
@Component({
  // ES - selector - used in the index.html to reference here
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TaskService]
})
// ES - Connects to the .html with data binding
export class AppComponent {

}
