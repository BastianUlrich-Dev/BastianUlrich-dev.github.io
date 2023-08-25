import { Component, Renderer2  } from '@angular/core';
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

  constructor(private renderer: Renderer2) {
    this.modal = new ModalComponent(this.renderer);
  }
  
  activeMenu(){
    this.buttonMenu = !this.buttonMenu;
  }

  // MEDETODOS PARA EL MODAL
  abrirModal(){
    this.modal.recibirInfo(this.titleModal, this.descriptionModal, this.isOpen);
    this.isOpen = !this.isOpen;
    this.buttonMenu = true;
    this.renderer.setStyle(document.body, 'overflow', 'hidden');
  }
  cerrarModal(rta: boolean){
    this.isOpen = rta;
  }
}
