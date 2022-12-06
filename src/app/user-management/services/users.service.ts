import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {AddUserRequestModel} from '../models/add-user-request.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private httpClient: HttpClient
  ) { }


  saveUser(data: AddUserRequestModel): Observable<any> {
    return this.httpClient.post(environment.baseUrl + 'users', data);
  }
  listAllUsers(): Observable<any> {
    return this.httpClient.get(environment.baseUrl + 'users');
  }

  deleteUserById(id: number): Observable<any> {
    return this.httpClient.delete(environment.baseUrl + 'users/' + `${id}`);
  }

}