import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.scss']
})
export class DetailViewComponent implements OnInit {
  userDetails: any;
  constructor(
    private location: Location,
    private activatedRoute: ActivatedRoute,
    private userService: UsersService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((res: any) => {
      console.log("current route details: ", res);
      this.getUserDetailsByUserId(res?.id);
    });
  }

  onGoBack() {
    this.location.back();
  }

  getUserDetailsByUserId(userId: number) {
    this.userService.getUserDetailsByUserId(userId).subscribe({
      next: (response: any) => {
        this.userDetails = response;
      }
    });
  }


}
