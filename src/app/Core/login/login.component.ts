import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';


  constructor(private loginService: LoginService, 
    private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.loginService.login(this.email, this.password).subscribe(
      response => {
        if(response) {
          this.router.navigate(['/brands']); 
        }
      },
      error => {
        // Handle login error
        console.error('Login failed', error);
      }
    );
  }

  recoverPassword() {
    // Implement password recovery logic
    console.log('Recover password clicked');
  }

  navigateToSignUp() {
    console.log("In progress")
  }


  loginWithGoogle() {
    this.loginService.loginWithGoogle().subscribe(
      response => {
        // Handle successful Google login
        console.log('Google login successful!', response);
      },
      error => {
        // Handle Google login error
        console.error('Google login failed', error);
      }
    );
  }

}
