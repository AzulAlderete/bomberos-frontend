export interface Rango {
  data: Datum[];
}

export interface Datum {
  id: number;
  descripcion: string;
  created_at: Date;
  updated_at: Date;
}
