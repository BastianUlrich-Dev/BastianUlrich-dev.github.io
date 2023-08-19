import { Component } from '@angular/core';

@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.scss']
})
export class PortadaComponent {

  imgProfile:string = "../../../assets/img/imgprofile.png";
  imgAngular:string = "../../../assets/img/angular.png";
  imgTypescript:string = "../../../assets/img/typescript.png";
  imgCss:string = "../../../assets/img/css3.png";
  imgHtml:string = "../../../assets/img/html.png";
}
