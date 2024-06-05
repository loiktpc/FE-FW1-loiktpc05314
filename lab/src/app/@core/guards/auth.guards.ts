import { Injectable } from "@angular/core";
import { AuthService } from "../service/api/auth.service";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  constructor(private readonly authService: AuthService, private readonly router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authService.isLogger()) {
      return true;
    } else {
      this.router.navigate(['/loginlab5']).then();
      return false;
    }
  }
}


