import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { debounce } from 'rxjs/operators';
import { timer } from 'rxjs';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {
  newCarForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.newCarForm = this.formBuilder.group({
      vin: ['', Validators.required],
      color: ['', Validators.required]
    });

    this.subscribeVINValue();
  }

  get f() { return this.newCarForm.controls; }

  onSubmit() {
    if (this.newCarForm.invalid) {
      console.log("invalid")
      return;
    }

    console.log("ok");
  }

  subscribeVINValue() {
    this.newCarForm
      .get('vin')
      .valueChanges.pipe(debounce(() => timer(1000))).subscribe(
        (value: string) => {
          console.log(value);
        })
  }
}