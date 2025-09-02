import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule // 2. Add FormsModule to the imports array
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  credentials = {
    email: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router) { }

  onLogin() {
    // This is a placeholder for your login logic
    console.log('Login credentials:', this.credentials);

    this.authService.login(this.credentials).subscribe({
      next: (response: any) => {
        console.log('Login successful:', response);
        // Store the token in local storage
        localStorage.setItem('token', response.token);

        // Redirect based on role
        switch (response.role) {
          case 'STUDENT':
            this.router.navigate(['/student-dashboard']);
            break;
          case 'COMPANY':
            this.router.navigate(['/company-dashboard']);
            break;
          case 'ADMIN':
            this.router.navigate(['/admin-dashboard']);
            break;
          default:
            this.router.navigate(['/login']);
        }
      },
      error: (error) => {
        console.error('Login failed:', error);
        // You can add error handling here, like displaying a message to the user
      }
    });
  }
}