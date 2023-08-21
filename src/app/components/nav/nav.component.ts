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

  titleModal: string = "Informacion importante";
  descriptionModal: string = "Este sitio web esta diseñado como portafolio con proyectos basicos. Cabe destacar que se esta utilizando framework Angular sin ningun framework de diseño";
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
