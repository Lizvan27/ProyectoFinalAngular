import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      if(this.login()) return true;
      else {
        Swal.fire({
          icon: 'info',
          title: 'Ingresa tu usuario y contraseña',
          heightAuto: false
        })
        return false
      }
    }
    login(){
      var validar = JSON.parse(localStorage.getItem('logear') || '{}');
      if(validar.status) return true
      else return false
    }  
      
  
}
