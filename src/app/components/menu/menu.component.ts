import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  ngOnInit(): void {
    
  }
  rutas=[
    {
      name: 'Home',
      path: '/home'
    },
    {
      name: 'About',
      path: '/about'
    },
    {
      name: 'Contact',
      path: '/contact'
    },
    {
      name: 'Gallery',
      path: '/gallery'
    },
    {
      name: 'Error404',
      path: '/error404'
    }
  ];
}
