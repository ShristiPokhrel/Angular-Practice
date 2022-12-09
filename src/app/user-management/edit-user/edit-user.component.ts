import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  formDetails: FormGroup = new FormGroup({});
  userDetails: any;
  submitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private location: Location,
    private userService: UsersService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.initFormDetails();
    this.activatedRoute.params.subscribe((res: any) => {
      console.log("current route details: ", res);
      this.getUserDetailsByUserId(res?.id);
    });
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
    this.location.back();
  }

  getUserDetailsByUserId(userId: number) {
    this.userService.getUserDetailsByUserId(userId).subscribe({
      next: (response: any) => {
        this.userDetails = response;
        this.formDetails.patchValue(response);
      }
    });
  }

  onEditDetails() {
    this.userService.editUserDetailsByUserId(this.userDetails.id, this.formDetails.value).subscribe(
      {
        next : (value) => {
          this.onGoBack();
        },
      }
    );
  }
}
