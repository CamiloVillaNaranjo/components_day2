//Se hace imports de los hijos.
import { WarningBtn } from './shared/button/button-warning.component';
import { SuccessBtn } from './shared/button/button-success.component';
import { DangerBtn } from './shared/button/button-danger.component';
import { PrimaryBtn } from './shared/button/button-primary.component';
//Por ultimo se hace import del plate de la calculadora.
import { CalculatorComponent } from './calculator.component';
//Es necesario importar la clase padre
import { BaseBtnClass } from './shared/button/button.component';
//Base imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CalculatorComponent,WarningBtn, SuccessBtn, DangerBtn, PrimaryBtn],
  exports : [CalculatorComponent]
})
export class CalculatorModule { }
