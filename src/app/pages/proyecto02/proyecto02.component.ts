import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {ComentarioUsuario} from '../../interfaces/comentarioUsuario';

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
  buttonReply: number | null = null;
  // Id del boton reply segun iteracion;
  idButton: string = '';

  comentarioUsuario: ComentarioUsuario[] = [
    {
      id: 1,
      img: '../../../assets/img/proyect02/avatars/image-amyrobson.png',
      nombre: 'amyribson',
      time: '1 month ago',
      comment: `Impressivel Though it seems the drag
      feature could be improved. But overall it
      looks incredible. You've nailed the design
      and the responsiveness at various
      breakpoints works really well.`,
      answers: [
        
      ]
    },
    {
      id: 2,
      img: '../../../assets/img/proyect02/avatars/image-maxblagun.png',
      nombre: 'maxblagun',
      time: '2 weeks ago',
      comment: `Woah, your project looks awesome! How
      long have you been coding for? I'm still
      new, but think I want to dive into React
      as well soon. Perhaps you can give me an
      insight on where I can learn React?
      Thanks!`,
      answers: [
        {
          id: 1,
          img: '../../../assets/img/proyect02/avatars/image-ramsesmiron.png',
          nombre:'ramsesmiron',
          time:"1 week ago",
          comment:`@maxblagun If you're still new, I'd
          recommend focusing on the
          fundamentals of HTML, CSS, and JS
          before considering React. It's very
          tempting to jump ahead but lay a solid
          foundation first.`,
        },
        {
          id: 2,
          img: '../../../assets/img/proyect02/avatars/image-juliusomo.png',
          nombre:'juliusomo',
          time:"2 days ago",
          comment:`@ramsesmiron | couldn't agree more
          with this. Everything moves so fast
          and it always seems like everyone
          knows the newest library/framework.
          But the fundamentals are what stay
          constant.`,
        }
      ]
    },
  ]

  respuestas:any = [];

  miFormulario:any = new FormGroup({
    rtaComment: new FormControl('')
  });

  openButtonReply(item:any){
    this.buttonReply = Number(item.id);
   console.log('el boton reply fue accionado con ID' + Number(item.id));
    
  }

  enviarFormulario(item:any) {

    // Estoy recibiendo el item al apretar el boton enviar para sacar la posicion de la iteracion
    // la convierto a numero a indexComentario
    let indexComentario = Number(item.id);
    const rtaComment = this.miFormulario.get('rtaComment').value;

    // aqui se almacena el comentario de respuesta del formulario
    const respuesta = {
      rtaComment: rtaComment
    };

    // indexComentario viene con el numero de la iteracion que va y se lo asigno a la posicion del array comentarioUsuario
    this.comentarioUsuario[indexComentario-1].answers.push({
      id: 2,
      img: '../../../assets/img/proyect02/avatars/image-johnsmith.png',
      nombre: 'johnsmith',
      time: '2 months ago',
      comment: respuesta.rtaComment,
    });
    
    this.respuestas.push(respuesta);
    console.log(respuesta);
    console.log(this.comentarioUsuario);
    
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
