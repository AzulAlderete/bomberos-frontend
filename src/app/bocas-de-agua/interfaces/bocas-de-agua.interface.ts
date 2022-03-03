export interface BocaDeAgua {
  data: Data[];
}

export interface Data {
  id: number;
  direccion: string;
  numero: number;
  latitud: string;
  longitud: string;
  created_at: Date;
  updated_at: Date;
}
