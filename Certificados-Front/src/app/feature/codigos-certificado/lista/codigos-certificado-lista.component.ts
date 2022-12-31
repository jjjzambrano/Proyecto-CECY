import { Component, OnInit } from '@angular/core';
import { CodigoCertificado } from '../codigos-certificado';

@Component({
  selector: 'app-lista',
  templateUrl: './codigos-certificado-lista.component.html',
})
export class CodigosCertificadoListaComponent implements OnInit {

  constructor() { }
  codigoCertificadoList: CodigoCertificado[] = [];



  ngOnInit(): void {
    this.findAll();


  }


  public findAll():void {
     this.codigoCertificadoList =[ {
      codigoId: 1,
      ci: "string",
      codigo: "string",
      nombre: "string",
      apellido: "string",
      url: "string"
    },{
      codigoId: 1,
      ci: "string",
      codigo: "string",
      nombre: "string",
      apellido: "string",
      url: "string"
    },{
      codigoId: 1,
      ci: "string",
      codigo: "string",
      nombre: "string",
      apellido: "string",
      url: "string"
    }]
  }}
