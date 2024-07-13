import { Component, OnInit } from '@angular/core';
import { ImportsModule } from '../../imports';
import { Table } from 'primeng/table';
@Component({
  selector: 'schedule',
  standalone: true,
  imports: [ImportsModule],
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.css'
})
export class ScheduleComponent{

  clear(table: Table) {
    table.clear();
    
}
searchValue=""

  
}
