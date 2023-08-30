import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-proyecto02',
  templateUrl: './proyecto02.component.html',
  styleUrls: ['./proyecto02.component.scss']
})
export class Proyecto02Component {
  ngOnInit(): void {
    const respuestasGuardadas = localStorage.getItem('respuestas');
    if (respuestasGuardadas) {
      this.respuestas = JSON.parse(respuestasGuardadas);
    }
  }
  respuestas:any = [];
  miFormulario:any = new FormGroup({
    rtaComment: new FormControl('')
  });

  enviarFormulario() {
    const rtaComment = this.miFormulario.get('rtaComment').value;
    const respuesta = {
      rtaComment: rtaComment
    };
    this.respuestas.push(respuesta);
    this.miFormulario.reset();
    localStorage.setItem('respuestas', JSON.stringify(this.respuestas));
  }


  eliminarRespuesta(respuesta: any) {
    const index = this.respuestas.indexOf(respuesta);
    if (index !== -1) {
      this.respuestas.splice(index, 1);
      localStorage.setItem('respuestas', JSON.stringify(this.respuestas));
    }
  }

  editarRespuesta(respuesta: any) {
    const index = this.respuestas.indexOf(respuesta);
    if (index !== -1) {
      const respuestaEditada = prompt('Editar respuesta', respuesta.rtaComment);
      if (respuestaEditada !== null) {
        this.respuestas[index].rtaComment = respuestaEditada;
        localStorage.setItem('respuestas', JSON.stringify(this.respuestas));
      }
    }
  }
}
