import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skillObj = [
    {
      img: "../../../assets/img/html.png",
      percentage: "90%",
      title: "html",
      description: "Semantico y con accesibilidad"
    },
    {
      img: "../../../assets/img/css3.png",
      percentage: "85%",
      title: "css",
      description: "Metodologia BEM y enfoque mobile first"
    },
    {
      img: "../../../assets/img/typescript.png",
      percentage: "67%",
      title: "typescript",
      description: "Buenas practicas y usos de nuevas características"
    },
    {
      img: "../../../assets/img/angular.png",
      percentage: "70%",
      title: "angular",
      description: "Maquetacion y creacion de proyectos reactivos y con enrutamiento"
    },
  ]
  imgProfile:string = "../../../assets/img/imgprofile.png";
  imgAngular:string = "../../../assets/img/angular.png";
  imgTypescript:string = "../../../assets/img/typescript.png";
  imgCss:string = "../../../assets/img/css3.png";
  imgHtml:string = "../../../assets/img/html.png";
}
