import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Alumno, AlumnoNuevo} from '../../interfaces/alumnos';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private httpclient:HttpClient) { }

  GetAllUsers():Observable<Alumno[]>{
    return this.httpclient.get<Alumno[]>(`${environment.apiUrl}/alumnos`);
  }

  getUserByEmail(email: string) {
    return this.httpclient.get<Alumno>(`${environment.apiUrl}/alumnos/?email=${email}`);
  }


  PostAlumno(newAlumno: AlumnoNuevo):Observable<AlumnoNuevo>{
    return this.httpclient.post<AlumnoNuevo>(`${environment.apiUrl}/alumnos`, newAlumno);
  }


}