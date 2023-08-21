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
      title: "Proyecto calculador de edad",
      subtitle: "En progreso",
      description: "Descripcion"
    },
    {
      img: "../../../../assets/img/patron2.png",
      title: "Proyecto 02",
      subtitle: "En progreso",
      description: "Descripcion"
    },
    {
      img: "../../../../assets/img/patron3.png",
      title: "Proyecto 03",
      subtitle: "En progreso",
      description: "Descripcion"
    },
    {
      img: "../../../../assets/img/patron4.png",
      title: "Proyecto 04",
      subtitle: "En progreso",
      description: "Descripcion"
    }
  ];
}
