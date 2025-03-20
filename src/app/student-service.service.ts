import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {
url:string="http://localhost:3000/students"
  constructor(private https : HttpClient) { }

  getStudents(){
   return this.https.get(this.url)
  }
}
