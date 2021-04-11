import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TallerService } from '../taller.service';

@Component({
  selector: 'app-auto-detail',
  templateUrl: './auto-detail.component.html',
  styleUrls: ['./auto-detail.component.css'],
})
export class AutoDetailComponent implements OnInit {
  reparaciones: any[] = [];
  constructor(public tallerSrv: TallerService, private router: Router) {}

  ngOnInit(): void {
    this.onGetReparaciones();
  }

  onGetReparaciones(): void {
    this.tallerSrv
      .onGetReparaciones(this.tallerSrv.autoAct.id)
      .then((x) => {
        this.reparaciones = x;
      })
      .catch((x) => {
        alert('Algo sucedio mal');
      });
  }

  onAgregarReparacion(): void {
    this.router.navigate(['reparaciones/add']);
  }
  onEliminarReparacion(reparacion): void {
    this.tallerSrv
      .onDeleteReparacion(reparacion)
      .then((x) => {
        alert(x.mensaje);
        this.onGetReparaciones();
      })
      .catch((x) => {
        alert('Algo sucedio mal');
      });
  }
}
