import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private apiUrl = `${environment.apiUrl}/cliente`;

  constructor(private http: HttpClient) { }

  buscarTodos(): Observable<any[]> {
    const url = `${this.apiUrl}/buscarTodos`;
    return this.http.get<any[]>(url);
  }

  agregar(element:any): Observable<any>{
    const url = `${this.apiUrl}/nuevoCliente`;
    return this.http.post<any>(url,element)
  }

  eliminar(element:any): Observable<any>{
    const url = `${this.apiUrl}/eliminar/{id}?id=${element.id}`;
    return this.http.delete(url)
  }

   actualizar(element:any): Observable<any>{
    console.log(element)
    const url = `${this.apiUrl}/actualizarCliente`;
    return this.http.put<any>(url,element)
  }
}
