import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  buttonMenu:boolean = true;

  ngOnInit(){

  }

  activeMenu(){
    this.buttonMenu = !this.buttonMenu;
  }

}
