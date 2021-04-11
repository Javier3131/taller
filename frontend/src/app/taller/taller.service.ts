import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class TallerService {
  baseUrl = 'https://us-central1-taller-a5fda.cloudfunctions.net/webapi';
  //   baseUrl = 'http://localhost:5001/taller-a5fda/us-central1/webapi';
  clienteAct = {
    id: '',
    data: {
      primerNombre: '',
      apellido: '',
      telefono: '',
      correo: '',
    },
  };

  autoAct = {
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

  constructor(private http: HttpClient) {}

  onGetClientes() {
    const url = this.baseUrl + '/clientes';
    return this.http.get<any[]>(url).toPromise();
  }

  onPostCliente(cliente: any) {
    const url = this.baseUrl + '/clientes';
    return this.http.post<any>(url, cliente).toPromise();
  }

  onDeleteCliente(cliente: any) {
    const url = this.baseUrl + `/clientes/${cliente.id}`;
    return this.http.delete<any>(url).toPromise();
  }

  onGetAutos(clienteId: string) {
    const url = this.baseUrl + `/autos/${clienteId}`;
    return this.http.get<any[]>(url).toPromise();
  }

  onDeleteAuto(auto: any) {
    const url = this.baseUrl + `/autos/${auto.id}`;
    return this.http.delete<any>(url).toPromise();
  }

  onPostAuto(auto: any) {
    const url = this.baseUrl + '/autos';
    return this.http.post<any>(url, auto).toPromise();
  }

  onGetReparaciones(autoId: string) {
    const url = this.baseUrl + `/reparaciones/${autoId}`;
    return this.http.get<any[]>(url).toPromise();
  }

  onGetReparacionesReporte() {
    const url = this.baseUrl + `/reparaciones/`;
    return this.http.get<any[]>(url).toPromise();
  }

  onPostReparacion(reparacion: any) {
    const url = this.baseUrl + '/reparaciones';
    return this.http.post<any>(url, reparacion).toPromise();
  }

  onDeleteReparacion(reparacion: any) {
    const url = this.baseUrl + `/reparaciones/${reparacion.id}`;
    return this.http.delete<any>(url).toPromise();
  }
}
