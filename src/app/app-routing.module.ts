import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'proyecto01',
    loadChildren: () => import('./pages/proyecto01/proyecto01.module').then(m => m.Proyecto01Module)
  },
  {
    path: 'proyecto02',
    loadChildren: () => import('./pages/proyecto02/proyecto02.module').then(m => m.Proyecto02Module)
  },
  {
    path: 'proyecto03',
    loadChildren: () => import('./pages/proyecto03/proyecto03.module').then(m => m.Proyecto03Module)
  },
  {
    path: 'proyecto04',
    loadChildren: () => import('./pages/proyecto04/proyecto04.module').then(m => m.Proyecto04Module)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
