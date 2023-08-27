import { Component, Renderer2, ElementRef, RendererStyleFlags2  } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { ComuniacionService } from 'src/app/services/comuniacion.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  fontSize: number = 100;
  clickCounter: number = 0;
  body: HTMLElement | undefined;
  buttonMenu:boolean = true;
  buttonAccesibility:boolean = true;
  buttonContrast: boolean = true;
  toggleChangeClass: boolean = true;
  navContrast: boolean = true;
  modal: ModalComponent;

  titleModal: string = "Información importante";
  descriptionModal: string = "Este sitio web está diseñado como portafolio con proyectos básicos. se está utilizando framework Angular 16 sin ningún framework de diseño. Cabe destacar que estará en constante actualización";
  isOpen: boolean = false;

  constructor(private renderer: Renderer2, private comunicacionService: ComuniacionService, private el: ElementRef) {
   this.modal = new ModalComponent(this.renderer);
  }

  ngOnInit(): void {
    this.body = this.el.nativeElement.ownerDocument.body;
    
  }

  aumentarSize(){
    if (this.clickCounter < 2) {
      this.fontSize += 10;
      this.clickCounter++;
      console.log('clicks:' + this.clickCounter);
      
      this.renderer.setStyle(document.body, 'font-size', `${this.fontSize}%`);
    }
  }
  disminuirSize(){
    if (this.clickCounter > -2) {
      this.fontSize -= 10;
      this.clickCounter--;
      console.log('clicks:' + this.clickCounter);
      this.renderer.setStyle(document.body, 'font-size', `${this.fontSize}%`);
    }
  }

  // aumentarSize(){
  //   if (this.fontSize < 120) {
  //     this.fontSize += 10;
  //     this.renderer.setStyle(document.body, 'font-size', `${this.fontSize}%`);
  //   }
  // }
  // disminuirSize(){
  //   if (this.fontSize > 80) {
  //     this.fontSize -= 10;
  //     this.renderer.setStyle(document.body, 'font-size', `${this.fontSize}%`);
  //   }
  // }

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
    
      this.renderer.setStyle(document.body, 'background-color', 'black');
      this.comunicacionService.cambiarClase(true)
    }else{

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
