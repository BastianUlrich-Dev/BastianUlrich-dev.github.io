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
      img: "../../../../assets/img/proyectoRoom.png",
      title: "Proyecto landing page para Room Studios",
      subtitle: "Proyecto real de estudio de producción musical. html, css, js y php",
      description: "",
      ruta: "https://www.roomstudios.cl/"
    },
    {
      img: "../../../../assets/img/proyect03/proyecto03pantallazo.png",
      title: "Proyecto weather",
      subtitle: "Busca la temperatura actual de la ciudad que elijas mediante una API, en tiempo real.",
      description: "",
      ruta: "/proyecto03"
    },
    {
      img: "../../../../assets/img/pantallazo-clon-netflix.png",
      title: "Proyecto clon Netflix",
      subtitle: "Clon de pantalla principal.",
      description: "",
      ruta: "/proyecto04"
    },
    {
      img: "",
      title: "",
      subtitle: "",
      description: "",
      ruta: ""
    }
  ];
}
