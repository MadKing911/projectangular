import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const user = JSON.parse(localStorage.getItem('currentUser') || '{}');
    if (user && user.role !== 'admin') {
      this.router.navigate(['/myorder']);
      return true;
    }
    this.router.navigate(['/home']);
    return false;
  }
}
