export interface Vehiculo {
  data: Datum[];
}

export interface Datum {
  id: number;
  codigo: number;
  patente: string;
  denominacion: string;
  estado: string;
  tipo_vehiculo_id: number;
  created_at: Date;
  updated_at: Date;
  tipo_vehiculo: TipoVehiculo;
}

export interface TipoVehiculo {
  id: number;
  descripcion: string;
  created_at: Date;
  updated_at: Date;
}
