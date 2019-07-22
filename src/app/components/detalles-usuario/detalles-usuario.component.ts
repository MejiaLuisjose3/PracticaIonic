import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Result } from '../../Interfaces/interface';

@Component({
  selector: 'app-detalles-usuario',
  templateUrl: './detalles-usuario.component.html',
  styleUrls: ['./detalles-usuario.component.scss'],
})
export class DetallesUsuarioComponent implements OnInit {

  @Input() Datos: Result;
  constructor(private modal: ModalController) { }

  ngOnInit() {
  }

  Regresar() {
    this.modal.dismiss();
  }
}
