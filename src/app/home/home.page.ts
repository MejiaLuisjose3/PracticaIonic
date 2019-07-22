import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../services/usuarios.service';
import { RootObject, Result } from '../Interfaces/interface';
import { ModalController } from '@ionic/angular';
import { DetallesUsuarioComponent } from '../components/detalles-usuario/detalles-usuario.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  usuario: Result[] = [];

  constructor(private service: UsuariosService,
              private Moldactrl: ModalController) {}

  ngOnInit() {
    for (let index = 0; index < 10; index++) {
      this.service.getUsers().subscribe(resp => {
        this.usuario.push(...resp.results);
      });
    }
  }
  async DetallesUser(usuario: Result ) {
    const modal = await this.Moldactrl.create({
      component: DetallesUsuarioComponent,
      componentProps: {
       Datos : usuario
      }
    });

    modal.present();
  }
}
