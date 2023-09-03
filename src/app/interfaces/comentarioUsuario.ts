export interface ComentarioUsuario {
    id: number;
    img: string;
    nombre: string;
    time: string;
    comment: string;
    answers: {
      idAnswers: number;
      idUser: number;
      img: string;
      nombre: string;
      time: string;
      comment: string;
    }[];

  }