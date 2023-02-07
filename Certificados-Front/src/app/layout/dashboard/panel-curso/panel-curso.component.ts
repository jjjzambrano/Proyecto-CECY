import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { Curso } from '../curso';

@Component({
  selector: 'app-panel-curso',
  templateUrl: './panel-curso.component.html',
})
export class PanelCursoComponent implements OnInit {

  constructor(
    private dashboardService: DashboardService
  ) { }

  cursoList: Curso[]=[];
  ngOnInit(): void {

    this.findAll();
  }

  public findAll():void {
    this.dashboardService.findAll().subscribe(
      (response) => {this.cursoList = response
      }
    )
  }

}
