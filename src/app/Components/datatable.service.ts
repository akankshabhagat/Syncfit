import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatatableService {
 private baseurl="http://localhost:3000/users"
constructor(private http:HttpClient){

}
postUsers(data:any){
 return this.http.post<any>(this.baseurl,data);
}

// getUsers(){
//   return this.http.get<any>(this.baseurl);
// }
getUsers(): Observable<any> {
  return this.http.get<any>(this.baseurl);
}
}
