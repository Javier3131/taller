import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TallerService } from '../taller.service';

@Component({
  selector: 'app-auto-add',
  templateUrl: './auto-add.component.html',
  styleUrls: ['./auto-add.component.css'],
})
export class AutoAddComponent implements OnInit {
  marca = '';
  modelo = '';
  color = '';
  placa = '';
  anio = '';

  constructor(private tallerSrv: TallerService, private router: Router) {}

  ngOnInit(): void {}

  onGuardarAuto(): void {
    const auto = {
      clienteId: this.tallerSrv.clienteAct.id,
      marca: this.marca,
      modelo: this.modelo,
      color: this.color,
      placa: this.placa,
      anio: this.anio,
    };
    this.tallerSrv
      .onPostAuto(auto)
      .then((x) => {
        alert(x.mensaje);
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
        alert('Algo sucedio mal');
      });
  }

  onCancelar(): void {
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
}
