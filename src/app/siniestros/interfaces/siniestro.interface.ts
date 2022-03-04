export interface Siniestro {
  data: Datum[];
}

export interface Datum {
  id: number;
  descripcion: string;
  direccion: string;
  telefono: string;
  latitud: string;
  longitud: string;
  numero: number;
  fecha: Date;
  estado_emergencia: string;
  tipo_siniestro_id: number;
  solicitante_id: number;
  vehiculo_id: number;
  created_at: Date;
  updated_at: Date;
  vehiculo: Vehiculo;
  tipo_siniestro: TipoSiniestro;
  solicitante: Solicitante;
}

export interface Solicitante {
  id: number;
  nombre: string;
  apellido: string;
  telefono: string;
  documento: string;
  direccion: string;
  created_at: Date;
  updated_at: Date;
}

export interface TipoSiniestro {
  id: number;
  descripcion: string;
  created_at: Date;
  updated_at: Date;
}

export interface Vehiculo {
  id: number;
  codigo: number;
  patente: string;
  denominacion: string;
  estado: string;
  tipo_vehiculo_id: number;
  created_at: Date;
  updated_at: Date;
}
