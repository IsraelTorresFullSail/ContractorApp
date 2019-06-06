import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatSort, MatTableDataSource } from '@angular/material';
import { ListServiceService } from './../../services/list-service.service';

@Component({
  selector: 'app-punch-list',
  templateUrl: './punch-list.component.html',
  styleUrls: ['./punch-list.component.css']
})
export class PunchListComponent implements OnInit {

  constructor(private listService: ListServiceService, private router: Router) { }

  displayedColumns: string[] = ['openingNumber', 'taskDescription', 'completed', 'actions'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.getAllTasks();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  getAllTasks() {
    this.listService.getTask().subscribe(res => {
      this.dataSource.data = res;
    });
  }

  onDelete(id: string) {
    this.listService.deleteTask(id);
  }

  onChangeStatus(task: any) {
    task.completed = true;
    this.listService.updateTask(task);
  }

}
