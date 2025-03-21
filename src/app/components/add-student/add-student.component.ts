import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StudentServiceService } from 'src/app/student-service.service';
@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {

  close:boolean=false
constructor(private studentService :StudentServiceService){}

  addStudent=new FormGroup({
    student_name:new FormControl(''),
    age:new FormControl(),
    course:new FormControl()

  })

  save(){
    console.log(this.addStudent.value);
    this.studentService.saveStudents(this.addStudent.value).subscribe((result)=>{
      console.log(result);
      this.close=true;
      this.addStudent.reset({});
    })
  }

}
