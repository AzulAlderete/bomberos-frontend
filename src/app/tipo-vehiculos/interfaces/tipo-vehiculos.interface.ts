export interface TipoVehiculo {
  data: Data[];
}

export interface Data {
  id: number;
  descripcion: string;
  created_at: Date;
  updated_at: Date;
}
