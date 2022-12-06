import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DatePipe} from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TutorialsComponent } from './tutorials/tutorials.component';
import { AddTutorialsComponent } from './add-tutorials/add-tutorials.component';
import { UserListComponent } from './user-management/user-list/user-list.component';
import { AddUserComponent } from './user-management/add-user/add-user.component';
import { EditUserComponent } from './user-management/edit-user/edit-user.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderNavComponent,
    DashboardComponent,
    TutorialsComponent,
    AddTutorialsComponent,
    UserListComponent,
    AddUserComponent,
    EditUserComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }