import { TallerService } from './../taller.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente-add',
  templateUrl: './cliente-add.component.html',
  styleUrls: ['./cliente-add.component.css'],
})
export class ClienteAddComponent implements OnInit {
  nombre = '';
  apellido = '';
  telefono = '';
  correo = '';

  constructor(private tallerSrv: TallerService, private router: Router) {}

  ngOnInit(): void {}

  onGuardarCliente(): void {
    const cliente = {
      primerNombre: this.nombre,
      apellido: this.apellido,
      telefono: this.telefono,
      correo: this.correo,
    };

    this.tallerSrv
      .onPostCliente(cliente)
      .then((x) => {
        alert(x.mensaje);
        this.router.navigate(['/clientes']);
      })
      .catch((x) => {
        alert('Algo sucedio mal');
      });
  }

  onCancelar(): void {
    this.router.navigate(['/clientes']);
  }
}
