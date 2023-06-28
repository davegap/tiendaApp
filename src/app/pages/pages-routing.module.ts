import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaComponent } from './categoria/categoria.component';
import { ClienteComponent } from './cliente/cliente.component';
import { PedidoComponent } from './pedido/pedido.component';
import { ProductoComponent } from './producto/producto.component';

const routes:Routes=[
  {
    path: "categorias",
    component: CategoriaComponent
  },
  {
    path:"clientes",
    component:ClienteComponent
  },
  {
    path:"pedidos",
    component:PedidoComponent
  },
  {
    path:"productos",
    component:ProductoComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class PagesRoutingModule { }
