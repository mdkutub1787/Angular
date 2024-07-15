import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { LocationService } from '../../location/location.service';
import { Router } from '@angular/router';
import { StudentModel } from '../student.model';

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
    this.locations = this.locationService.getLocationForStudent();
    this.students = this.studentService.viewAllStudent();
  }

  // ngOnInit(): void {
  //   this.loadData();
  // }
  // loadData(): void {
  //   forkJoin({
  //     locations: this.locationService.getLocationForStudent(),
  //     students: this.studentService.viewAllStudent()
  //   }).subscribe({
  //     next: ({ locations, students }) => {
  //       this.locations = locations;
  //       this.students = students;
  //     },
  //     error: err => {
  //       console.log(err);
  //     }
  //   });
  // }


  deleteStudent(studentId: string): void {
    this.studentService.deleteStudent(studentId)
      .subscribe({
        next: res => {
          console.log(res);
          this.students = this.studentService.viewAllStudent()
          this.router.navigate(['/student']);
        }
      });

  }
  editStudent(student: StudentModel): void {
    this.router.navigate(['/updatestudent', student.id]);
  }
}
