export interface DetallePedido {
  id:       number;
  pedido:   Pedido;
  producto: Producto;
  cantidad: number;
  valor:    number;
}

export interface Pedido {
  id:           number;
  cliente:      Cliente;
  estadoPedido: EstadoPedido;
  fecha:        Date;
  total:        number;
}

export interface Cliente {
  id:            number;
  nombres:       string;
  apellidos:     string;
  documento:     string;
  estado:        string;
  tipoDocumento: EstadoPedido;
}

export interface EstadoPedido {
  id:          number;
  descripcion: string;
}

export interface Producto {
  id:                  number;
  categoria:           Categoria;
  referencia:          string;
  nombre:              string;
  descripcion:         string;
  precioUnitario:      number;
  unidadesDisponibles: number;
}

export interface Categoria {
  id:          number;
  nombre:      string;
  descripcion: string;
}
