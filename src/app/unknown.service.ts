import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { IUnknown } from './interfaces/unknown.model';

@Injectable({
  providedIn: 'root'
})
export class UnknownService {

  constructor(private http:HttpClient) { }

  baseURl : string = '';

  getUnknown() : Observable<IUnknown>{
    this.baseURl = 'https://reqres.in/api/unknown/';
    return this.http.get<IUnknown>(this.baseURl);
  }
}
