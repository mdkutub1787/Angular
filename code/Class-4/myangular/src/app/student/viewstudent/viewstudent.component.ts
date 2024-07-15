import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { LocationService } from '../../location/location.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewstudent',
  templateUrl: './viewstudent.component.html',
  styleUrl: './viewstudent.component.css'
})
export class ViewstudentComponent implements OnInit {
  students: any;
  locations: any;

  constructor(
    private studentService: StudentService,
    private locationService: LocationService,
    private router: Router,


  ) { }


  ngOnInit(): void {
    this.students = this.studentService.viewAllStudent();
    this.locations = this.locationService.getAllLocationforStudent();
  }

  deleteStudent(id: string) {
    this.studentService.deleteStudent(id)
      .subscribe({
        next: res => {
          this.students = this.studentService.viewAllStudent();
          this.router.navigate(['/student']);
        },

        error: er => {
          console.log(er);
        }
        
      });

  }

}