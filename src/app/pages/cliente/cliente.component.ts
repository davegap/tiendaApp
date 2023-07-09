import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Cliente } from 'src/app/interfaces/cliente';
import { Documento } from 'src/app/interfaces/documento';
import { ClientesService } from 'src/app/services/clientes.service';
import { DocumentosService } from 'src/app/services/documentos.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {

  public clientes: Cliente[] = [];
  public documentos: Documento[] = [];
  public isCheckSave: boolean = true;


  constructor(
    private documentoService: DocumentosService,
    private clienteService: ClientesService,
    private fb: FormBuilder
  ) {}
  ngOnInit() {
    this.buscarTodos();
  }

  public formulario: FormGroup = this.fb.group({
    id: null,
    nombres:null,
    apellidos: null,
    documento: null,
    estado: null,
    tipoDocumentoId: 0,
  })

  public buscarTodos() {
    this.clienteService.buscarTodos().subscribe((elements) => {
      this.clientes = elements;
    });
    this.documentoService.buscarTodos().subscribe((elements)=>{
      this.documentos = elements;
    })
  }

  cargarClienteForm(cliente:Cliente) {
    this.isCheckSave = false;
    this.formulario.reset({
      id: cliente.id,
    nombres:cliente.nombres,
    apellidos: cliente.apellidos,
    documento: cliente.documento,
    estado: cliente.estado,
    tipoDocumentoId: cliente.tipoDocumentoId,
    })
   }

  public guardar() {
    this.clienteService.agregar(this.formulario.value).subscribe((element)=>{
      this.buscarTodos();
      this.formulario.reset();
    })
  }

  public actualizar() {
    this.clienteService.actualizar(this.formulario.value).subscribe((element)=>{
      this.buscarTodos();
      this.formulario.reset();
      this.isCheckSave=true;
    },
    (error) => {
      // Manejo de errores aquí
      console.log('Error al actualizar:', error);
      // Puedes mostrar mensajes de error, realizar acciones específicas, etc.
    })
  }

}
