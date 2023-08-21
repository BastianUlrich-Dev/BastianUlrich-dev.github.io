import { Component } from '@angular/core';

@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.scss']
})
export class PortadaComponent {

  skillObj = [
    {
      img: "../../../assets/img/html.png",
      percentage: "95%",
      title: "html",
      description: "Semantico y con accesibilidad"
    },
    {
      img: "../../../assets/img/css3.png",
      percentage: "95%",
      title: "css",
      description: "Metodologia BEM y enfoque mobile first"
    },
    {
      img: "../../../assets/img/typescript.png",
      percentage: "95%",
      title: "typescript",
      description: "Buenas practicas y usos de nuevas características"
    },
    {
      img: "../../../assets/img/angular.png",
      percentage: "95%",
      title: "angular",
      description: "Maquetacion y creacion de proyectos reactivos y con enrutamiento"
    },
  ]
  imgProfile:string = "../../../assets/img/imgprofile.png";
  imgAngular:string = "../../../assets/img/angular.png";
  imgTypescript:string = "../../../assets/img/typescript.png";
  imgCss:string = "../../../assets/img/css3.png";
  imgHtml:string = "../../../assets/img/html.png";
  imgTest:string = "test";
}