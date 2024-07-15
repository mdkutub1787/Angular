import { Component, OnInit } from '@angular/core';
import { LocationService } from '../../location/location.service';
import { forkJoin } from 'rxjs';
import { StudentModel } from '../student.model';
import { Location } from '../../location/location.model';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';


@Component({
  selector: 'app-viewstudent',
  templateUrl: './viewstudent.component.html',
  styleUrls: ['./viewstudent.component.css']
})
export class ViewstudentComponent implements OnInit {

  students: StudentModel[] = [];
  locations: Location[] = [];

  constructor(
    private studentService: StudentService,
    private locationService: LocationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    forkJoin({
      locations: this.locationService.getLocationForStudent(),
      students: this.studentService.viewAllStudent()
    }).subscribe({
      next: ({ locations, students }) => {
        this.locations = locations;
        this.students = students;
      },
      error: err => {
        console.log(err);
      }
    });
  }

  deleteStudent(studentId: string): void {
    this.studentService.deleteStudent(studentId).subscribe({
      next: res => {
        this.loadData();
      },
      error: err => {
        console.log(err);
      }
    });
  }

  editStudent(student: StudentModel): void {
    
    this.router.navigate(['/updatestudent', student.id]);
  }
}