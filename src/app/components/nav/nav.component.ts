import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  buttonMenu:boolean = true;
  modalActive:boolean = false;

  ngOnInit(){
  }

  activeMenu(){
    this.buttonMenu = !this.buttonMenu;
  }

  toggleModal(){
    this.buttonMenu = true;
    this.modalActive = !this.modalActive;
  }

}
