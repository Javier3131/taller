import { Component, OnInit } from '@angular/core';
import { TallerService } from '../taller.service';

@Component({
  selector: 'app-reparacion-reporte',
  templateUrl: './reparacion-reporte.component.html',
  styleUrls: ['./reparacion-reporte.component.css'],
})
export class ReparacionReporteComponent implements OnInit {
  reparaciones: any[] = [];
  constructor(public tallerSrv: TallerService) {}

  ngOnInit(): void {
    this.onGetReparaciones();
  }

  onGetReparaciones(): void {
    this.tallerSrv
      .onGetReparacionesReporte()
      .then((x) => {
        this.reparaciones = x;
      })
      .catch((x) => {
        alert('Algo sucedio mal');
      });
  }
}
