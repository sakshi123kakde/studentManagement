import { Component } from '@angular/core';
import { StudentServiceService } from 'src/app/student-service.service';
import { FormGroup,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registration-student',
  templateUrl: './registration-student.component.html',
  styleUrls: ['./registration-student.component.css']
})
export class RegistrationStudentComponent {

   close:boolean=false;
  constructor(private studentService :StudentServiceService ){}
  
    register=new FormGroup({
      email:new FormControl(''),
      name:new FormControl(''),
      password:new FormControl('')
  
    })
  
    save(){
      //console.log(this.register.value);
      this.studentService.register(this.register.value).subscribe((result)=>{
        console.log(result);
        this.register.reset({})
        this.close=true

      //   this.router.navigate(['login'])
      // },err=>{
      //   alert("something went wrong")
       })
    }
}
