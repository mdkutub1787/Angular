import { Component, OnInit } from '@angular/core';
import { StudentModel } from '../student.model';
import { Location } from '../../location/location.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LocationService } from '../../location/location.service';
import { StudentService } from '../student.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updatestudent',
  templateUrl: './updatestudent.component.html',
  styleUrl: './updatestudent.component.css'
})
export class UpdatestudentComponent implements OnInit {

  student: StudentModel = new StudentModel();
  location: Location[] = [];
  studentId: string = "";
  studentForm!: FormGroup;

  constructor(
    private locationService: LocationService,
    private studentService: StudentService,
    private fromBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) { }


  ngOnInit(): void {
    this.studentId = this.route.snapshot.params['id'];
    console.log(this.studentId);
    this.studentForm = this.fromBuilder.group({
      name: [''],
      email: [''],
      cellNo: [''],
      location: this.fromBuilder.group({
        id: [undefined],
        name: [undefined],
        city: [undefined],
        state: [undefined],
        photo: [undefined],
        availableUnits: [undefined],
        wifi: [undefined],
        laundry: [undefined]
      })
    });
    this.loadLocation();
    this.loadStudentDetails();

  }

  loadLocation(): void {
    this.locationService.getAllLocationforStudent()
      .subscribe({
        next: (res: Location[]) => {
          this.location = res;

        },

        error: er => {
          console.log(er);

        }
      });

  }

  loadStudentDetails(): void {
    this.studentService.getByStudentId(this.studentId)
      .subscribe({
        next: (student: StudentModel) => {
          this.student = student;
          this.studentForm.patchValue({
            name: student.name,
            email: student.email,
            cellNo: student.cellNo,
            location: student.location
          });
        },

        error: error => {
          console.log(error);
        }
      });
  }

  updateStudent(): void {
    const updateStudent: StudentModel = {

      ...this.student,
      ...this.studentForm.value

    };

    this.studentService.updateStudent(updateStudent)
      .subscribe({
        next: res => {

          console.log('student update successfully:', res);
          this.studentForm.reset();
          this.router.navigate(['viewstudent']);
        },
        error: error => {

          console.log('Error updating student:', error);
        }

      });

  }

}