import { Component, OnInit } from '@angular/core';
import { ApiasignaturasService } from '../services/apiasignaturas.service';
import { ApialumnosService } from '../services/apialumnos.service'; // Servicio de alumnos


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  asignaturas: any[] = [];
  alumno: any;
  qrdata:string;

  constructor(private apiasignaturasService: ApiasignaturasService,
              private apialumnosService: ApialumnosService, 
              private qrService: QRCodeGeneratorService) {}


 ngOnInit() {

   this.apiasignaturasService.getPosts().subscribe((data: any) => {
    this.asignaturas = data;
    });

  this.apialumnosService.getUsers().subscribe((data: any) => {
    const rutAlumno 
    this.alumno = data.find((alumno: any) => alumno.rut);
    });
  };
 
  registrarseClase(asignatura: any) {
    if (this.alumno) {
      const qrData = {
        asignatura: asignatura.nombreasignatura,
        fecha: asignatura.fecha,
        profesor: asignatura.profesor,
        rut: this.alumno.rut.slice(0, 8), // Los primeros 8 caracteres del RUT
        email: this.alumno.email
      };

      // Generar el código QR
      const qrCode = this.qrService.generateQRCode(qrData);
      console.log('QR Code generado:', qrCode);
    }
  }

}
