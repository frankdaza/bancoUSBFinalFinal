import { BrowserModule } from '@angular/platform-browser';
import { NgModule , Input} from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RetiroComponent } from './retiro/retiro.component';
import { AppRoutingModule } from './/app-routing.module';
import { ConsignarComponent } from './consignar/consignar.component';
import { UsuarioService } from './usuario.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    RetiroComponent,
    ConsignarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
