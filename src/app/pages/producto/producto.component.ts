import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Categoria } from 'src/app/interfaces/categoria';
import { Producto } from 'src/app/interfaces/producto';
import { CategoriasService } from 'src/app/services/categorias.service';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {

  public categorias: Categoria[] = [];
  public productos: Producto[] = [];
  public isCheckSave: boolean = true;


  constructor(
    private categoriaService: CategoriasService,
    private productoService: ProductosService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.buscarTodos();
  }

  public formulario: FormGroup = this.fb.group({
    id: null,
    referencia:null,
    nombre: null,
    descripcion: null,
    unidadesDisponibles: 0,
    precioUnitario: 0,
    categoriaId: 0
  })

  public buscarTodos() {
    this.categoriaService.buscarTodos().subscribe((categorias) => {
      this.categorias = categorias;
    });
    this.productoService.buscarTodos().subscribe((elements)=>{
      this.productos = elements
    })
  }

  cargarProductoForm(producto:Producto) {
    this.isCheckSave = false;
    this.formulario.reset({
      id:producto.id,
      referencia:producto.referencia,
      descripcion:producto.descripcion ,
      precioUnitario:producto.precioUnitario,
      unidadesDisponibles:producto.unidadesDisponibles,
      categoriaId:producto.categoriaId,
      nombre: producto.nombre
    })
   }

  public guardar() {
    this.productoService.agregar(this.formulario.value).subscribe((element)=>{
      this.buscarTodos();
      this.formulario.reset();
    })
  }

  public actualizar() {
    this.productoService.actualizar(this.formulario.value).subscribe((element)=>{
      this.buscarTodos();
      this.formulario.reset();
      this.isCheckSave=true;
    })
  }

}
