import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  email: string = '';
  senha: string = '';

  constructor(private router: Router) {}

  login() {
    if (this.email === 'admin' && this.senha === '123') {
      this.router.navigate(['/tickets']);
    } else {
      alert('Login inválido!');
    }
  }

}
