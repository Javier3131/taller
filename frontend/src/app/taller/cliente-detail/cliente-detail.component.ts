import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TallerService } from '../taller.service';

@Component({
  selector: 'app-cliente-detail',
  templateUrl: './cliente-detail.component.html',
  styleUrls: ['./cliente-detail.component.css'],
})
export class ClienteDetailComponent implements OnInit {
  autos: any[] = [];
  constructor(public tallerSrv: TallerService, private router: Router) {}

  ngOnInit(): void {
    this.onGetAutos();
  }

  onGetAutos(): void {
    this.tallerSrv
      .onGetAutos(this.tallerSrv.clienteAct.id)
      .then((x) => {
        this.autos = x;
      })
      .catch((x) => {
        alert('Sucedio un error');
      });
  }

  onAgregarAuto(): void {
    this.router.navigate(['/autos/add']);
  }

  onVerAuto(auto): void {
    this.tallerSrv.autoAct = auto;
    this.router.navigate(['/autos/detail']);
  }

  onEliminarAuto(auto): void {
    this.tallerSrv
      .onDeleteAuto(auto)
      .then((x) => {
        alert('El auto ha sido eliminado');
        this.router.navigate(['/clientes']);
      })
      .catch((x) => {
        alert('Sucedio algo mal');
      });
  }

  onGetDate(_seconds: string, _nanoseconds: string) {
    
  }
}
