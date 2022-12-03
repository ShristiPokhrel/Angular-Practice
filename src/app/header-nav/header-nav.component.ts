import { Component, OnInit } from '@angular/core';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss']
})
export class HeaderNavComponent implements OnInit {
  currentDate: string | null;

  constructor(
    private date: DatePipe
  ) {
    this.currentDate = this.date.transform(new Date(), 'yyyy-M-dd hh:mm:ss a');
  }

  ngOnInit(): void {
  }

}