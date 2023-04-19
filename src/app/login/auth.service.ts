import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 // http: any;

  constructor(
    private http:HttpClient
  ) { }


  login(param: any): Observable<any>{
    return this.http.post(`${environment.basePath}auth/token`,param);
  }

  getUserDetails(): Observable<any>{
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(`${environment.basePath}get-user-details`,{
      headers: headers
   });
  }

}
