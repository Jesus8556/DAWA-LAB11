import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-task-filter',
  templateUrl: './task-filter.component.html',
  styleUrls: ['./task-filter.component.css']
})
export class TaskFilterComponent {
  filterOptions: string[] = ['Todas', 'Completadas', 'No completadas'];
  @Output() filterSelected = new EventEmitter<string>();
  onFilterChange(event: any) {
    const selectedFilter = event.target.value;
    this.filterSelected.emit(selectedFilter);
  }
  

}
