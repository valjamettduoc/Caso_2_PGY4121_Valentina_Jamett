//petición get, put, delete
export interface Asignaturas{
    seccion: string, 
    nombreasignatura: string,
    descripcion: string,
    imagen: string,
    profesor:string,
    fecha: Date,
}

//petición post
export interface Asignatura{
    seccion: string, 
    nombreasignatura: string,
    descripcion: string,
    imagen: string,
    profesor:string,
    fecha: Date,
}