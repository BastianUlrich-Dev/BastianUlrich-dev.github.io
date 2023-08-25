import { Component, Renderer2 } from '@angular/core';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { ComuniacionService } from 'src/app/services/comuniacion.service';

@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.scss']
})
export class PortadaComponent {
  changeClase: boolean = false;
  imgProfile:string = "../../../assets/img/imgprofile.png";
  modal: ModalComponent;
  titleModal: string = "Informacion personal";
  descriptionModal: string = `Analista programador con experiencia en desarrollo de módulos. Experiencia
  en Front-end utilizando Html5, JavaScript, CSS3, Bootstrap, además de contar
  con conocimientos de librería react.js y Framework Angular. Experiencia en
  Back-end con lenguaje php, java y node.js con express.js . Por otra parte,
  experiencia con Base de datos Mysql y conocimiento Firebase. prototipado
  con Figma. manejo de GIT y conocimientos básico UX/UI. Fortalezas, gran
  capacidad de aprendizaje autónomo con el objetivo de buscar soluciones
  eficientes e innovadoras, interés en la investigación e implementación de
  mejoras constante a los procesos de trabajo, capacidad de ser ordenado y
  organizado lo que facilita la labor`;
  isOpen: boolean = false;
  
  constructor(private renderer: Renderer2, private comunicacionService : ComuniacionService) {
    this.modal = new ModalComponent(this.renderer);
  }
  ngOnInit(): void {
    this.comunicacionService.clase$.subscribe(clase =>{
      this.changeClase = clase;
      console.log(this.changeClase );
      
    })
  }
    // MEDETODOS PARA EL MODAL
    abrirModal(){
      this.modal.recibirInfo(this.titleModal, this.descriptionModal, this.isOpen);
      this.isOpen = !this.isOpen;
      console.log("desde el nav");
      
    }
    cerrarModal(rta: boolean){
      this.isOpen = rta;
    }

}