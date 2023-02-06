import { Component, OnInit } from '@angular/core';
import { SolicitudCertificado } from '../solicitud-certificado';
import { SolicitudCertificadoService } from '../solicitud-certificado.service';
import { PersonaService } from '../persona-service';
import { DashboardService } from 'src/app/layout/dashboard/dashboard.service';
import { MatriculaServiceService } from '../matricula-service.service';
import { Matricula } from '../matricula';

@Component({
  selector: 'app-solicitud-certificado-lista',
  templateUrl: './solicitud-certificado-lista.component.html',
})
export class SolicitudCertificadoListaComponent implements OnInit {

  constructor(
    private solicitudCertificadoService: SolicitudCertificadoService,
    private personaService: PersonaService,
    private cursoService: DashboardService,
    private matriculaService: MatriculaServiceService
  ) { }

  solicitudCertificadoList: SolicitudCertificado[] = [];
  matriculaList: Matricula[] = [];
  certificadoList: SolicitudCertificado[] = [];

  ngOnInit(): void {
    this.findAll();
  }


  public findAll(): void {
    this.solicitudCertificadoService.findAll().subscribe(
      (response) => {
        this.solicitudCertificadoList = response
        this.buscarPersona();
        this.buscarCurso();
        this.findMatricula();
      }
    )
  }
  public findMatricula(): void {
    this.matriculaService.findAll().subscribe(
      (response) => {
        this.matriculaList = response
        this.buscarMatricula();
      }
    )
  }
  public buscarPersona(): void {
    this.solicitudCertificadoList.forEach(
      (solicitud) => {
        this.personaService.findById(
          solicitud.userId
        ).subscribe(
          (persona) => {
            solicitud.nombrecompleto = persona.nombres + " " + persona.apellidos;
            solicitud.cedula = persona.cedula;
          }
        )
      }
    )
  }

  public buscarCurso(): void {
    this.solicitudCertificadoList.forEach(
      (solicitud) => {
        this.cursoService.findById(
          solicitud.courseId
        ).subscribe(
          (nombreCurso) => solicitud.curso = nombreCurso.name
        )
      }
    )
  }

  public buscarMatricula(): void {
    this.matriculaList.forEach(
      (matricula) => {
        if (matricula.state == 'Aprobado')
        this.solicitudCertificadoList.forEach(
          (certificado)=> {
            if(certificado.userId == matricula.userId){
              this.certificadoList.push(certificado)
            }
          }
        )
          console.log(matricula.userId)
      }
    )
  }

}


