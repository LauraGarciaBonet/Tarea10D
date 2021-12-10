import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculadoraComponent } from './calculadora.component';
import { CalcularModule } from './calcular/calcular.module';
import { ResultModule } from './result/result.module';



@NgModule({
  declarations: [
    CalculadoraComponent
  ],
  exports:[
  CalculadoraComponent

  ],
  imports: [
    CommonModule,
    CalcularModule,
    ResultModule
  ]
})
export class CalculadoraModule { }
