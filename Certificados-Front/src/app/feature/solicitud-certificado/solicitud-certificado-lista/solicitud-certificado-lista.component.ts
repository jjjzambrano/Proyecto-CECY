import { Component, OnInit } from '@angular/core';
import { SolicitudCertificado } from '../solicitud-certificado';
import { SolicitudCertificadoService } from '../solicitud-certificado.service';
import { PersonaService } from '../persona-service';
import { DashboardService } from 'src/app/layout/dashboard/dashboard.service';
import { MatriculaServiceService } from '../matricula-service.service';
import { Matricula } from '../matricula';
import { ActivatedRoute } from '@angular/router';
import { Curso } from '../../../layout/dashboard/curso';



@Component({
  selector: 'app-solicitud-certificado-lista',
  templateUrl: './solicitud-certificado-lista.component.html',
})
export class SolicitudCertificadoListaComponent implements OnInit {

  constructor(
    private solicitudCertificadoService: SolicitudCertificadoService,
    private personaService: PersonaService,
    private cursoService: DashboardService,
    private matriculaService: MatriculaServiceService,
    private activatedRoute: ActivatedRoute,
  ) { }

  solicitudCertificadoList: SolicitudCertificado[] = [];
  matriculaList: Matricula[] = [];
  certificadoList: SolicitudCertificado[] = [];
 checkedList: SolicitudCertificado[] = [];
  ngOnInit(): void {
    this.findAll();
    this.activatedRoute.paramMap.subscribe(
      (params) => {
        if (params.get("id")) {
          this.findById(parseInt(params.get("id")!));
        }
      }
    )
  }


  public findAll(): void {
    this.solicitudCertificadoService.findAll().subscribe(
      (response) => {
        this.solicitudCertificadoList = response
        this.buscarPersona();
        this.buscarCurso();
        this.findMatricula();
        this.certificadoList.map(re => { re.checked = false })
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
            (certificado) => {
              if (certificado.userId == matricula.userId && certificado.courseId == this.currentEntity.id) {
                certificado.checked = false;
                this.certificadoList.push(certificado)
                console.log(this.certificadoList)
              }
            }
          )
      }
    )
  }

  currentEntity: Curso =
    {
      id: 0,
      name: "",
      startDate: new Date(),
      finishDate: new Date(),
    };

  findById(id: number): void {
    this.cursoService.findById(id).subscribe(
      (response) => {
        this.currentEntity = response;
      }
    )
  }

  //public checkAll(evemt): void {
     // this.certificadoList.forEach(element => element.checked = event);
  //}
  public checkUncheckAll() {
    for (var i = 0; i < this.certificadoList.length; i++) {
      this.certificadoList[i].checked = false;
    }
    this.getCheckedItemList();
  }
  getCheckedItemList(){
    this.checkedList = [];
    for (var i = 0; i < this.certificadoList.length; i++) {
      if(this.certificadoList[i].checked)
      this.checkedList.push(this.certificadoList[i]);
    }
    this.certificadoList = this.checkedList

  }
}


