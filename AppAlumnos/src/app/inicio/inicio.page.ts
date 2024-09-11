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


  constructor( private router: Router) { }

  redireccionPagina() {
    this.router.navigate(['/main']); // Cambia '/other-page' al path de la página destino
  }

  ngOnInit() {
  }

}


