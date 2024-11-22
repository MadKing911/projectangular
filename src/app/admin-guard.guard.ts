import { inject, Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  private router: Router=inject(Router);

  canActivate(): boolean {
    const user = JSON.parse(localStorage.getItem('currentUser') || '{}');
    if (user && user.role === 'admin') {
      
      return true;
    }
    this.router.navigate(['/home']);
    return false;
  }
}
