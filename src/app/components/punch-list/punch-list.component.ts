import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
import { ListServiceService } from './../../services/list-service.service';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-punch-list',
  templateUrl: './punch-list.component.html',
  styleUrls: ['./punch-list.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', visibility: 'hidden' })),
      state('expanded', style({ height: '*', visibility: 'visible' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class PunchListComponent implements OnInit {

  constructor(private listService: ListServiceService, private router: Router) {}

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  dataSource = new MatTableDataSource();

  displayedColumns: string[] = ['firstName', 'lastName'];
  expandedElement = new MatTableDataSource();

  isExpansionDetailRow = (i: number, row: Object) => row.hasOwnProperty('detailRow');

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

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
