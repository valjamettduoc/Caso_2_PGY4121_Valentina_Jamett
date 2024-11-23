import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-configuracion-perfil",
  templateUrl: "./configuracion-perfil.page.html",
  styleUrls: ["./configuracion-perfil.page.scss"],
})
export class ConfiguracionPerfilPage implements OnInit {
  imageSrc: string | ArrayBuffer | null = null;

  alumnos: any;

  unAlumnos = {
    id: "",
    rut: "",
    nombre: "",
    apellido: "",
    password: "",
    email: "",
    isactive: "",
  };

  constructor(private activated: ActivatedRoute, private router: Router) {
    this.activated.queryParams.subscribe((param) => {
      this.alumnos = JSON.parse(param["alumnos"]);
    });
  }

  ngOnInit() {
    this.imageSrc = localStorage.getItem("photo");
    this.unAlumnos = this.alumnos;
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageSrc = reader.result; // Imagen Vista
        // Almacenar la imagen en localStorage
        localStorage.setItem("photo", this.imageSrc as string);
      };
      reader.readAsDataURL(file);
    }
  }

  actualizarPerfil() {
    this.router.navigate(["/tabs/view-user"], {
      state: { imageSrc: this.imageSrc },
    });
  }
}
