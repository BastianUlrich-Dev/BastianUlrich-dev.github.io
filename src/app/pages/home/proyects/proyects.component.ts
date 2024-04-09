import { Component } from '@angular/core';
import { ComuniacionService } from 'src/app/services/comuniacion.service';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.scss']
})
export class ProyectsComponent {
  changeClase: boolean = false;

  constructor(private comunicacionService : ComuniacionService){}

  ngOnInit(): void {
    this.comunicacionService.clase$.subscribe(clase =>{
      this.changeClase = clase;      
    })
  }
  proyectsObj = [
    {
      img: "../../../../assets/img/captura-proyect-01.png",
      title: "Proyecto basico de frontendmentor.io",
      subtitle: "",
      description: "Calculadora de edad responsivo con formulario reactivo.",
      ruta: "/proyecto01"
    },
    {
      img: "../../../../assets/img/patron3.png",
      title: "Proyecto CLIMA",
      subtitle: "(En progreso)",
      description: "",
      ruta: "/proyecto03"
    },
    // {
    //   img: "../../../../assets/img/patron2.png",
    //   title: "Proyecto CRUD",
    //   subtitle: "(En progreso)",
    //   description: "",
    //   ruta: "/proyecto02"
    // },
    // {
    //   img: "../../../../assets/img/patron4.png",
    //   title: "Proyecto 04",
    //   subtitle: "(En progreso)",
    //   description: "",
    //   ruta: "/proyecto04"
    // }
  ];
}
