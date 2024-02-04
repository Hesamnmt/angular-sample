import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILoginRegister } from './interfaces/users.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(private http : HttpClient) { }

  apiUrl: string = '';

  public login(body : ILoginRegister){
    this.apiUrl = 'https://reqres.in/api/login';
    return this.http.post(this.apiUrl , body);
  }

  public register(body : ILoginRegister){
    this.apiUrl = 'https://reqres.in/api/register';
    return this.http.post(this.apiUrl , body);
  }
}
