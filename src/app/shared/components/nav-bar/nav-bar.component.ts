import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {

  imagen: string = '';
  constructor() {
    const authUser = localStorage.getItem('auth_user');
    if (authUser) {
      const { imagenByte } = JSON.parse(authUser);
      if(imagenByte != ""){
        this.imagen = "data:image/jpeg;base64," + imagenByte;
      }else{
        this.imagen = "/public/img/user.png"
      }
      console.log(imagenByte)
    }
  }
}
