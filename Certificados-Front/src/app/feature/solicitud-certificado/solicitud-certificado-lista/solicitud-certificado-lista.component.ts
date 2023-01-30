import { Component, OnInit } from '@angular/core';
import { SolicitudCertificado } from '../solicitud-certificado';
import { SolicitudCertificadoService } from '../solicitud-certificado.service';
import { PersonaService } from '../persona-service';

@Component({
  selector: 'app-solicitud-certificado-lista',
  templateUrl: './solicitud-certificado-lista.component.html',
})
export class SolicitudCertificadoListaComponent implements OnInit {

  constructor(
    private solicitudCertificadoService: SolicitudCertificadoService,
    private personaService: PersonaService
    //necesitamos el revicio de persona para completar la entidad
  ) { }

  solicitudCertificadoList: SolicitudCertificado[] = [];



  ngOnInit(): void {
    this.findAll();


  }


  public findAll():void {
    this.solicitudCertificadoService.findAll().subscribe(
      (response)=>{
        this.solicitudCertificadoList=response
        // this.buscarPersona();

      console.log("esta basura no"+this.solicitudCertificadoList)}
    )
  }
  //motivo ddddd modulo
  // public buscarPersona():void{
  //   this.solicitudCertificadoList.forEach(
  //     (solicitud)=>{
  //       console.log("esto si"+solicitud.personaCurso)

  //     }
  //   )
  // }




}

