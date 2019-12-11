import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CadastroComponent } from './cadastro.pcomponent';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [CadastroComponent]
})
export class CadastroComponentModule {