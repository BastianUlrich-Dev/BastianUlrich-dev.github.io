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
      percentage: "68%",
      title: "html",
      description: "Semántico y con accesibilidad"
    },
    {
      img: "../../../assets/img/css3.png",
      percentage: "70%",
      title: "css",
      description: "Metodología BEM y enfoque mobile first"
    },
    {
      img: "../../../assets/img/typescript.png",
      percentage: "50%",
      title: "typescript",
      description: "Buenas practicas y usos de nuevas características"
    },
    {
      img: "../../../assets/img/angular.png",
      percentage: "57%",
      title: "angular",
      description: "Maquetación y creación  de proyectos reactivos y con enrutamiento"
    },
  ]
  imgProfile:string = "../../../assets/img/imgprofile.png";
  imgAngular:string = "../../../assets/img/angular.png";
  imgTypescript:string = "../../../assets/img/typescript.png";
  imgCss:string = "../../../assets/img/css3.png";
  imgHtml:string = "../../../assets/img/html.png";
  divShadown:boolean = false;
  begg1:boolean = false;
  begg2:boolean = true;
  begg3:boolean = true;
  begg4:boolean = true;
  begg5:boolean = true;
  begg6:boolean = true;
  activarEgg1(){
    this.begg2 = false;
    this.begg1 = true;
  }
  activarEgg2(){
    this.begg3 = false;
    this.begg2 = true;
  }
  activarEgg3(){
    this.begg4 = false;
    this.begg3 = true;
  }
  activarEgg4(){
    this.begg5 = false;
    this.begg4 = true;
  }
  activarEgg5(){
    this.begg6 = false;
    this.begg5 = true;
  }
  activarEgg6(){
    this.begg6 = true;
    this.begg1 = false;
    this.divShadown = true;
  setTimeout(() => {
    this.divShadown = false;
  }, 2000);
  }
}
