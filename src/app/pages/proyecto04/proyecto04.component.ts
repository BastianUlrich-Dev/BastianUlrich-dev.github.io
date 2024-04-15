import { Component } from '@angular/core';

@Component({
  selector: 'app-proyecto04',
  templateUrl: './proyecto04.component.html',
  styleUrls: ['./proyecto04.component.scss']
})
export class Proyecto04Component {

  buttonInfo: number | null = null;
  listInfo= [
    {
      title: "¿Qué es Netflix?",
      description: "Netflix es un servicio de streaming que ofrece una gran variedad de películas, series y documentales premiados en casi cualquier pantalla conectada a internet.",
      description2: "Todo lo que quieras ver, sin límites ni comerciales, a un costo muy accesible. Siempre hay algo nuevo por descubrir, ¡y todas las semanas se agregan más películas y series!"
    },
    {
      title: "¿Cuánto cuesta Netflix?",
      description: "Disfruta Netflix en tu smartphone, tablet, smart TV, laptop o dispositivo de streaming, todo por una tarifa plana mensual. Planes desde $6.540 hasta $11.790 al mes. Sin costos adicionales ni contratos."
    },
    {
      title: "¿Dónde puedo ver Netflix?",
      description: "Disfruta donde quieras, cuando quieras. Inicia sesión en tu cuenta de Netflix para ver contenido al instante a través de netflix.com desde tu computadora personal o en cualquier dispositivo con conexión a internet que cuente con la app de Netflix, como smart TV, smartphones, tablets, reproductores multimedia y consolas de juegos.",
      description2: "Además, puedes descargar tus series favoritas con iOS, Android o la app para Windows 10. Con la función de descarga, puedes ver donde vayas y sin conexión a internet. Lleva Netflix contigo adonde sea."
    },
    {
      title: "¿Cómo cancelo?",
      description: "Netflix es flexible. Sin contratos molestos ni compromisos. Cancela la membresía online con solo dos clics. No hay cargos por cancelación. Empieza y termina cuando quieras.",

    },
    {
      title: "¿Qué puedo ver en Netflix?",
      description: "Netflix tiene un amplio catálogo de películas, series, documentales, animes, originales premiados y más. Todo lo que quieras ver, cuando quieras.",

    },
    {
      title: "¿Es bueno Netflix para los niños?",
      description: "La experiencia de Netflix para niños está incluida en la membresía para que los padres tengan el control mientras los peques disfrutan series y películas familiares en su propio espacio.",
      description2: "Los perfiles para niños incluyen controles parentales protegidos por PIN que te permiten restringir el contenido que pueden ver los niños en función de la clasificación por edad y bloquear determinados títulos que no quieras que los niños vean."

    }
  ];

  listFooter= [
    {val:"Preguntas frecuentes"},
    {val: "Centro de ayuda"},
    {val: "Cuenta"},
    {val: "Prensa"},
    {val: "Relaciones con inversionistas"},
    {val: "Empleo"},
    {val: "Canjear tarjetas de regalo"},
    {val: "Formas de ver"},
    {val: "Términos de uso"},
    {val: "Privacidad"},
    {val: "Preferencias de cookies"},
    {val: "Información corporativa"},
    {val: "Contáctanos"},
    {val: "Prueba de velocidad"},
    {val: "Avisos legales"},
    {val: "Solo en Netflix"},
  ];
  

  activarButtonInfo(index:number){
    if (this.buttonInfo === index) {
      this.buttonInfo = null;
    } else {
      this.buttonInfo = index;
    }    
  }
}
