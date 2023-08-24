import { Component } from '@angular/core';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.scss']
})
export class ExperienciaComponent {
  experienciaObj = [
    {
      title: "DISEÑADOR UX/UI",
      company: "SII Group",
      description: "Responsable de la creación de maquetas en Angular con HTML semántico, SCSS metodología BEM y Typescript. Programación de funciones básicas y encargado de la Accesibilidad del proyecto. Además de brindar apoyo constante en distintas células"
    },
    {
      title: "DESARROLLADOR FULL-STACK",
      company: "SAPSG",
      description: "Responsable de analizar, desarrollar y ejecutar soluciones de programación JavaScript, Html, Mysql, java y Bootstrap para cumplir con las necesidades de los clientes"
    },
    {
      title: "DESARROLLADOR JUNIOR",
      company: "CIGSA",
      description: "Responsable de analizar, desarrollar y ejecutar soluciones de programación con lenguaje PHP, JavaScript, Html, CSS, Mysql y Bootstrap para cumplir con las necesidades de los clientes. Además, realización de trabajos administrativos en el área de informática, mantenimiento y soporte de servicios"
    },
    {
      title: "",
      company: "",
      description: ""
    },
  ]
}
