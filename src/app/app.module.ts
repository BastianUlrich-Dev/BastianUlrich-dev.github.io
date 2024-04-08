import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './pages/home/home.component';
import { PortadaComponent } from './pages/home/portada/portada.component';
import { ExperienciaComponent } from './pages/home/experiencia/experiencia.component';
import { ProyectsComponent } from './pages/home/proyects/proyects.component';
import { FooterComponent } from './components/footer/footer.component';
import { SkillsComponent } from './pages/home/skills/skills.component';
import { ModalComponent } from './components/modal/modal.component';
import { HttpClientModule } from '@angular/common/http';
import { MatMenuModule } from '@angular/material/menu';
import { A11yModule } from '@angular/cdk/a11y';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    PortadaComponent,
    ExperienciaComponent,
    ProyectsComponent,
    FooterComponent,
    SkillsComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatMenuModule,
    A11yModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
