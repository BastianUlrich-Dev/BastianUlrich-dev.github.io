import { Component } from '@angular/core';
import { ComuniacionService } from 'src/app/services/comuniacion.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor( private comunicacionService: ComuniacionService){}
   
  ngOnInit(): void {
    this.comunicacionService.scrollToElement$.subscribe((id: string) => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }
}
