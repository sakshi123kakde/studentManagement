import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StudentServiceService } from 'src/app/student-service.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent {
  close:boolean=false
  constructor(private studentService :StudentServiceService, private router: ActivatedRoute){}
  
    editStudent=new FormGroup({
      student_name:new FormControl(''),
      age:new FormControl(),
      course:new FormControl()
  
    })
  
    ngOnInit(){
      //console.log(this.router.snapshot.params['id']);
      this.studentService.getStudentById(this.router.snapshot.params['id']).subscribe((result :any)=>{
        console.log(result);
       this.editStudent=new FormGroup({
          student_name:new FormControl(result['student_name']),
          age:new FormControl(result['age']),
          course:new FormControl(result['course'])
      
        })
      })
    }
    update(){
     //console.log(this.editStudent.value);
     this.studentService.updateStudent(this.router.snapshot.params['id'],this.editStudent.value).subscribe((result)=>{
      console.log(result);
      this.editStudent.reset({})
      this.close=true
     })
      }
    
    }

