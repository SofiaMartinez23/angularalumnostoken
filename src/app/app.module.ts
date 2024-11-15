import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { FormsModule } from '@angular/forms';
import { ServiceAlumnos } from './services/service.alumnos';
import { CreateComponent } from './components/create/create.component';
import { UpdateComponent } from './components/update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    AlumnosComponent,
    CreateComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [ServiceAlumnos],
  bootstrap: [AppComponent]
})
export class AppModule { }
