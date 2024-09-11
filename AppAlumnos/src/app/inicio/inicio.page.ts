import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})


export class InicioPage implements OnInit {

  nombre: string = '';
  apellido: string = '';
  correo: string = '';
  contra: string = '';


  constructor( private router: Router) { }

  redireccionPagina() {
    this.router.navigate(['/']); 
  }

  registro() {
    if (this.nombre && this.apellido && this.correo && this.contra) {
      sessionStorage.setItem('nombre', this.nombre);
      sessionStorage.setItem('apellido', this.apellido);
      sessionStorage.setItem('correo', this.correo);
      sessionStorage.setItem('contra', this.contra);

          //Se usará para el inicio de sesión
          this.router.navigate(['/']); }

         else { 
          alert('Por favor, rellena todos tus datos.');
         }
  }


  ngOnInit() {
  }

}


