//@ts-check
import { HttpClient } from '@angular/common/http';
import { Component, Input, Output, EventEmitter, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  constructor(private renderer: Renderer2, private http: HttpClient) {

  }
  urlPdf : string = 'assets/Bastian_Jorquera_CV.pdf';
  @Input() title :string = "";
  @Input() maindescription: string = "";
  @Input() description :string = "";
  @Input() isOpen: boolean = false;
  @Input() contrastActive: boolean = false;

  @Output() closeModal = new EventEmitter<boolean>();
  recibirInfo(title:string, maindescription:string, description:string, isOpen: boolean, contrastActive: boolean){
    this.title = title;
    this.maindescription = maindescription;
    this.description = description;
    this.isOpen = isOpen;
    this.contrastActive = contrastActive;
  }
  toggleModal(){
    this.isOpen = !this.isOpen
    this.closeModal.emit(false);    
    this.renderer.setStyle(document.body, 'overflow', 'initial');
  }

  descargarArchivoPDF() {
    this.http.get(this.urlPdf, { responseType: 'blob' }).subscribe(blob => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Bastian_CV.pdf';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    });
  }
}
