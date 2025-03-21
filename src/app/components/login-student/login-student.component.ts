import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StudentServiceService } from 'src/app/student-service.service';

@Component({
  selector: 'app-login-student',
  templateUrl: './login-student.component.html',
  styleUrls: ['./login-student.component.css']
})


export class LoginStudentComponent {

  constructor(private service : StudentServiceService){}
  login=new FormGroup({
    email:new FormControl(''),
    password:new FormControl('')

  })

  loginUser(){
  this.service.login().subscribe((res:any)=>{
   const user= res.find((a:any)=>{
    return  a.email=== this.login.value.email && a.password=== this.login.value.password 
   });
   if(user){
    alert("Login success");
    this.login.reset({})
   }
   else{
    alert("user Not found")
   }
  },err=>{
    alert("Something went wrong")
  })
  }
}
