import { Component } from '@angular/core';
import { ComuniacionService } from 'src/app/services/comuniacion.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  urlPdf : string = 'assets/Bastian_Ulrich_Jorquera_Seron.pdf';
  changeClase: boolean = false;

  constructor(private comunicacionService : ComuniacionService, private http: HttpClient){}

  ngOnInit(): void {
    this.comunicacionService.clase$.subscribe(clase =>{
      this.changeClase = clase;      
    })
  }
  abrirEnlace(){
    window.open('https://www.linkedin.com/in/bastian-ulrich-jorquera-seron-472a5a141/', '_blank');
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
