export interface ComentarioUsuario {
    id: number;
    img: string;
    nombre: string;
    time: string;
    comment: string;
    answers: {
      id: number;
      img: string;
      nombre: string;
      time: string;
      comment: string;
    }[];

  }