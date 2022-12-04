import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DatePipe} from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddTutorialsComponent } from './add-tutorials/add-tutorials.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TutorialsComponent } from './tutorials/tutorials.component';
import { UserListComponent } from './user-management/user-list/user-list.component';
import { AddUserComponent } from './user-management/add-user/add-user.component';
import { EditUserComponent } from './user-management/edit-user/edit-user.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddTutorialsComponent,
    HeaderNavComponent,
    SidebarComponent,
    TutorialsComponent,
    UserListComponent,
    AddUserComponent,
    EditUserComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
