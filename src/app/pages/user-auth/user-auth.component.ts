import { NgIf } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-auth',
  standalone: true,
  imports: [NgIf,ReactiveFormsModule],
  templateUrl: './user-auth.component.html',
  styleUrl: './user-auth.component.css'
})
export class UserAuthComponent implements OnInit {
  loginForm!: FormGroup;
  registerForm!: FormGroup;
  isLoginMode = true; // This determines whether login or register form is shown

  private fb: FormBuilder=inject(FormBuilder);
  private router: Router= inject(Router);

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  toggleMode(): void {
    this.isLoginMode = !this.isLoginMode; // Switch between login and registration
  }

  onLogin(): void {
    const { email, password } = this.loginForm.value;

    // Check user credentials in localStorage 
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find((u: any) => u.email === email && u.password === password);

    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user)); // Store current user in localStorage
      this.router.navigate(['/home']); // Navigate to the home page
      this.toggleMode()
    } else {
      alert('Invalid credentials!'); // Show error if user is not found
    }
  }

  onRegister(): void {
    const newUser = this.registerForm.value;

    let users = JSON.parse(localStorage.getItem('users') || '[]');
    users.push(newUser); // Add new user to localStorage
    localStorage.setItem('users', JSON.stringify(users));
    alert('Registration successful!');
    this.toggleMode(); // Switch to the login form
  }

}
