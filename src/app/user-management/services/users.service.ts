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
    return this.httpClient.post(environment.baseUrl, data);
  }


}