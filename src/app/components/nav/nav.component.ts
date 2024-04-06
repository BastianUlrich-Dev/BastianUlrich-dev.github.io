import { Component, Renderer2, ElementRef} from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { HttpClient } from '@angular/common/http';
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
  descriptionModalMain: string = `Soy un Analista Programador con experiencia en el desarrollo Full-stack. Mi enfoque
  se centra en la programación Front-end utilizando HTML5, JavaScript, CSS3 y
  Bootstrap. Además, tengo sólidos conocimientos en el Framework Angular. En el
  ámbito Back-end, cuento con experiencia en lenguajes como PHP, Java con Spring
  boot y Node.js con Express.js. También he trabajado con bases de datos MySQL y
  tengo conocimiento en Firebase. Soy competente en prototipado con Figma, manejo
  eficazmente GIT y tengo conocimientos en UX/UI. Mi mayor fortaleza es mi
  capacidad para aprender de manera autónoma, lo que me permite buscar soluciones
  eficientes e innovadoras. Siempre estoy interesado en la investigación e
  implementación de mejoras constantes en los procesos de trabajo, y mi habilidad
  para ser ordenado y organizado facilita mis labores.`;
  descriptionModal: string = "Este sitio web está diseñado como portafolio con proyectos básicos. se está utilizando framework Angular 16 sin ningún framework de diseño. Cabe destacar que estará en constante actualización";
  isOpen: boolean = false;
  contrastActive: boolean = false;

  constructor(private renderer: Renderer2, private http: HttpClient , private comunicacionService: ComuniacionService, private el: ElementRef) {
   this.modal = new ModalComponent(this.renderer,this.http);
  }

  ngOnInit(): void {
    this.body = this.el.nativeElement.ownerDocument.body;
    
  }

  aumentarSize(){
    if (this.clickCounter < 2) {
      this.fontSize += 10;
      this.clickCounter++;      
      this.renderer.setStyle(document.body, 'font-size', `${this.fontSize}%`);
    }
  }
  disminuirSize(){
    if (this.clickCounter > -2) {
      this.fontSize -= 10;
      this.clickCounter--;
      this.renderer.setStyle(document.body, 'font-size', `${this.fontSize}%`);
    }
  }

  activeMenuAccesibility(){
    this.buttonAccesibility = !this.buttonAccesibility;
  }

  scrollTo(id: string): void {
    this.comunicacionService.scrollToElement(id);
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
    this.modal.recibirInfo(this.titleModal, this.descriptionModalMain, this.descriptionModal, this.isOpen , this.contrastActive);
    this.isOpen = !this.isOpen;
    this.buttonMenu = true;
    this.contrastActive = this.buttonContrast;    
    this.renderer.setStyle(document.body, 'overflow', 'hidden');
  }
  cerrarModal(rta: boolean){
    this.isOpen = rta;
  }
}
