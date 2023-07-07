import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Categoria } from '../interfaces/categoria';

@Injectable({providedIn: 'root'})
export class CategoriasService {

  private apiUrl = `${environment.apiUrl}/categoria`;


  constructor(private http: HttpClient) { }

  buscarTodos(): Observable<Categoria[]> {
    const url = `${this.apiUrl}/buscarTodas`;
    return this.http.get<Categoria[]>(url);
  }

  agregarCategoria(categoria:Categoria): Observable<Categoria>{
    const url = `${this.apiUrl}/nuevaCategoria`;
    return this.http.post<Categoria>(url,categoria)
  }

  eliminarCategoria(categoria:Categoria): Observable<Categoria>{
    const url = `${this.apiUrl}/eliminar/{id}?id=${categoria.id}`;
    return this.http.delete<Categoria>(url)
  }

   actualizarCategoria(categoria:Categoria): Observable<Categoria>{
    const url = `${this.apiUrl}/actualizarCategoria`;
    return this.http.put<Categoria>(url,categoria)
  }

}
