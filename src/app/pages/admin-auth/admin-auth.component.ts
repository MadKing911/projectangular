import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-auth',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './admin-auth.component.html',
  styleUrl: './admin-auth.component.css'
})
export class AdminAuthComponent {
  username = '';
  password = '';

  constructor(private router: Router) {}

  login(): void {
    // Example: Hardcoded admin credentials
    if (this.username === 'admin' && this.password === 'admin123') {
      localStorage.setItem('user', JSON.stringify({ role: 'admin' }));
      this.router.navigate(['/admin']); // Navigate to the admin dashboard
    } else {
      alert('Invalid credentials');
    }
  }

}
