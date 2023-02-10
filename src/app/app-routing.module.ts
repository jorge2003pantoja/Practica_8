import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { Error404Component } from './pages/error404/error404.component';


const routes:Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'contact',
    loadChildren: ()=> import('./pages/contact/contact.module').then(m=>m.ContactModule)
  },
  { 
    path:'about',
    loadChildren: ()=> import('./pages/about/about.module').then(m=>m.AboutModule)
  },
  {
    path:'gallery',
    loadChildren: ()=> import('./pages/gallery/gallery.module').then(m=>m.GalleryModule)
  },
  {
    path:'error404',
    loadChildren: ()=> import('./pages/error404/error404.module').then(m=>m.Error404Module)
  },
  {
    path: '**',
    redirectTo:'error404'
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
