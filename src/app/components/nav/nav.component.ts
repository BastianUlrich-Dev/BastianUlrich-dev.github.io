import { Component } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  buttonMenu:boolean = true;
  modal: ModalComponent;

  titleModal: string = "Información importante";
  descriptionModal: string = "Este sitio web está diseñado como portafolio con proyectos básicos. se está utilizando framework Angular 16 sin ningún framework de diseño. Cabe destacar que estará en constante actualización";
  isOpen: boolean = false;


  constructor() {
    this.modal = new ModalComponent();
  }
  
  activeMenu(){
    this.buttonMenu = !this.buttonMenu;
  }

  // MEDETODOS PARA EL MODAL
  abrirModal(){
    this.modal.recibirInfo(this.titleModal, this.descriptionModal, this.isOpen);
    this.isOpen = !this.isOpen;
    this.buttonMenu = true;
    
  }
  cerrarModal(rta: boolean){
    this.isOpen = rta;
  }
}
