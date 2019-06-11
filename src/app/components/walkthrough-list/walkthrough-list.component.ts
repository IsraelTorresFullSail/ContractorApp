import { Component, OnInit, ViewChild } from '@angular/core';
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

  @ViewChild('f') myNgForm;
  walkForm: FormGroup;

  constructor(private listService: ListServiceService, private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
      this.walkForm = this.fb.group ({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      permitNumber: ['', [Validators.required, Validators.pattern('^[0-9.,]+$')]],
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

  onSubmit() {
    const data = this.walkForm.value;
    // call service
    if (this.walkForm.valid) {
      this.listService.createTask(data);

      // Reset the form
      this.myNgForm.resetForm();

      // Clear the FormArray and set it as default
      const array = <FormArray>this.walkForm.controls['taskItems'];
      array.controls = [this.createItem()];
    }
  }

  addTask() {
    const control = <FormArray>this.walkForm.controls['taskItems'];
    control.push(this.createItem());
  }

  removeTask(i: number) {
    const control = <FormArray>this.walkForm.controls['taskItems'];
    control.removeAt(i);
  }


}
