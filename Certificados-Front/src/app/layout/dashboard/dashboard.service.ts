import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Curso } from './curso';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(
    private http: HttpClient
  ) { }

  private httpOptions = {
    headers: new HttpHeaders({"Content-Type":"application/json"})
  }

  private url: string = "http://localhost:8000/api/curso";

  // public save(curso: Curso): Observable<Curso>{
  //   return this.http.post<Curso>(this.url+"/save", curso, this.httpOptions);
  // }

  //acceder al curso
  public findById(id: number): Observable<Curso>{
    return this.http.get<Curso>(this.url+"/"+id+"/", this.httpOptions);
  }

  // public deleteById(id: number): Observable<Sugerencia>{
  //   return this.http.delete<Sugerencia>(this.url+"/deleteById/"+id, this.httpOptions);
  // }

  //Lista cursos
  public findAll(): Observable<Curso[]>{
    return this.http.get<Curso[]>(this.url+"/", this.httpOptions);
  }

  //search cursos
  // public findByName(term: string): Observable<Curso[]>{
  //   return this.http.get<Curso[]>(this.url+"/findByName/"+term, this.httpOptions);
  // }





}
