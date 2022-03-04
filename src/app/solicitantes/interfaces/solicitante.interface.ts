export interface Solicitante {
  data: Datum[];
}

export interface Datum {
  id: number;
  nombre: string;
  apellido: string;
  telefono: string;
  documento: string;
  direccion: string;
  created_at: Date;
  updated_at: Date;
}
