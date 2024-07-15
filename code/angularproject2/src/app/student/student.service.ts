import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentModel } from './student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  getStudents(studentId: string) {
    throw new Error('Method not implemented.');
  }

  baseUrl: string = "http://localhost:3000/students/";

  constructor(private http: HttpClient) { }

  viewAllStudent(): Observable<any> {

    return this.http.get(this.baseUrl);
  }

  createStudent(student: StudentModel): Observable<StudentModel> {

    return this.http.post<StudentModel>(this.baseUrl, student);
  }

  deleteStudent(studentId: string): Observable<any> {

    // return this.http.delete<void>(`${this.baseUrl}${studentId}`);
    return this.http.delete(this.baseUrl + studentId);
  }

  updateStudent(student: StudentModel): Observable<StudentModel> {
    return this.http.put<StudentModel>(`${this.baseUrl}${student.id}`, student);
  }

  getStudentById(studentId: string): Observable<StudentModel> {
    return this.http.get<StudentModel>(`${this.baseUrl}${studentId}`);
  }

}

