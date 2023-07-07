export interface Producto {
  id?:                  number;
  referencia:          string;
  nombre:              string;
  descripcion:         string;
  precioUnitario:      number;
  unidadesDisponibles: number;
  categoriaId:         number;
}
