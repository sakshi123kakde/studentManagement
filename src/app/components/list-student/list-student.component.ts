import { Component } from '@angular/core';
import {StudentServiceService} from '../../student-service.service'
@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent {
  students:any=[];
  constructor(private student :StudentServiceService){}

  ngOnInit(){
    this.student.getStudents().subscribe((allStudent)=>{this.students=allStudent
      // console.log(allStudent);
      
    })
  }

  deleteStudent(id : number){
    // console.log(id);
    this.student.deleteStudent(id).subscribe((result)=>{
      console.log(result);
      this.ngOnInit()
    });
  }
}
