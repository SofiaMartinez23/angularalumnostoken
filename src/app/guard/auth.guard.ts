import { Injectable } from '@angular/core'; 
import { CanActivate, Router } from '@angular/router'; 
import { ServiceAlumnos } from '../services/service.alumnos';


@Injectable({
    providedIn: 'root' 
})

export class AuthGuard implements CanActivate {

    constructor(private authService: ServiceAlumnos, private router: Router) {}

    canActivate(): boolean{
        if (!this.authService.token){
            this.router.navigate(['/login']);
            return false
        }
        return true;
    }
}