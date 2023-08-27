import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComuniacionService {

  private clase = new BehaviorSubject<boolean>(false);

  clase$ = this.clase.asObservable();

  cambiarClase(clase: boolean) {
    this.clase.next(clase);
  }
  cambiarFontSize(){
    
  }
}
