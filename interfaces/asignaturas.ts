//petición get, put, delete
export interface Asignaturas {
  id: number;
  nombre: string;
  profesor: string;
  hora: string;
  fecha: Date;
}

//petición post
export interface Asignatura {
  nombre: string;
  profesor: string;
  hora: string;
  fecha: Date;
}

export interface IAlumno {
  id: number;
  nombre: string;
  email: string;
  rut: string;
}
