import { Injectable } from '@angular/core';
import { HttpClient , HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICreateUser, IUserData } from './interfaces/users.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) { }

  getUsers(pagination : number): Observable<IUserData[]> {
    let params = new HttpParams();
    params.append("page" , pagination);
    return this.http.get<IUserData[]>(this.apiUrl);
    }

  createUser(body : ICreateUser){
    return this.http.post(this.apiUrl,body);
    }
}
