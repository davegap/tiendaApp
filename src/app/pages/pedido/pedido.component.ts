import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PedidosService } from '../../services/pedidos.service';
import { ClientesService } from 'src/app/services/clientes.service';
import { Cliente } from 'src/app/interfaces/cliente';
import { ProductosService } from 'src/app/services/productos.service';
import { Producto } from 'src/app/interfaces/producto';
import { DetallePedido } from 'src/app/interfaces/detallePedido';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.scss']
})
export class PedidoComponent implements OnInit {

  isCheckSave: boolean = true;
  isGeneratePedido= true;

  clientes: Cliente[] = [];
  estdoPedidos:any[] = [];
  productos: Producto[] = [];
  detallePedidos:DetallePedido[] = [];
  pedidos:any[] = [];
  sumaValores: number = 0;


  pedidoId:Number = 0;
  @ViewChild('pedidoInput') pedidoInput: any;

  iscarrito = false;
  isdetalle = false;

  constructor(
    private pedidosService: PedidosService,
    private clientesService: ClientesService,
    private productosService: ProductosService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.buscarTodos();
    this.cargarProductos();
  }

  public formulario: FormGroup = this.fb.group({

      id: null,
      fecha: new Date().getTime(),
      total: 0,
      clienteId: 0,
      estadoPedidoId: 0

  })

  public buscarTodos() {
    this.pedidosService.buscarTodosEstadoPedido().subscribe((element)=>{
      this.estdoPedidos = element;
    })
   this.clientesService.buscarTodos().subscribe((elements)=>{
      this.clientes = elements
    })

  }

  cargarProductos(){
    this.productosService.buscarTodos().subscribe((elements)=>{
      this.productos = elements;
      this.productos = this.productos.map(producto => {
        return {
          ...producto,
          cantidad: 0
        };
      });
    })
  }

  public guardar() {
    this.pedidosService.agregarNuevoPedido(this.formulario.value).subscribe((element)=>{
      this.pedidoId = element.id;
      this.isGeneratePedido=false;
      this.buscarTodos();
      this.iscarrito=true;
      this.formulario.reset();
    })
  }

  public pedido(producto:any){
   const pedido = {
      cantidad: producto.cantidad,
      valor: (producto.cantidad*producto.precioUnitario),
      pedidoId: this.pedidoId,
      productoId: producto.id
    };
    this.pedidosService.agregarNuevoDetallePedido(pedido).subscribe((pedido)=>{
      window.alert(`Tu pedido ha sido cargado al sistema y tiene el número de seguimiento:  ${pedido.pedidoId}`)
      this.pedidos.push(pedido)
    })
  }

  public buscarDetallePedido(id:any){
  this.pedidosService.detallePedidobuscarPorPedidoId(id).subscribe((pedidos)=>{
    this.detallePedidos=pedidos
    this.isdetalle=true
  },
  (error) => {
    window.alert("Pedido no encontrado")
  })
  }

  calcularSumaValores() {
    this.sumaValores = this.pedidos.reduce((total, pedido) => total + pedido.valor, 0);
  }
}
