import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Location} from '@angular/common';
import {UsersService} from '../services/users.service';
import {AddUserRequestModel} from '../models/add-user-request.model';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  formDetails: FormGroup = new FormGroup({});

  submitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private location: Location,
    private userService: UsersService
  ) { }

  ngOnInit(): void {
    this.initFormDetails();
  }

  initFormDetails() {
    this.formDetails = this.formBuilder.group({
      name: [undefined, Validators.compose([Validators.required, Validators.minLength(4)])],
      email: [undefined, Validators.compose([Validators.required, Validators.minLength(4)])],
      mobileNumber: [undefined, Validators.compose([Validators.required, Validators.minLength(4)])],
      password: [undefined, Validators.compose([Validators.required, Validators.minLength(4)])],
      contacts: this.formBuilder.array([])
    });
  }

  get form(): { [key: string]: AbstractControl } {
    return this.formDetails.controls;
  }

  onGoBack() {

  }

  onSaveDetails() {
    this.submitted = true;
    console.log("user details: ", this.formDetails.value);
    if (this.formDetails.invalid) {
      return;
    }
    this.userService.saveUser(this.formDetails.value as AddUserRequestModel).subscribe({
      next: (value: any) => {
        this.formDetails.reset();
        this.location.back();
        console.log("user save successfully !");
      }, error: (err: any) => {
        console.log("unable to save user !");
      }
    });
  }
}