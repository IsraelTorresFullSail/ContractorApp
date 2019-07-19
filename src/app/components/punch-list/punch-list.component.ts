import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatSort, MatTableDataSource, MatPaginator, MatDialog, MatDialogConfig } from '@angular/material';
import { ListServiceService } from './../../services/list-service.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { WalkthroughListComponent } from './../walkthrough-list/walkthrough-list.component';

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

  constructor(private listService: ListServiceService, private router: Router, private dialog: MatDialog) {}

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  dataSource = new MatTableDataSource();

  displayedColumns: string[] = ['firstName', 'lastName', 'actions'];
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
    this.dataSource.paginator = this.paginator;
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
    console.log(task);
    this.listService.updateTaskItem(task);
  }

  onEdit(task: any) {
    this.openModal();
    if (task) {
      this.listService.updateTask(task);
    }
  }

  openModal(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      title: 'Modal',
    };
    dialogConfig.height = '800px';
    dialogConfig.autoFocus = true;
    this.dialog.open(WalkthroughListComponent, dialogConfig);
  }

}
