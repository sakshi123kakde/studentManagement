import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {
url:string="http://localhost:3000/students"
  constructor(private https : HttpClient) { }

  getStudents(){
   return this.https.get(this.url)
  }

  saveStudents(data:any):Observable<any>{
     return this.https.post(this.url,data)
  }
}
