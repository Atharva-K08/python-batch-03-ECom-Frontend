import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {

    // Get token from localStorage
    const token = localStorage.getItem('access_token');

    // Check if token exists
    if (token) {
      return true;
    }

    // If not authenticated, redirect to login
    this.router.navigate(['/login']);
    return false;
  }
}