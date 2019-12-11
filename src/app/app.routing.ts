import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { SobrenosComponent } from './sobrenos/sobrenos.component';
import { PrincipalComponent } from './principal/principal.component';

const APP_ROUTES: Routes = [
   { path: '', component: HomeComponent },
   { path: 'cadastro', component: CadastroComponent },
   { path: 'login', component: LoginComponent },
   { path: 'sobre-nos', component: SobrenosComponent},
   { path: 'nome.user', component: PrincipalComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);