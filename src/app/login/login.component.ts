import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  token: any = 'token inicial';

  login: any = {
    username: '',
    password: '',
  };

  submitted = false;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void { }

  logUser(): void {
    const data = {
      username: this.login.username,
      password: this.login.password,
    };

    this.loginService.signUp(data)
      .subscribe(
        response => {
          this.token = response;
          this.submitted = true;
          console.log(response);
          if (this.login.username == "admin") {
            this.router.navigate(['/admin']);
          } else {
            this.router.navigate(['/home']);
          }

          window.sessionStorage.setItem("auth-token", this.token.token);
          window.sessionStorage.setItem("auth-email", this.login.email);

        },
        error => {
          console.log(error);
          alert("Usuario o contraseña incorrecta")
        });
  }
}
