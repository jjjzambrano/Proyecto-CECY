import { Component, OnInit } from '@angular/core';
import { SolicitudCertificado } from '../solicitud-certificado';

@Component({
  selector: 'app-solicitud-certificado-lista',
  templateUrl: './solicitud-certificado-lista.component.html',
})
export class SolicitudCertificadoListaComponent implements OnInit {

  constructor() { }

  solicitudCertificadoList: SolicitudCertificado[] = [];



  ngOnInit(): void {
    this.findAll();


  }


  public findAll():void {
     this.solicitudCertificadoList =[ {
      solicitudId: 1,
      fecha: "2022-02-02",
      ci: "string",
      nombre: "string",
      curso: "string",
      estadoCurso: "string",
      estadoCertificado: "Solicitado",
      url: "string"
    },{
      solicitudId: 2,
      fecha: "2022-02-02",
      ci: "175113172",
      nombre: "alberto",
      curso: "5-b",
      estadoCurso: "Aprobado",
      estadoCertificado: "En Proceso",
      url: "string"
    },{
      solicitudId: 3,
      fecha: "2022-02-02",
      ci: "175113172",
      nombre: "gonzales",
      curso: "5-A",
      estadoCurso: "Aprobado",
      estadoCertificado: "Generado",
      url: "string"
    }]

  }




}

