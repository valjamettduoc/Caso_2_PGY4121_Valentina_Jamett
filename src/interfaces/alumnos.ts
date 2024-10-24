//petición get, put, delete
export interface Alumno{
    nombre: string;
    apellido: string;
    rut: string;
    email: string;
    password: string;
    carrera: string,
    isactive: boolean;    
}

//post 
export interface AlumnoNuevo{
    nombre: string;
    apellido: string;
    rut: string;
    email: string;
    password: string;
    carrera: string,
    isactive: boolean;    
}