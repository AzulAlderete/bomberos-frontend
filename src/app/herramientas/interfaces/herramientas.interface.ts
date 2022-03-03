export interface Herramienta {
  data: Data[];
}

export interface Data {
  id: number;
  codigo: number;
  nombre: string;
  estado: string;
  tipo_herramienta_id: number;
  created_at: Date;
  updated_at: Date;
  tipo_herramienta: TipoHerramienta;
}

export interface TipoHerramienta {
  id: number;
  descripcion: string;
  created_at: Date;
  updated_at: Date;
}
