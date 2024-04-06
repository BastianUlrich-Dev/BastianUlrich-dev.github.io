import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComuniacionService {

  private clase = new BehaviorSubject<boolean>(false);
  private scrollToElementSource = new Subject<string>();
  scrollToElement$ = this.scrollToElementSource.asObservable();

  clase$ = this.clase.asObservable();

  cambiarClase(clase: boolean) {
    this.clase.next(clase);
  }

  scrollToElement(id: string) {
    this.scrollToElementSource.next(id);
  }
}
