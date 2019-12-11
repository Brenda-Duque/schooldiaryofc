import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import firebaseConfig from './firebase';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';

import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SobrenosComponent } from './sobrenos/sobrenos.component';
import { PrincipalComponent } from './principal/principal.component';


@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
   ],
  declarations: [ AppComponent, HelloComponent, CadastroComponent, HomeComponent, LoginComponent, SobrenosComponent, PrincipalComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
