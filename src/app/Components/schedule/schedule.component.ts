import { Component, OnInit } from '@angular/core';
import { ImportsModule } from '../../imports';
import { Table } from 'primeng/table';
import { MatDialog } from '@angular/material/dialog';
import { DatatableService } from '../datatable.service';


@Component({
  selector: 'schedule',
  standalone: true,
  imports: [ImportsModule],
  templateUrl: './schedule.component.html',

})
export class ScheduleComponent implements OnInit {
  users: any[] = []; // Array to hold the user data
  loading: boolean = true;
  
  constructor(private api: DatatableService, private dialog: MatDialog) {}
  searchValue: string | undefined;
  ngOnInit(): void {
    this.getAllUsers();
  
  }

  getAllUsers(): void {
    this.api.getUsers().subscribe({
      next: (response) => {
        this.users = response;
        this.loading = false;
      },
      error: (err) => {
        // console.log(err);
        this.loading = false;
      }
    });
  }
  getEventValue($event:any) :string {
    return $event.target.value;
  } 
  clear(table: Table): void {
     table.clear();
        this.searchValue = ''
  }
 
}
