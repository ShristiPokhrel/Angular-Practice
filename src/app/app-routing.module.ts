import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {TutorialsComponent} from './tutorials/tutorials.component';
import {AddTutorialsComponent} from './add-tutorials/add-tutorials.component';
import {UserListComponent} from './user-management/user-list/user-list.component';
import {AddUserComponent} from './user-management/add-user/add-user.component';
import {EditUserComponent} from './user-management/edit-user/edit-user.component';
import { DetailViewComponent } from './user-management/detail-view/detail-view.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home', component: DashboardComponent
  },
  {
    path: 'tutorials', component: TutorialsComponent
  },
  {
    path: 'add-tutorials', component: AddTutorialsComponent
  },
  {
    path: 'user-list', component: UserListComponent
  },
  {
    path: 'add-user', component: AddUserComponent
  },
  {
    path: 'edit-user/:id', component: EditUserComponent
  },
  {
    path: 'view-user/:id', component: DetailViewComponent
  },
  {
    path: '**', redirectTo: 'home', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
