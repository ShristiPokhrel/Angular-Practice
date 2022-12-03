import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-add-tutorials',
  templateUrl: './add-tutorials.component.html',
  styleUrls: ['./add-tutorials.component.scss']
})
export class AddTutorialsComponent implements OnInit {

  formDetails: FormGroup = new FormGroup({});

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
      name: ['Ram'],
      email: [undefined],
      address: [undefined],
      phoneNumber: [undefined],
    });
    console.log("Before submit form details: ", this.formDetails.value)
  }

  onGoBack() {
    this.location.back();
  }

  onSaveDetails() {
    console.log("After submit form details: ", this.formDetails.value)
  }
}