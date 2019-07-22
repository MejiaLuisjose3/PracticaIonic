import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { DetallesUsuarioComponent } from './detalles-usuario/detalles-usuario.component';

@NgModule({
  entryComponents: [
    DetallesUsuarioComponent
  ],
  exports: [
    DetallesUsuarioComponent
  ],
  declarations: [
    DetallesUsuarioComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
