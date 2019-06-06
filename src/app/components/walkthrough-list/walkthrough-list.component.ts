import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListServiceService } from './../../services/list-service.service';

import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormArray } from '@angular/forms';


@Component({
  selector: 'app-walkthrough-list',
  templateUrl: './walkthrough-list.component.html',
  styleUrls: ['./walkthrough-list.component.css']
})
export class WalkthroughListComponent implements OnInit {

  taskItems: FormArray;

  constructor(private listService: ListServiceService, private router: Router, private fb: FormBuilder) { }

    walkForm = this.fb.group ({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    permitNumber: ['', Validators.required],
    address: ['', Validators.required],
    city: ['', Validators.required],
    state: ['', Validators.required],
    postalCode: ['', Validators.required],
    taskItems: this.fb.array([this.createItem()])
    // aliases: this.fb.array([
    //   this.fb.control('')
    //   //{
    //   // openingNumber: this.fb.control(''),
    //   // taskDescription: this.fb.control(''),
    //   // completed: this.fb.control(false)
    //   //}
    // ])
    });

  ngOnInit() {
  }

  createItem(): FormGroup {
    return this.fb.group({
      openingNumber: [''],
      taskDescription: [''],
      completed: [false]
    });
  }

  addTask(): void {
    // this.taskItems = this.walkForm.controls.taskItems as FormArray;
    this.taskItems = this.walkForm.get('taskItems') as FormArray;
    this.taskItems.push(this.createItem());
  }

  onSubmit() {
    let data = this.walkForm.value;
    // call service
    this.listService.createTask(data);
    this.walkForm.reset();
  }

  // get aliases() {
  //   return this.walkForm.get('aliases') as FormArray;
  // }

}
