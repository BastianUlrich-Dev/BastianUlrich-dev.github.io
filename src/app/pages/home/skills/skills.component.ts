import { Component } from '@angular/core';
import { ComuniacionService } from 'src/app/services/comuniacion.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  changeClase: boolean = false;

  constructor(private comunicacionService : ComuniacionService){}

  ngOnInit(): void {
    this.comunicacionService.clase$.subscribe(clase =>{
      this.changeClase = clase;
      
    })
  }
  skillObj = [
    {
      img: "../../../assets/img/html.png",
      title: "html",
      description: "Semántico y con accesibilidad"
    },
    {
      img: "../../../assets/img/css3.png",
      title: "css",
      description: "Metodología BEM, responsivo y enfoque mobile first"
    },
    {
      img: "../../../assets/img/typescript.png",
      title: "typescript",
      description: "Buenas practicas y usos de nuevas características"
    },
    {
      img: "../../../assets/img/angular.png",
      title: "angular",
      description: "Maquetación y creación  de proyectos reactivos con enrutamiento"
    },
  ]
  imgProfile:string = "../../../assets/img/imgprofile.png";
  imgAngular:string = "../../../assets/img/angular.png";
  imgTypescript:string = "../../../assets/img/typescript.png";
  imgCss:string = "../../../assets/img/css3.png";
  imgHtml:string = "../../../assets/img/html.png";
}
