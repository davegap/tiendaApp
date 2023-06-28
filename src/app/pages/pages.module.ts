import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriaComponent } from './categoria/categoria.component';
import { ProductoComponent } from './producto/producto.component';
import { PedidoComponent } from './pedido/pedido.component';
import { ClienteComponent } from './cliente/cliente.component';
import { PagesRoutingModule } from './pages-routing.module';




@NgModule({
  declarations: [

    CategoriaComponent,
       ProductoComponent,
       PedidoComponent,
       ClienteComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ],
  exports: [
  ]
})
export class PagesModule { }
