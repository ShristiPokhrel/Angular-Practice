import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-tutorials',
  templateUrl: './add-tutorials.component.html',
  styleUrls: ['./add-tutorials.component.scss']
})
export class AddTutorialsComponent implements OnInit {

  formDetails: FormGroup = new FormGroup({});

  submitted: boolean = false;

  constructor(
    private router: Router,
    private location: Location,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initFormDetails();
  }

  initFormDetails() {
    this.formDetails = this.formBuilder.group({
      name: [undefined, Validators.required],
      email: [undefined, Validators.required],
      address: [undefined, Validators.required],
      phoneNumber: [undefined, Validators.required],
    });
    console.log("Before submit form details: ", this.formDetails.value)
  }
  get form(): { [key: string]: AbstractControl } {
    return this.formDetails.controls;
  }

  onGoBack() {
    this.location.back();
  }

  onSaveDetails() {
    this.submitted = true;
    console.log("After submit form details: ", this.formDetails.value)
  }
}