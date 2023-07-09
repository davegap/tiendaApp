import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  private apiUrl = `${environment.apiUrl}`;

  constructor(private http: HttpClient) { }

  buscarTodosEstadoPedido(): Observable<any[]> {
    const url = `${this.apiUrl}/estadoPedido/buscarTodos`;
    return this.http.get<any[]>(url);
  }

  detallePedidobuscarPorPedidoId(id:any): Observable<any[]> {
    const url = `${this.apiUrl}/detallePedido/buscarPorPedidoId/?id=${id}`;
    return this.http.get<any[]>(url);
  }


  agregarNuevoPedido(element:any): Observable<any>{
    const url = `${this.apiUrl}/pedido/nuevaPedido`;
    return this.http.post<any>(url,element)
  }

  agregarNuevoDetallePedido(element:any): Observable<any>{
    const url = `${this.apiUrl}/detallePedido/nuevaDetallePedido`;
    return this.http.post<any>(url,element)
  }

   actualizarPedido(element:any): Observable<any>{
    const url = `${this.apiUrl}/pedido/actualizarPedido`;
    return this.http.put<any>(url,element)
  }

  actualizarDetallePedido(element:any): Observable<any>{
    const url = `${this.apiUrl}/detallePedido/actualizarDetallePedido`;
    return this.http.put<any>(url,element)
  }
}
