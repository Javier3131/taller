import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TallerService } from '../taller.service';

@Component({
  selector: 'app-reparacion-add',
  templateUrl: './reparacion-add.component.html',
  styleUrls: ['./reparacion-add.component.css'],
})
export class ReparacionAddComponent implements OnInit {
  desc: '';

  constructor(public tallerSrv: TallerService, private router: Router) {}

  ngOnInit(): void {}

  onCancelar(): void {
    this.tallerSrv.autoAct = {
      id: '',
      data: {
        clienteId: '',
        marca: '',
        modelo: '',
        color: '',
        placa: '',
        anio: '',
      },
    };

    this.tallerSrv.clienteAct = {
      id: '',
      data: {
        primerNombre: '',
        apellido: '',
        telefono: '',
        correo: '',
      },
    };

    this.router.navigate(['/clientes']);
  }
  onGuardarReparacion(): void {
    const reparacion = { autoId: this.tallerSrv.autoAct.id, desc: this.desc };
    this.tallerSrv
      .onPostReparacion(reparacion)
      .then((x) => {
        alert(x.mensaje);
        this.tallerSrv.autoAct = {
          id: '',
          data: {
            clienteId: '',
            marca: '',
            modelo: '',
            color: '',
            placa: '',
            anio: '',
          },
        };

        this.tallerSrv.clienteAct = {
          id: '',
          data: {
            primerNombre: '',
            apellido: '',
            telefono: '',
            correo: '',
          },
        };
        this.router.navigate(['/clientes']);
      })
      .catch((x) => {
        alert('Algo salio mal');
      });
  }
}
