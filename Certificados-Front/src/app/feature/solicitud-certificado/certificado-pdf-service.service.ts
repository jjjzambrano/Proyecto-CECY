import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Certificado } from './certificado';

@Injectable({
  providedIn: 'root'
})
export class CertificadoPdfServiceService {

  constructor(
    private http: HttpClient
  ) { }
  private httpOptions = {
    headers: new HttpHeaders({"Content-Type":"application/json"})
  }
  private url: string = "http://localhost:8089/api/certificado/pdf"
  public findById(id: number): Observable<Certificado>{
    return this.http.get<Certificado>(this.url+"/"+id+"/", this.httpOptions);
  }
}
