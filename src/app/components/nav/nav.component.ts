import { Component, Renderer2  } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { ComuniacionService } from 'src/app/services/comuniacion.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  buttonMenu:boolean = true;
  buttonAccesibility:boolean = true;
  buttonContrast: boolean = true;
  toggleChangeClass: boolean = true;
  navContrast: boolean = true;
  modal: ModalComponent;

  titleModal: string = "Información importante";
  descriptionModal: string = "Este sitio web está diseñado como portafolio con proyectos básicos. se está utilizando framework Angular 16 sin ningún framework de diseño. Cabe destacar que estará en constante actualización";
  isOpen: boolean = false;

  constructor(private renderer: Renderer2, private comunicacionService: ComuniacionService) {
   this.modal = new ModalComponent(this.renderer);
  }

  activeMenuAccesibility(){
    this.buttonAccesibility = !this.buttonAccesibility;
  }

  activeMenu(){
    this.buttonMenu = !this.buttonMenu;
  }
  activeContrast(){
    this.buttonContrast = !this.buttonContrast;
    this.navContrast = !this.navContrast;
    this.changeContrast();
    this.buttonAccesibility = true;
  }
  changeContrast(){
    if (!this.buttonContrast) {
      // this.renderer.setStyle(document.body, 'filter', 'grayscale(1)');
      this.renderer.setStyle(document.body, 'background-color', 'black');
      this.comunicacionService.cambiarClase(true)
    }else{
      // this.renderer.setStyle(document.body, 'filter', 'grayscale(0)');
      this.renderer.setStyle(document.body, 'background-color', '#16161a');
      this.comunicacionService.cambiarClase(false)
    }

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
