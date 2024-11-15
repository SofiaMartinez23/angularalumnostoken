import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { AuthGuard } from './guard/auth.guard';
import { CreateComponent } from './components/create/create.component';
import { UpdateComponent } from './components/update/update.component';

const routes: Routes = [
  {
    path:"login", component: LoginComponent
  },
  {
    path:"alumnoscurso", component: AlumnosComponent, canActivate: [AuthGuard]
  },
  {
    path: "create", component: CreateComponent, canActivate: [AuthGuard]
  },
  {
    path: "update/:idAlumno", component: UpdateComponent, canActivate: [AuthGuard]
  },
  {
    path: "login", redirectTo: "", pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
