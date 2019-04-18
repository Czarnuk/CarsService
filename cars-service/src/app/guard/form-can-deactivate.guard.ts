import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../auth/auth.service';

export interface CanComponentDeactivate{
  canDeactivate : () => Observable<boolean> | Promise<boolean> | boolean;
}
@Injectable()
export class FormCanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
  canDeactivate(component : CanComponentDeactivate): Observable<boolean> | Promise<boolean> | boolean {
    return component.canDeactivate ? component.canDeactivate() : true;
    
  }
}
