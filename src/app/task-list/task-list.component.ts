import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  estado : boolean[] = [];
  @Input() tasks: string[] = [];
  filter: string = 'Todas';

  status(event: any, index:number){
    this.estado[index] = event.target.checked;
    console.log(`El estado de la tarea "${this.tasks[index]}" ha cambiado a ${this.estado[index]}`);
  }
  applyFilter(filter: string) {
    this.filter = filter;
  }
}
