import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user'
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signtarure',
  templateUrl: './signtarure.page.html',
  styleUrls: ['./signtarure.page.scss'],
})
export class SigntarurePage implements OnInit {

  public userRegister: User = {};

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  async registrar() {

    try {
      await this.authService.registrar(this.userRegister);
    } catch (error) {
      console.log('cadastrando usuario');
    } finally {
      console.log('registrando conta');
    }


  }




}
