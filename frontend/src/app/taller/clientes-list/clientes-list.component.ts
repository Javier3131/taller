import { TallerService } from './../taller.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes-list',
  templateUrl: './clientes-list.component.html',
  styleUrls: ['./clientes-list.component.css'],
})
export class ClientesListComponent implements OnInit {
  clientes: any[] = [];
  constructor(private tallerSrv: TallerService, private router: Router) {}

  ngOnInit(): void {
    this.onGetClientes();
  }

  onGetClientes(): void {
    this.tallerSrv
      .onGetClientes()
      .then((x) => {
        console.log(x);
        this.clientes = x;
      })
      .catch((x) => {
        alert('Algo sucedio mal');
      });
  }

  onAgregarCliente(): void {
    this.router.navigate(['/clientes/add']);
  }

  onVerCliente(cliente): void {
    this.tallerSrv.clienteAct = cliente;
    console.log(this.tallerSrv.clienteAct);
    this.router.navigate(['/clientes/detail']);
  }

  onEliminarCliente(cliente): void {
    this.tallerSrv
      .onDeleteCliente(cliente)
      .then((x) => {
        alert('Cliente eliminado');
      })
      .catch((x) => {
        alert('Algo sucedio mal');
      });
  }
}
