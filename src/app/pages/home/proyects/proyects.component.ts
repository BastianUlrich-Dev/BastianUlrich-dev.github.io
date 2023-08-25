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
      console.log(this.changeClase );
      
    })
  }
  proyectsObj = [
    {
      img: "../../../../assets/img/captura-proyect-01.png",
      title: "Proyecto calculadora de edad, meses y días.",
      subtitle: "",
      description: "Responsivo con formulario reactivo.",
      ruta: "/proyecto01"
    },
    {
      img: "../../../../assets/img/patron2.png",
      title: "Proyecto",
      subtitle: "(En progreso)",
      description: "",
      ruta: "/proyecto02"
    }
    // {
    //   img: "../../../../assets/img/patron3.png",
    //   title: "Proyecto 03",
    //   subtitle: "(En progreso)",
    //   description: "",
    //   ruta: "/proyecto03"
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
