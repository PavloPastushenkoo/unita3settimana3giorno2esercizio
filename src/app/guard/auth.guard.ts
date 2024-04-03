import { ActivatedRouteSnapshot, Router, CanActivateFn, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class authGuard {
  authService: any;
constructor(private AuthService: AuthService, private router: Router) {}

  canActivate(next:ActivatedRouteSnapshot, state:RouterStateSnapshot): Observable<boolean> | Promise<boolean> | UrlTree | boolean {
    if (this.authService.isLoggedIn.value !== true){
      this.router.navigate(['login'])
    }
    return true
  }
};
