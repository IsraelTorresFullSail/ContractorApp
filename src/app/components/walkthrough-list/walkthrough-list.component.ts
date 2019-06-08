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
  walkForm: FormGroup;

  constructor(private listService: ListServiceService, private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
      this.walkForm = this.fb.group ({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      permitNumber: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      postalCode: ['', Validators.required],
      taskItems: this.fb.array([this.createItem()])
      });
  }

  createItem(): FormGroup {
    return this.fb.group({
      openingNumber: ['', Validators.required],
      taskDescription: ['', Validators.required],
      completed: [false]
    });
  }

  // Giving a get method to the FormArray to use the controls property
  get formtaskItems() {
    return this.walkForm.get('taskItems') as FormArray;
  }

  addTask() {
    this.formtaskItems.push(this.createItem());
    // const control = <FormArray>this.walkForm.controls['taskItems'];
    // control.push(this.createItem());
    // if (this.walkForm.invalid) {
    //   return;
    // }
  }

  removeTask(i: number) {
    this.formtaskItems.removeAt(i);
  }

  onSubmit() {
    const data = this.walkForm.value;
    // call service
    this.listService.createTask(data);
    this.walkForm.reset();
    if (this.walkForm.invalid) {
      return;
    }
  }

}
