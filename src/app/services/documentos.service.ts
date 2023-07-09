import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DocumentosService {
  private apiUrl = `${environment.apiUrl}/tipoDocumento`;

  constructor(private http: HttpClient) { }

  buscarTodos(): Observable<any[]> {
    const url = `${this.apiUrl}/buscarTodos`;
    return this.http.get<any[]>(url);
  }

  agregar(element:any): Observable<any>{
    const url = `${this.apiUrl}/nuevoTipoDocumento`;
    return this.http.post<any>(url,element)
  }
}
