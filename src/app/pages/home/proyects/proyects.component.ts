import { Component } from '@angular/core';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.scss']
})
export class ProyectsComponent {
  proyectsObj = [
    {
      img: "../../../../assets/img/patron1.png",
      title: "Proyecto calculadora de edad",
      subtitle: "",
      description: "Proyecto calculador de edad, meses y días responsivo con formulario reactivo.",
      ruta: "/proyecto01"
    },
    {
      img: "../../../../assets/img/patron2.png",
      title: "Proyecto 02",
      subtitle: "(En progreso)",
      description: "",
      ruta: "/proyecto02"
    },
    {
      img: "../../../../assets/img/patron3.png",
      title: "Proyecto 03",
      subtitle: "(En progreso)",
      description: "",
      ruta: "/proyecto03"
    },
    {
      img: "../../../../assets/img/patron4.png",
      title: "Proyecto 04",
      subtitle: "(En progreso)",
      description: "",
      ruta: "/proyecto04"
    }
  ];
}
