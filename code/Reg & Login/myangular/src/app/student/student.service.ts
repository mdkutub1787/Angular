import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentModel } from './student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  baseUrl: string = "http://localhost:3000/students/";


  constructor(private http: HttpClient) { }


  viewAllStudent(): Observable<any> {
    return this.http.get(this.baseUrl);

  }

  createStudent(students: StudentModel): Observable<StudentModel> {
    return this.http.post<StudentModel>(this.baseUrl, students)

  }

  deleteStudent(id: string): Observable<any> {
    return this.http.delete(this.baseUrl + id);

  }

  updateStudent(student: StudentModel): Observable<StudentModel> {
    console.log(student);
    return this.http.put<StudentModel>(this.baseUrl + student.id, student);

  }

  getByStudentId(studentId: string): Observable<StudentModel> {
    return this.http.get<StudentModel>(this.baseUrl + studentId);

  }

}
