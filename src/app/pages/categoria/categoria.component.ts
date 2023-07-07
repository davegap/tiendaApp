import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Categoria } from 'src/app/interfaces/categoria';
import { CategoriasService } from 'src/app/services/categorias.service';

@Component({
  selector: 'pages-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss'],
})
export class CategoriaComponent implements OnInit {
  public categorias: Categoria[] = [];
  public isCheckSave: boolean = true;

  constructor(
    private categoriaService: CategoriasService,
    private fb: FormBuilder
  ) {}

  public formulario: FormGroup = this.fb.group({
    id:null,
    nombre:[""],
    descripcion:[""]
  })

  ngOnInit() {
    this.buscarTodos();
  }

  public buscarTodos() {
    this.categoriaService.buscarTodos().subscribe((categorias) => {
      this.categorias = categorias;
    });
  }

  public guardar() {
    this.categoriaService.agregarCategoria(this.formulario.value).subscribe((categoria)=>{
      this.buscarTodos();
      this.formulario.reset();
    })
  }

  eliminar(categoria:Categoria) {
    this.categoriaService.eliminarCategoria(categoria).subscribe((categoria)=>{
      this.buscarTodos();
      this.formulario.reset();
    })
  }

  cargarCategoriaForm(categoria:Categoria) {
   this.isCheckSave = false;
   this.formulario.reset({
    id:categoria.id,
    nombre:categoria.nombre,
    descripcion:categoria.descripcion
   })
  }

  public actualizar() {
    this.categoriaService.actualizarCategoria(this.formulario.value).subscribe((categoria)=>{
      this.buscarTodos();
      this.formulario.reset();
      this.isCheckSave=true;
    })
  }


}
