import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SolicitudCertificado } from './solicitud-certificado';

@Injectable({
  providedIn: 'root'
})
export class SolicitudCertificadoService {

  constructor(
    private http: HttpClient
  ) { }

  private httpOptions = {
    headers: new HttpHeaders({"Content-Type":"application/json"})
  }

  private url: string = "http://localhost:8000/api/curso"
  //obtener lista de persona
  public findAll(): Observable<SolicitudCertificado[]>{
    return this.http.get<SolicitudCertificado[]>(this.url+"/", this.httpOptions);
  }
  public findById(id: number): Observable<SolicitudCertificado>{
    return this.http.get<SolicitudCertificado>(this.url+"/"+id+"/", this.httpOptions);
  }


}
